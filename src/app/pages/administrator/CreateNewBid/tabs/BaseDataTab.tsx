import React from 'react'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {initialValues} from '../helpers'

interface BaseDataTabProps {
  formik: ReturnType<typeof useFormik>
}

export const BaseDataTab: React.FC<BaseDataTabProps> = ({formik}) => {
  return (
    <div className={`card mt-8 mb-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Base Data</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='fv-row mb-8 mt-8' key={initialValues.deliveryNumber}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.deliveryNumber}
          </label>
          <input
            placeholder={'deliveryNumber'}
            {...formik.getFieldProps('deliveryNumber')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['deliveryNumber'] && formik.errors[initialValues.deliveryNumber],
              },
              {
                'is-valid':
                  formik.touched[initialValues.deliveryNumber] &&
                  !formik.errors[initialValues.deliveryNumber],
              }
            )}
            type='text'
          />
          {formik.touched.deliveryNumber && formik.errors.deliveryNumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.deliveryNumber === 'string' ? (
                  <span role='alert'>{formik.errors.deliveryNumber}</span>
                ) : (
                  <span role='alert'>An error occurred with the deliveryNumber field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={initialValues.description}>
          <label className='form-label fs-6 fw-bolder text-dark'>{initialValues.description}</label>
          <input
            placeholder={'description'}
            {...formik.getFieldProps('description')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['description'] && formik.errors[initialValues.description],
              },
              {
                'is-valid':
                  formik.touched[initialValues.description] &&
                  !formik.errors[initialValues.description],
              }
            )}
            type='text'
          />
          {formik.touched.description && formik.errors.description && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.description === 'string' ? (
                  <span role='alert'>{formik.errors.description}</span>
                ) : (
                  <span role='alert'>An error occurred with the description field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={initialValues.deliveryDate}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.deliveryDate}
          </label>
          <input
            placeholder={'deliveryDate'}
            {...formik.getFieldProps('deliveryDate')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['deliveryDate'] && formik.errors[initialValues.deliveryDate],
              },
              {
                'is-valid':
                  formik.touched[initialValues.deliveryDate] &&
                  !formik.errors[initialValues.deliveryDate],
              }
            )}
            type='text'
          />
          {formik.touched.deliveryDate && formik.errors.deliveryDate && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.deliveryDate === 'string' ? (
                  <span role='alert'>{formik.errors.deliveryDate}</span>
                ) : (
                  <span role='alert'>An error occurred with the deliveryDate field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={initialValues.supplierRequester}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.supplierRequester}
          </label>
          <input
            placeholder={'supplierRequester'}
            {...formik.getFieldProps('supplierRequester')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['supplierRequester'] &&
                  formik.errors[initialValues.supplierRequester],
              },
              {
                'is-valid':
                  formik.touched[initialValues.supplierRequester] &&
                  !formik.errors[initialValues.supplierRequester],
              }
            )}
            type='text'
          />
          {formik.touched.supplierRequester && formik.errors.supplierRequester && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.supplierRequester === 'string' ? (
                  <span role='alert'>{formik.errors.supplierRequester}</span>
                ) : (
                  <span role='alert'>An error occurred with the supplierRequester field.</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-8' key={initialValues.purchaserOrderNumber}>
          <label className='form-label fs-6 fw-bolder text-dark'>
            {initialValues.purchaserOrderNumber}
          </label>
          <input
            placeholder={'purchaserOrderNumber'}
            {...formik.getFieldProps('purchaserOrderNumber')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid':
                  formik.touched['purchaserOrderNumber'] &&
                  formik.errors[initialValues.purchaserOrderNumber],
              },
              {
                'is-valid':
                  formik.touched[initialValues.purchaserOrderNumber] &&
                  !formik.errors[initialValues.purchaserOrderNumber],
              }
            )}
            type='text'
          />
          {formik.touched.purchaserOrderNumber && formik.errors.purchaserOrderNumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                {typeof formik.errors.purchaserOrderNumber === 'string' ? (
                  <span role='alert'>{formik.errors.purchaserOrderNumber}</span>
                ) : (
                  <span role='alert'>An error occurred with the purchaserOrderNumber field.</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
