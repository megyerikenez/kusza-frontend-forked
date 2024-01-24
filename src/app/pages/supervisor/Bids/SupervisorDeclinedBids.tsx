import {useSelector} from 'react-redux'
import {PageTitle} from '../../../../_metronic/layout/core'
import {INewBid} from '../../administrator/CreateNewBid/interfaces'
import {selectSupervisorBids} from '../state/supervisorSelectors'
import {AccordionBodyWrapper} from '../../administrator/ListBids/AccordionBody/AccordionBodyWrapper'
import {useEffect} from 'react'

export const SupervisorDeclinedBids = () => {
  const bids = useSelector(selectSupervisorBids).filter((bid: INewBid) => bid.status === 'declined')
  useEffect(() => {}, [bids])
  return (
    <>
      <PageTitle>Megrendelések</PageTitle>
      <div className='accordion' id='kt_accordion_1'>
        {bids.map((bid: INewBid) => {
          const accordionId = `kt_accordion_1_item_${bid.id}`
          const accordionHeaderId = `kt_accordion_1_header_${bid.id}`
          const accordionBodyId = `kt_accordion_1_body_${bid.id}`

          return (
            <div className='accordion-item' key={bid.id}>
              <h2 className='accordion-header' id={accordionHeaderId}>
                <button
                  className='accordion-button fs-4 fw-bold'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${accordionId}`}
                  aria-expanded='false'
                  aria-controls={accordionBodyId}
                >
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>
                    {bid.confirmOrganizationUnit}
                  </h3>
                </button>
              </h2>
              <div
                id={accordionId}
                className='accordion-collapse collapse'
                aria-labelledby={accordionHeaderId}
                data-bs-parent='#kt_accordion_1'
              >
                <div className='accordion-body'>
                  <AccordionBodyWrapper {...bid} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SupervisorDeclinedBids
