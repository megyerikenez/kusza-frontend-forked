import React from 'react'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {initialValues} from '../helpers'

interface ContractorDataTabProps {
  formik: ReturnType<typeof useFormik>
}

export const ContractorDataTab: React.FC<ContractorDataTabProps> = ({formik}) => {
  return (
    <div className={`card mt-8 mb-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Contractor Data</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='fv-row mb-8 mt-8' key={initialValues.contractorName}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorName}
          </label>
          <input
            placeholder={'contractorName'}
            {...formik.getFieldProps('contractorName')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorName'] && formik.errors[initialValues.contractorName],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorName] &&
                  !formik.errors[initialValues.contractorName],
              }
            )}
            type='text'
          />
          {formik.touched.contractorName && formik.errors.contractorName && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorName === 'string' ? (
                  <span role='alert'>{formik.errors.contractorName}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorName field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorDelegate}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorDelegate}
          </label>
          <input
            placeholder={'contractorDelegate'}
            {...formik.getFieldProps('contractorDelegate')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorDelegate'] &&
                  formik.errors[initialValues.contractorDelegate],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorDelegate] &&
                  !formik.errors[initialValues.contractorDelegate],
              }
            )}
            type='text'
          />
          {formik.touched.contractorDelegate && formik.errors.contractorDelegate && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorDelegate === 'string' ? (
                  <span role='alert'>{formik.errors.contractorDelegate}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorDelegate field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorSeat}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorSeat}
          </label>
          <input
            placeholder={'contractorSeat'}
            {...formik.getFieldProps('contractorSeat')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorSeat'] && formik.errors[initialValues.contractorSeat],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorSeat] &&
                  !formik.errors[initialValues.contractorSeat],
              }
            )}
            type='text'
          />
          {formik.touched.contractorSeat && formik.errors.contractorSeat && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorSeat === 'string' ? (
                  <span role='alert'>{formik.errors.contractorSeat}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorSeat field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorTaxNumber}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorTaxNumber}
          </label>
          <input
            placeholder={'contractorTaxNumber'}
            {...formik.getFieldProps('contractorTaxNumber')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorTaxNumber'] &&
                  formik.errors[initialValues.contractorTaxNumber],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorTaxNumber] &&
                  !formik.errors[initialValues.contractorTaxNumber],
              }
            )}
            type='text'
          />
          {formik.touched.contractorTaxNumber && formik.errors.contractorTaxNumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorTaxNumber === 'string' ? (
                  <span role='alert'>{formik.errors.contractorTaxNumber}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorTaxNumber field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorPhoneNumber}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorPhoneNumber}
          </label>
          <input
            placeholder={'contractorPhoneNumber'}
            {...formik.getFieldProps('contractorPhoneNumber')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorPhoneNumber'] &&
                  formik.errors[initialValues.contractorPhoneNumber],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorPhoneNumber] &&
                  !formik.errors[initialValues.contractorPhoneNumber],
              }
            )}
            type='text'
          />
          {formik.touched.contractorPhoneNumber && formik.errors.contractorPhoneNumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorPhoneNumber === 'string' ? (
                  <span role='alert'>{formik.errors.contractorPhoneNumber}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorPhoneNumber field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorEmail}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorEmail}
          </label>
          <input
            placeholder={'contractorEmail'}
            {...formik.getFieldProps('contractorEmail')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorEmail'] && formik.errors[initialValues.contractorEmail],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorEmail] &&
                  !formik.errors[initialValues.contractorEmail],
              }
            )}
            type='text'
          />
          {formik.touched.contractorEmail && formik.errors.contractorEmail && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorEmail === 'string' ? (
                  <span role='alert'>{formik.errors.contractorEmail}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorEmail field.</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-8' key={initialValues.contractorContact}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.contractorContact}
          </label>
          <input
            placeholder={'contractorContact'}
            {...formik.getFieldProps('contractorContact')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['contractorContact'] &&
                  formik.errors[initialValues.contractorContact],
              },
              {
                'is-valid':
                  formik.touched[initialValues.contractorContact] &&
                  !formik.errors[initialValues.contractorContact],
              }
            )}
            type='text'
          />
          {formik.touched.contractorContact && formik.errors.contractorContact && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.contractorContact === 'string' ? (
                  <span role='alert'>{formik.errors.contractorContact}</span>
                ) : (
                  <span role='alert'>An error occurred with the contractorContact field.</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
