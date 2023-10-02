/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {FormikProps, FormikValues} from 'formik'
import {IOrderItems} from '../interfaces'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ItemTableData} from './ItemTableData'

interface AddItemsProps {
  formik: FormikProps<FormikValues>
}

export const AddItems: React.FC<AddItemsProps> = ({formik}) => {
  const currentItemsLength = formik.values['orderConfirmationItems'].length

  useEffect(() => {
    console.log('formik.values', formik.values)
  }, [formik.values])

  return (
    <div className={`card mt-8 mb-8`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Add Items</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>
            Current Items: {currentItemsLength}
          </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#modal_add_item'
          >
            <KTIcon iconName='plus' className='fs-3' />
            New Item
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-100px'>Item Number</th>
                <th className='min-w-100px'>Quantity</th>
                <th className='min-w-100px'>Unit</th>
                <th className='min-w-100px'>Description</th>
                <th className='min-w-100px'>Currency</th>
                <th className='min-w-100px'>Netto Unit Price</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {formik.values['orderConfirmationItems'].map((item: IOrderItems) => {
                return (
                  <tr key={item.itemNumber}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-9-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <ItemTableData {...item} key={item.itemNumber} />
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='pencil' className='fs-3' />
                        </a>
                        <a
                          onClick={() => {
                            formik.setFieldValue(
                              'orderConfirmationItems',
                              formik.values['orderConfirmationItems'].filter(
                                (i: IOrderItems) => i.itemNumber !== item.itemNumber
                              )
                            )
                          }}
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        >
                          <KTIcon iconName='trash' className='fs-3' />
                        </a>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}
