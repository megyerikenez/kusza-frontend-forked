import {INewBid} from '../../CreateNewBid/interfaces'
import {AccordionBodyBaseData} from './AccordionBodyBaseData'

export const AccordionBodyWrapper = (bid: INewBid) => {
  return <AccordionBodyBaseData key={bid.id} {...bid} />
}
