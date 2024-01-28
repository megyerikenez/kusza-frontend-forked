import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {KTIcon} from '../../../helpers'
import {addItem} from '../../../../app/pages/administrator/CreateNewBid/itemSlice'

export const AddItemModal = () => {
  const dispatch = useDispatch()
  const [itemNumber, setItemNumber] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unit, setUnit] = useState(0)
  const [description, setDescription] = useState('')
  const [currency, setCurrency] = useState(0)
  const [netUnitPrice, setNetUnitPrice] = useState(0)

  const clearContent = () => {
    setItemNumber('')
    setQuantity(0)
    setUnit(0)
    setDescription('')
    setCurrency(0)
    setNetUnitPrice(0)
  }

  const handleSend = async () => {
    try {
      dispatch(addItem({itemNumber, quantity, unit, description, currency, netUnitPrice}))
      clearContent()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='modal fade' id='modal_add_item' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div
              className='btn btn-sm btn-icon btn-active-color-primary'
              onClick={clearContent}
              data-bs-dismiss='modal'
            >
              <KTIcon iconName='cross' className='fs-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-5'>Termék adatai</h1>
            </div>

            <div className='form-group row mb-5'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Azonosító szám
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder='Termék azonosító száma'
                  value={itemNumber}
                  onChange={(e) => setItemNumber(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group row mb-5'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Mennyiség
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='number'
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className='form-group row mb-5'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Darabszám
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  value={unit}
                  onChange={(e) => setUnit(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className='form-group row mb-5'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Leírás
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder='Termék leírása'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group row mb-5'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Pénznem
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  value={currency}
                  onChange={(e) => setCurrency(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-xl-3 col-lg-3 col-form-label text-lg-end text-xl-start'>
                Nettó egységár
              </label>
              <div className='col-lg-9 col-xl-9'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='number'
                  value={netUnitPrice}
                  onChange={(e) => setNetUnitPrice(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className='modal-footer flex-center '>
            <button
              type='button'
              className='btn btn-danger btn-active-light-primary px-6'
              data-bs-dismiss='modal'
              onClick={clearContent}
            >
              Mégse
            </button>
            <button
              type='button'
              className='btn btn-primary px-6'
              data-bs-dismiss='modal'
              onClick={handleSend}
            >
              Mentés
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
