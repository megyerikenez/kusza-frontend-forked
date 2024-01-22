import {Formik, Form, Field, ErrorMessage, useFormik, FormikValues} from 'formik'
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

  const formik = useFormik<FormikValues>({
    initialValues,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      try {
        dispatch(addItem(values))
        formik.resetForm()
      } catch (error) {
        console.error(error)
        setStatus('Hibás adatok')
        setSubmitting(false)
      }
    },
  })

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
              <h1 className='mb-3'>Termék adatai</h1>
            </div>

            <Formik
              initialValues={initialValues}
              onSubmit={(values, {setStatus, setSubmitting}) => {
                try {
                  dispatch(addItem(values))
                  formik.resetForm()
                } catch (error) {
                  console.error(error)
                  setStatus('Hibás adatok')
                  setSubmitting(false)
                }
              }}
            >
              {() => (
                <Form>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Azonosító kód</label>
                    <Field
                      type='text'
                      className='form-control form-control-solid'
                      name='itemNumber'
                    />
                    <ErrorMessage name='itemNumber' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Darab</label>
                    <Field
                      type='number'
                      className='form-control form-control-solid'
                      name='quantity'
                    />
                    <ErrorMessage name='quantity' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Egység</label>
                    <Field type='number' className='form-control form-control-solid' name='unit' />
                    <ErrorMessage name='unit' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Leírás</label>
                    <Field
                      type='text'
                      className='form-control form-control-solid'
                      name='description'
                    />
                    <ErrorMessage name='description' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Valuta</label>
                    <Field
                      type='number'
                      className='form-control form-control-solid'
                      name='currency'
                    />
                    <ErrorMessage name='currency' component='div' className='fv-help-block' />
                  </div>
                  <div className='fv-row mb-10'>
                    <label className='required fw-bold fs-6 mb-2'>Nettó egységár</label>
                    <Field
                      type='text'
                      className='form-control form-control-solid'
                      name='netUnitPrice'
                      readOnly
                    />
                    <ErrorMessage name='net' component='div' className='fv-help-block' />
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                      Save
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
