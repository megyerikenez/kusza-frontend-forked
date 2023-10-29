/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {FormikProps, FormikValues} from 'formik'
import {IOrderItems} from '../interfaces'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ItemTableData} from './ItemTableData'
import {useSelector} from 'react-redux'
import {selectItem} from '../itemSelector'

interface AddItemsProps {
  formik: FormikProps<FormikValues>
}

export const AddItems: React.FC<AddItemsProps> = ({formik}) => {
  const currentItemsLength = formik.values['orderConfirmationItems'].length
  let itemLastCreated = useSelector(selectItem)
  let itemList = formik.values['orderConfirmationItems']
  const prevItemsRef = useRef({
    itemNumber: '',
    description: '',
    quantity: 0,
    unit: 0,
    netUnitPrice: 0,
    currency: 0,
  })

  useEffect(() => {
    if (
      itemLastCreated &&
      itemLastCreated.itemNumber &&
      itemList.find((i: IOrderItems) => i.itemNumber === itemLastCreated.itemNumber) ===
        undefined &&
      itemLastCreated.itemNumber !== prevItemsRef.current.itemNumber
    ) {
      formik.setFieldValue('orderConfirmationItems', [
        ...formik.values['orderConfirmationItems'],
        itemLastCreated,
      ])
      prevItemsRef.current = itemLastCreated
    }
  }, [formik, formik.values, itemLastCreated, prevItemsRef, itemList])

  return (
    <div className={`card mt-8 mb-8`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Termék hozzáadása</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>
            Jelenlegi termékek: {currentItemsLength - 1}
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
            Új termék hozzáadása
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
                <th className='min-w-100px'>Termék azonositó</th>
                <th className='min-w-100px'>Darab</th>
                <th className='min-w-100px'>Egység</th>
                <th className='min-w-100px'>Leírás</th>
                <th className='min-w-100px'>Valuta</th>
                <th className='min-w-100px'>Netto egységár</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {formik.values['orderConfirmationItems'].map((item: IOrderItems) => {
                if (item.itemNumber) {
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
                            onClick={() => {
                              formik.setFieldValue(
                                'orderConfirmationItems',
                                formik.values['orderConfirmationItems'].filter(
                                  (i: IOrderItems) => i.itemNumber !== item.itemNumber
                                )
                              )
                              prevItemsRef.current = {...item}
                            }}
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                          >
                            <KTIcon iconName='trash' className='fs-3' />
                          </a>
                        </div>
                      </td>
                    </tr>
                  )
                } else {
                  return null
                }
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
