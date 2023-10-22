import React from 'react'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {initialValues} from '../helpers'

interface OrganizationDataTabProps {
  formik: ReturnType<typeof useFormik>
}

export const OrganizationDataTab: React.FC<OrganizationDataTabProps> = ({formik}) => {
  return (
    <div className={`card mt-8 mb-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Organizáció adatai </span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='fv-row mb-8 mt-8' key={initialValues.confirmOrganizationUnit}>
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

        <div className='fv-row mb-8' key={initialValues.paymentMethod}>
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
        <div className='fv-row mb-8' key={initialValues.invoiceAddress}>
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

        <div className='fv-row mb-8' key={initialValues.year}>
          <label className='form-label fs-6 fw-bolder text-dark'>Év</label>
          <input
            placeholder={'Year'}
            {...formik.getFieldProps('year')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid': formik.touched['year'] && formik.errors[initialValues.year],
              },
              {
                'is-valid':
                  formik.touched[initialValues.year] && !formik.errors[initialValues.year],
              }
            )}
            type='text'
          />
          {formik.touched.year && formik.errors.year && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.year === 'string' ? (
                  <span role='alert'>{formik.errors.year}</span>
                ) : (
                  <span role='alert'>An error occurred with the Year field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.faculty}>
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

        <div className='fv-row mb-8' key={initialValues.confirmationNumber}>
          <label className='form-label fs-6 fw-bolder text-dark'>Megerősítő szám</label>
          <input
            placeholder={'Confirmation Number'}
            {...formik.getFieldProps('confirmationNumber')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['confirmationNumber'] &&
                  formik.errors[initialValues.confirmationNumber],
              },
              {
                'is-valid':
                  formik.touched[initialValues.confirmationNumber] &&
                  !formik.errors[initialValues.confirmationNumber],
              }
            )}
            type='text'
          />
          {formik.touched.confirmationNumber && formik.errors.confirmationNumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.confirmationNumber === 'string' ? (
                  <span role='alert'>{formik.errors.confirmationNumber}</span>
                ) : (
                  <span role='alert'>An error occurred with the Confirmation Number field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.category}>
          <label className='form-label fs-6 fw-bolder text-dark'>Kategória</label>
          <input
            placeholder={'Category'}
            {...formik.getFieldProps('category')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid': formik.touched['category'] && formik.errors[initialValues.category],
              },
              {
                'is-valid':
                  formik.touched[initialValues.category] && !formik.errors[initialValues.category],
              }
            )}
            type='text'
          />
          {formik.touched.category && formik.errors.category && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.category === 'string' ? (
                  <span role='alert'>{formik.errors.category}</span>
                ) : (
                  <span role='alert'>An error occurred with the Category field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.offerDescription}>
          <label className='form-label fs-6 fw-bolder text-dark'>Ajánlat leírása</label>
          <input
            placeholder={'Offer Description'}
            {...formik.getFieldProps('offerDescription')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['offerDescription'] &&
                  formik.errors[initialValues.offerDescription],
              },
              {
                'is-valid':
                  formik.touched[initialValues.offerDescription] &&
                  !formik.errors[initialValues.offerDescription],
              }
            )}
            type='text'
          />
          {formik.touched.offerDescription && formik.errors.offerDescription && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.offerDescription === 'string' ? (
                  <span role='alert'>{formik.errors.offerDescription}</span>
                ) : (
                  <span role='alert'>An error occurred with the Offer Description field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.supervisor}>
          <label className='form-label fs-6 fw-bolder text-dark'>Felül vizsgáló</label>
          <input
            placeholder={'Supervisor'}
            {...formik.getFieldProps('supervisor')}
            className={clsx(
              'form-control bg-transparent',
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
            type='text'
          />
          {formik.touched.supervisor && formik.errors.supervisor && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.supervisor === 'string' ? (
                  <span role='alert'>{formik.errors.supervisor}</span>
                ) : (
                  <span role='alert'>An error occurred with the Supervisor field.</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
