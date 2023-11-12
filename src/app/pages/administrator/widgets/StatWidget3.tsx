// @ts-nocheck
/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {INewBid} from '../CreateNewBid/interfaces'
type Props = {
  className: string
  backGroundColor: string
  bids: INewBid[]
}

export const StatWidget3: FC<Props> = ({className, backGroundColor, bids}) => {
  const lengthOfBid = bids.length
  const lengthOfNewBid = bids.filter((bid) => bid.status === 'New').length
  const lengthOfWaitingForSupervisorBid = bids.filter((bid) => bid.status === 'ReadyToSign').length
  const lengthOfSupervisorSignedBid = bids.filter((bid) => bid.status === 'SupervisorSigned').length
  return (
    <div
      className={`card ${className} theme-dark-bg-body`}
      style={{backgroundColor: backGroundColor}}
    >
      {/* begin::Body */}
      <div className='card-body d-flex flex-column'>
        {/* begin::Wrapper */}
        <div className='d-flex flex-column mb-7'>
          {/* begin::Title  */}
          <a href='#' className='text-dark text-hover-primary fw-bolder fs-3'>
            Összefoglaló
          </a>
          {/* end::Title */}
        </div>
        {/* end::Wrapper */}

        <div className='row g-0'>
          {/*begin::Col*/}
          <div className='col-6'>
            <div className='d-flex align-items-center mb-9 me-2'>
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-3'>
                <div className='symbol-label bg-body bg-opacity-50'>
                  <KTIcon iconName='abstract-14' className='fs-1 text-dark' />
                </div>
              </div>
              {/*end::Symbol*/}

              {/*begin::Title*/}
              <div>
                <div className='fs-5 text-dark fw-bolder lh-1'>{lengthOfBid} db</div>
                <div className='fs-7 text-gray-600 fw-bold'>Összes megrendelésem</div>
              </div>
              {/*end::Title*/}
            </div>
          </div>
          {/*end::Col*/}

          {/*begin::Col*/}
          <div className='col-6'>
            <div className='d-flex align-items-center mb-9 ms-2'>
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-3'>
                <div className='symbol-label bg-body bg-opacity-50'>
                  <KTIcon iconName='abstract-12' className='fs-1 text-dark' />
                </div>
              </div>
              {/*end::Symbol*/}

              {/*begin::Title*/}
              <div>
                <div className='fs-5 text-dark fw-bolder lh-1'>{lengthOfNewBid} db</div>
                <div className='fs-7 text-gray-600 fw-bold'>Szerkesztés alatt álló</div>
              </div>
              {/*end::Title*/}
            </div>
          </div>
          {/*end::Col*/}

          {/*begin::Col*/}
          <div className='col-6'>
            <div className='d-flex align-items-center me-2'>
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-3'>
                <div className='symbol-label bg-body bg-opacity-50'>
                  <KTIcon iconName='abstract-18' className='fs-1 text-dark' />
                </div>
              </div>
              {/*end::Symbol*/}

              {/*begin::Title*/}
              <div>
                <div className='fs-5 text-dark fw-bolder lh-1'>
                  {lengthOfWaitingForSupervisorBid} db
                </div>
                <div className='fs-7 text-gray-600 fw-bold'>Felülvizsgáló aláirására vár</div>
              </div>
              {/*end::Title*/}
            </div>
          </div>
          {/*end::Col*/}

          {/*begin::Col*/}
          <div className='col-6'>
            <div className='d-flex align-items-center ms-2'>
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-3'>
                <div className='symbol-label bg-body bg-opacity-50'>
                  <KTIcon iconName='abstract-2' className='fs-1 text-dark' />
                </div>
              </div>
              {/*end::Symbol*/}

              {/*begin::Title*/}
              <div>
                <div className='fs-5 text-dark fw-bolder lh-1'>
                  {lengthOfSupervisorSignedBid} db
                </div>
                <div className='fs-7 text-gray-600 fw-bold'>Felülvizsgáló által aláirt</div>
              </div>
              {/*end::Title*/}
            </div>
          </div>
          {/*end::Col*/}
        </div>
      </div>
    </div>
  )
}
