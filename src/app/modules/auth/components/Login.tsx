/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {
  getPaymentMethods,
  getSupervisors,
  getUserDataByToken,
  login,
  setupAxiosAuthToken,
} from '../core/requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useDispatch} from 'react-redux'
import {setUserData} from '../state/authSlice'
import axios from 'axios'
import {
  setBids,
  setCurrencies,
  setPaymentMethods,
  setSupervisors,
} from '../../../pages/administrator/state/administratorSlice'
import {getCurrencies, getUserBids} from '../../../pages/administrator/requests'
import {ADMINISTRATOR_ROLE, SUPERVISOR_ROLE} from '../../../../_metronic/helpers/roles'
import {getAllBids} from '../../../pages/supervisor/requests'
import {setAllBids} from '../../../pages/supervisor/state/supervisorSlice'
import toast from 'react-hot-toast'

const requiredMessage = 'Kötelező mező'
const maxLength = 50
const maxLengthMessage = 'Maximum 50 karakter'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    //.email('Helytelen email formátum')
    .min(5, 'Minimum 5 karakter')
    .max(maxLength, maxLengthMessage)
    .required(requiredMessage),
  password: Yup.string()
    .min(1, 'Minimum 1 karakter')
    .max(maxLength, maxLengthMessage)
    .required(requiredMessage),
})

const initialValues = {
  email: 'Administrator',
  password: 'qwedsa123',
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const response = await login(values.email, values.password)
        setupAxiosAuthToken(axios, response.data.result.token)
        const userData = await getUserDataByToken()
        const userRoles: string[] = userData.data.result.roles
        await dispatch(
          setUserData({
            userName: userData.data.result.name,
            userRoles: userData.data.result.roles,
            userID: userData.data.result.id,
          })
        )
        if (userRoles.includes(ADMINISTRATOR_ROLE)) {
          const bids = await getUserBids()
          dispatch(setBids(bids.data.result))
          const paymentMethods = await getPaymentMethods()
          dispatch(setPaymentMethods(paymentMethods.data.result))
          const currencies = await getCurrencies()
          dispatch(setCurrencies(currencies.data.result))
        } else if (userRoles.includes(SUPERVISOR_ROLE)) {
          const bids = await getAllBids()
          dispatch(setAllBids(bids.data.result))
        }
        const supervisors = await getSupervisors()
        dispatch(setSupervisors(supervisors.data.result))
        toast.success('Sikeres bejelentkezés')
      } catch (error) {
        console.error(error)
        setSubmitting(false)
        setLoading(false)
        toast.error('Hibás bejelentkezési adatok')
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>Belépés</h1>
        <div className='text-gray-500 fw-semibold fs-6'>Kusza Frontend</div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Google bejelentkezés
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Apple bejelentkezés
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      {/* begin::Separator */}
      <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'> emaillel</span>
      </div>
      {/* end::Separator */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Teszteléshez <strong>Admin</strong> és <strong>qwedsa123</strong> a jelszó.
          </div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Pannon Egyetemi email cim</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>Jelszó</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        <Link to='/auth/forgot-password' className='link-primary'>
          Elfelejtett jelszó ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Tovább</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Kérem várjon
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}
