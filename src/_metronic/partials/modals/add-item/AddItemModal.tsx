import {Formik, Form, Field, ErrorMessage} from 'formik'
import {IOrderItems} from '../../../../app/pages/administrator/CreateNewBid/interfaces'
import {KTIcon} from '../../../helpers'
import {useDispatch} from 'react-redux'
import {addItem} from '../../../../app/pages/administrator/CreateNewBid/itemSlice'

export const AddItemModal = () => {
  const dispatch = useDispatch()

  const initialValues: IOrderItems = {
    itemNumber: '',
    quantity: 0,
    unit: 0,
    description: '',
    currency: 0,
    netUnitPrice: 0,
  }

  const handleSubmit = (values: IOrderItems) => {
    dispatch(addItem(values))
  }

  return (
    <div className='modal fade' id='modal_add_item' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTIcon iconName='cross' className='fs-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>Add a new Item</h1>
            </div>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {() => (
                <Form>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Item Number</label>
                    <Field
                      type='text'
                      className='form-control form-control-solid'
                      name='itemNumber'
                      placeholder='Enter item number'
                    />
                    <ErrorMessage name='itemNumber' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Quantity</label>
                    <Field
                      type='number'
                      className='form-control form-control-solid'
                      name='quantity'
                      placeholder='Enter quantity'
                    />
                    <ErrorMessage name='quantity' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Unit</label>
                    <Field
                      type='number'
                      className='form-control form-control-solid'
                      name='unit'
                      placeholder='Enter unit'
                    />
                    <ErrorMessage name='unit' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Description</label>
                    <Field
                      type='text'
                      className='form-control form-control-solid'
                      name='description'
                      placeholder='Enter description'
                    />
                    <ErrorMessage name='description' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Currency</label>
                    <Field
                      type='number'
                      className='form-control form-control-solid'
                      name='currency'
                      placeholder='Enter currency'
                    />
                    <ErrorMessage name='currency' component='div' className='fv-help-block' />
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                      Add Item
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
