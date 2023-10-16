import {IOrderItems} from '../interfaces'

export const ItemTableData = (item: IOrderItems) => {
  return (
    <>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.itemNumber}</span>
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.quantity}</span>
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.unit}</span>
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.description}</span>
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.currency}</span>
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold text-hover-primary fs-6'>{item.netUnitPrice}</span>
          </div>
        </div>
      </td>
    </>
  )
}
