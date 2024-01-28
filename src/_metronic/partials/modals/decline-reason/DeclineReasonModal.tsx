import {useState} from 'react'
import {KTIcon} from '../../../helpers'
import {useSelector} from 'react-redux'
import {selectReasonId} from '../../../../app/pages/administrator/CreateNewBid/reasonSelector'
import {declineBid, getBidById} from '../../../../app/pages/supervisor/requests'
import {useDispatch} from 'react-redux'
import {updateBidInState} from '../../../../app/pages/supervisor/state/supervisorSlice'

export const DeclineReasonModal = () => {
  const [message, setMessage] = useState('')
  let bidId = useSelector(selectReasonId)
  const dispatch = useDispatch()

  const clearContent = () => {
    setMessage('')
  }

  const handleSend = async () => {
    console.log('message:', message, bidId)
    try {
      await declineBid(bidId, message)
      clearContent()
      let newBidData = await getBidById(bidId)
      dispatch(updateBidInState(newBidData.data.result))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='modal fade' id='declineReasonModal' aria-hidden='true'>
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
              <h1 className='mb-3'>Elutasitás indoklása</h1>
              <div className='text-muted fw-bold fs-5'></div>
            </div>

            <textarea
              className='form-control form-control-solid mb-8'
              rows={3}
              placeholder='Ide irja az indoklást'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className='d-flex justify-content-between' data-bs-dismiss='modal'>
              <button className='btn btn-danger' onClick={clearContent}>
                Mégse
              </button>
              <button className='btn btn-primary' onClick={handleSend} data-bs-dismiss='modal'>
                Küldés
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
