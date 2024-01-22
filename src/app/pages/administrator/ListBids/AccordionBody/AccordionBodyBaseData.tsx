import {useDispatch, useSelector} from 'react-redux'
import {INewBid, IOrderItems} from '../../CreateNewBid/interfaces'
import {BidHistory} from './BidHistory'
import {setData, setIsEditing} from '../../CreateNewBid/editSlice'
import {Link} from 'react-router-dom'
import {userRolesSelector} from '../../../../modules/auth/state/authSelector'
import {declineBid, getExcelFile, nextStatus} from '../../../supervisor/requests'
import {selectSupervisors} from '../../state/administratorSelector'
import {saveAs} from 'file-saver'

export const AccordionBodyBaseData = (bid: INewBid) => {
  const userRoles: string[] = useSelector(userRolesSelector)
  const dispatch = useDispatch()
  const onEdit = () => {
    dispatch(setIsEditing(true))
    dispatch(setData(bid))
  }

  const onDownload = async () => {
    try {
      const response = await getExcelFile(bid.id)
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })

      saveAs(blob, 'yourFileName.xlsx')
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const onDecline = () => {
    declineBid(bid.id, 'nemjo')
  }

  const onSign = async () => {
    await nextStatus(bid.id)
  }

  const isoDateToLocal = new Date(bid.deliveryDate).toLocaleDateString('hu-HU')
  const supervisors = useSelector(selectSupervisors)

  const findSupervisorNameById = (supervisorId: any) => {
    const supervisor = supervisors.find((s) => s.id === supervisorId)
    return supervisor ? supervisor.userName : 'Unknown Supervisor'
  }

  return (
    <>
      <div className='text-center'>
        <table className='table table-striped gy-7 gs-7 border mb-5'>
          <thead>
            <tr className='fw-bold fs-5'>
              <th>Azonositó kód</th>
              <th>Leírás</th>
              <th>Beszerző</th>
              <th>Vevői rendelés szám</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.id}</td>
              <td>{bid.description}</td>
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
              <td>{bid.contractor.seat}</td>
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
              <th>Felül vizsgáló</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.confirmOrganizationUnit}</td>
              <td>{bid.paymentMethod}</td>
              <td>{isoDateToLocal}</td>
              <td>{bid.invoiceAddress}</td>
              <td>{findSupervisorNameById(bid.supervisorUserId)}</td>
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
            {bid.orderConfirmationItems.length > 0 ? (
              bid.orderConfirmationItems.map((item: IOrderItems) => {
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
              })
            ) : (
              <tr>
                <td colSpan={6}>Nincs termék</td>
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex align-items-center fs-4 justify-content-around'>
        <BidHistory {...bid} />
        {bid.status === 'New' && userRoles.includes('Administrator') && (
          <div className='d-flex align-items-center mt-1 fs-6 justify-content-center'>
            <Link to={'/administrator/createnewbid'}>
              <button onClick={onEdit} className='btn btn-primary'>
                Szerkesztés
              </button>
            </Link>
          </div>
        )}
        {bid.status === 'ReadyToSign' && userRoles.includes('Supervisor') && (
          <div className='d-flex flex-column justify-content-around'>
            <button onClick={() => onDecline()} type='button' className='btn btn-danger mb-2 w-10'>
              <span className='indicator-label'>Elutasitás</span>
            </button>
            <button onClick={() => onSign()} type='button' className='btn btn-primary w-10'>
              <span className='indicator-label'>Elfogadás</span>
            </button>
          </div>
        )}

        {bid.status === 'SupervisorSigned' && (
          <div className='d-flex align-items-center mt-1 fs-6 justify-content-center'>
            <button onClick={() => onDownload()} className='btn btn-primary'>
              Dokumentum letöltése
            </button>
          </div>
        )}
      </div>
    </>
  )
}
