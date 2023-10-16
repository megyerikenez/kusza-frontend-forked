import {useSelector} from 'react-redux'
import {selectBids} from '../administratorSelector'
import {INewBid} from '../CreateNewBid/interfaces'

export const ListAllBid = () => {
  const bids = useSelector(selectBids)
  console.log(bids)
  return (
    <>
      {bids.map((bid: INewBid) => (
        <div key={bid.id}>
          <h3>{bid.description}</h3>
        </div>
      ))}
    </>
  )
}

export default ListAllBid
