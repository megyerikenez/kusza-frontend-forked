import {INewBid} from '../../CreateNewBid/interfaces'

const NEW_STRING_FLAG = 'New'
const READY_TO_SIGN_STRING_FLAG = 'ReadyToSign'
const SUPERVISOR_SIGNED_STRING_FLAG = 'SupervisorSigned'

export const BidHistory = (bid: INewBid) => {
  return (
    <div className={`timeline timeline-5 card mb-5 shadow-none`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold mb-2 text-dark'>Előzmények</span>
          <span className='text-muted fw-semibold fs-7'>890,344 Sales</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          {bid.statusHistory.map((status) => (
            <div className='timeline-item' key={status.id}>
              {/* begin::Label */}
              <div className='timeline-label fw-normal ps+2 text-gray-800 text-muted'>
                {new Date(status.date).getFullYear() +
                  '\n' +
                  String(new Date(status.date).getMonth() + 1).padStart(2, '0') +
                  '.' +
                  String(new Date(status.date).getDate()).padStart(2, '0') +
                  '\n'}
                {String(new Date(status.date).getHours()).padStart(2, '0') +
                  ':' +
                  String(new Date(status.date).getMinutes()).padStart(2, '0')}
              </div>
              {/* end::Label */}
              {/* begin::Badge */}
              {status.toStatus === NEW_STRING_FLAG && (
                <div className={`timeline-badge ${new Date(status.date).getHours()}`}>
                  <i className='fa fa-genderless text-primary fs-1'></i>
                </div>
              )}
              {status.toStatus === READY_TO_SIGN_STRING_FLAG && (
                <div className={`timeline-badge `}>
                  <i className='fa fa-genderless text-warning fs-1'></i>
                </div>
              )}
              {status.toStatus === SUPERVISOR_SIGNED_STRING_FLAG && (
                <div className={`timeline-badge `}>
                  <i className='fa fa-genderless text-success fs-1'></i>
                </div>
              )}
              {/* end::Badge */}
              {/* begin::Text */}
              {status.toStatus === NEW_STRING_FLAG && (
                <div className='fw-mormal timeline-content text-muted ps-3'>
                  Új árajánlat létrehozva
                </div>
              )}
              {status.toStatus === READY_TO_SIGN_STRING_FLAG && (
                <div className='fw-mormal timeline-content text-muted ps-3'>Aláírásra vár</div>
              )}
              {status.toStatus === SUPERVISOR_SIGNED_STRING_FLAG && (
                <div className='fw-mormal timeline-content text-muted ps-3'>
                  Felülvizsgáló aláírta az árajánlatot
                </div>
              )}
              {/* end::Text */}
            </div>
          ))}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}
