import {ListsWidget5} from '../../../../../_metronic/partials/widgets'
import {INewBid, IOrderItems} from '../../CreateNewBid/interfaces'
import {BidHistory} from './BidHistory'

export const AccordionBodyBaseData = (bid: INewBid) => {
  return (
    <>
      <div className='text-center'>
        <table className='table table-striped gy-7 gs-7 border mb-5'>
          <thead>
            <tr className='fw-bold fs-5'>
              <th>Azonositó kód</th>
              <th>Leírás</th>
              <th>Szállítás dátuma</th>
              <th>Beszerző</th>
              <th>Vevői rendelés szám</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.id}</td>
              <td>{bid.description}</td>
              <td>{bid.deliveryDate}</td>
              <td>{bid.supplierRequester}</td>
              <td>{bid.purchaserOrderNumber}</td>
            </tr>
          </tbody>
        </table>
        <div className='separator' />
        <table className='table table-striped gy-7 gs-7 border mb-5'>
          <thead>
            <tr className='fw-bold fs-5'>
              <th>Kontakt neve</th>
              <th>Organizáció</th>
              <th>Telephely</th>
              <th>Adószám</th>
              <th>Telefonszám</th>
              <th>Email cím</th>
              <th>Kontakt kontakt?????</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.contractor.name}</td>
              <td>{bid.contractor.delegate}</td>
              <td>{bid.deliveryDate}</td>
              <td>{bid.contractor.taxNumber}</td>
              <td>{bid.contractor.phoneNumber}</td>
              <td>{bid.contractor.email}</td>
              <td>{bid.contractorContact}</td>
            </tr>
          </tbody>
        </table>
        <div className='separator' />
        <table className='table table-striped gy-7 gs-7 border mb-5'>
          <thead>
            <tr className='fw-bold fs-5'>
              <th>Organizáció egység megerősitése</th>
              <th>Fizetési mód</th>
              <th>Szállítás dátuma</th>
              <th>Számlázási cím</th>
              <th>Év</th>
              <th>Megerősítő szám</th>
              <th>Kategória</th>
              <th>Ajánlat leírása</th>
              <th>Felül vizsgáló</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.confirmOrganizationUnit}</td>
              <td>{bid.paymentMethod}</td>
              <td>{bid.deliveryDate}</td>
              <td>{bid.invoiceAddress}</td>
              <td>{bid.year}</td>
              <td>{bid.confirmationNumber}</td>
              <td>{bid.category}</td>
              <td>{bid.offerDescription}</td>
              <td>{bid.supervisor}</td>
            </tr>
          </tbody>
        </table>
        <div className='separator' />
        <table className='table table-striped gy-7 gs-7 border'>
          <thead>
            <tr className='fw-bold fs-5'>
              <th>Termék azonositó</th>
              <th>Darab</th>
              <th>Egység</th>
              <th>Leírás</th>
              <th>Valuta</th>
              <th>Netto egységár</th>
            </tr>
          </thead>
          <tbody>
            {bid.orderConfirmationItems.map((item: IOrderItems) => {
              return (
                <tr key={item.itemNumber}>
                  <td>{item.itemNumber}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.description}</td>
                  <td>{item.currency}</td>
                  <td>{item.netUnitPrice}</td>
                </tr>
              )
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex align-items-center mt-1 fs-6 justify-content-center'>
        <BidHistory {...bid} />
      </div>
    </>
  )
}
