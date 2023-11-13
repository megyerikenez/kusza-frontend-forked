import {useSelector} from 'react-redux'
import {selectBids} from '../state/administratorSelector'
import {INewBid} from '../CreateNewBid/interfaces'
import {PageTitle} from '../../../../_metronic/layout/core'
import {AccordionBodyWrapper} from './AccordionBody/AccordionBodyWrapper'
import {MixedWidget14} from '../../../../_metronic/partials/widgets'
import {StatWidget3} from '../widgets/StatWidget3'

export const ListAllBid = () => {
  const bids = useSelector(selectBids)
  console.log(bids)

  return (
    <>
      <div className='row gy-5 g-xl-10 d-flex justify-content-around'>
        {/*begin::Col*/}
        <div className='col-xl-4'>
          <MixedWidget14
            className='card-xl-stretch mb-xl-10'
            backGroundColor='#F7D9E3'
            chartHeight='100px'
          />
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className='col-xl-4'>
          <StatWidget3 className='card-xl-stretch mb-xl-10' backGroundColor='#CBD4F4' bids={bids} />
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
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
                  {bid.status === 'SupervisorSigned' && (
                    <i className='bi bi-cloud-download ms-2'></i>
                  )}
                  {bid.status === 'New' && <i className='bi bi-pencil-square ms-2'></i>}
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

export default ListAllBid
