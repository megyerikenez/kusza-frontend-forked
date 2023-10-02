// create an empty function for the modal

import {IOrderItems} from '../../../../app/pages/administrator/CreateNewBid/interfaces'
import {KTIcon} from '../../../helpers'

export const AddItemModal = () => {
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
          </div>
        </div>
      </div>
    </div>
  )
}
