import React from 'react'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {generateFieldKey, initialValues} from '../helpers'
import {useSelector} from 'react-redux'
import {selectSupervisors} from '../../state/administratorSelector'
import {ISupervisor} from '../interfaces'

interface OrganizationDataTabProps {
  formik: ReturnType<typeof useFormik>
}

export const OrganizationDataTab: React.FC<OrganizationDataTabProps> = ({formik}) => {
  const supervisors = useSelector(selectSupervisors)
  return (
    <div className={`card mt-8 mb-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Organizáció adatai </span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='fv-row mb-8 mt-8' key={generateFieldKey('confirmOrganizationUnit')}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            Organizáció egység megerősitése
          </label>
          <input
            placeholder={'Confirm Organization Unit'}
            {...formik.getFieldProps('confirmOrganizationUnit')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['confirmOrganizationUnit'] &&
                  formik.errors[initialValues.confirmOrganizationUnit],
              },
              {
                'is-valid':
                  formik.touched[initialValues.confirmOrganizationUnit] &&
                  !formik.errors[initialValues.confirmOrganizationUnit],
              }
            )}
            type='text'
          />
          {formik.touched.confirmOrganizationUnit && formik.errors.confirmOrganizationUnit && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.confirmOrganizationUnit === 'string' ? (
                  <span role='alert'>{formik.errors.confirmOrganizationUnit}</span>
                ) : (
                  <span role='alert'>
                    An error occurred with the Confirm Organization Unit field.
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={generateFieldKey('paymentMethod')}>
          <label className='form-label fs-6 fw-bolder text-dark'>Fizetési mód</label>
          <input
            placeholder={'Payment Method'}
            {...formik.getFieldProps('paymentMethod')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['paymentMethod'] && formik.errors[initialValues.paymentMethod],
              },
              {
                'is-valid':
                  formik.touched[initialValues.paymentMethod] &&
                  !formik.errors[initialValues.paymentMethod],
              }
            )}
            type='text'
          />
          {formik.touched.paymentMethod && formik.errors.paymentMethod && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.paymentMethod === 'string' ? (
                  <span role='alert'>{formik.errors.paymentMethod}</span>
                ) : (
                  <span role='alert'>An error occurred with the Payment Method field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={generateFieldKey('invoiceAddress')}>
          <label className='form-label fs-6 fw-bolder text-dark'>Számlázási cím</label>
          <input
            placeholder={'Invoice Address'}
            {...formik.getFieldProps('invoiceAddress')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['invoiceAddress'] && formik.errors[initialValues.invoiceAddress],
              },
              {
                'is-valid':
                  formik.touched[initialValues.invoiceAddress] &&
                  !formik.errors[initialValues.invoiceAddress],
              }
            )}
            type='text'
          />
          {formik.touched.invoiceAddress && formik.errors.invoiceAddress && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.invoiceAddress === 'string' ? (
                  <span role='alert'>{formik.errors.invoiceAddress}</span>
                ) : (
                  <span role='alert'>An error occurred with the Invoice Address field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={generateFieldKey('faculty')}>
          <label className='form-label fs-6 fw-bolder text-dark'>Facilitás</label>
          <input
            placeholder={'Faculty'}
            {...formik.getFieldProps('faculty')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid': formik.touched['faculty'] && formik.errors[initialValues.faculty],
              },
              {
                'is-valid':
                  formik.touched[initialValues.faculty] && !formik.errors[initialValues.faculty],
              }
            )}
            type='text'
          />
          {formik.touched.faculty && formik.errors.faculty && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.faculty === 'string' ? (
                  <span role='alert'>{formik.errors.faculty}</span>
                ) : (
                  <span role='alert'>An error occurred with the Faculty field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={generateFieldKey('supervisor')}>
          <label className='form-label fs-6 fw-bolder text-dark'>Felül vizsgáló</label>
          <select
            {...formik.getFieldProps('supervisor')}
            className={clsx(
              'form-select bg-transparent',
              {
                'is-invalid':
                  formik.touched['supervisor'] && formik.errors[initialValues.supervisor],
              },
              {
                'is-valid':
                  formik.touched[initialValues.supervisor] &&
                  !formik.errors[initialValues.supervisor],
              }
            )}
          >
            <option value=''>Válasszon felülvizsgálót...</option>
            {supervisors.map((supervisor: ISupervisor) => (
              <option key={supervisor.id} value={supervisor.id}>
                {supervisor.userName}
              </option>
            ))}
          </select>
          {formik.touched.supervisor && formik.errors.supervisor && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.supervisor === 'string' ? (
                  <span role='alert'>{formik.errors.supervisor}</span>
                ) : (
                  <span role='alert'>Hiba a felülvizsgáló kiválasztása közben.</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
