import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {lazy} from 'react'
import {userRolesSelector} from '../modules/auth/state/authSelector'
import {useSelector} from 'react-redux'
import {ADMINISTRATOR_ROLE, SUPERVISOR_ROLE} from '../../_metronic/helpers/roles'
import SupervisorBids from '../pages/supervisor/Bids/Bids'

const PrivateRoutes = () => {
  const userRoles: string[] = useSelector(userRolesSelector)

  const CreateNewBid = lazy(() => import('../pages/administrator/CreateNewBid/CreateNewBidPage'))
  const ListAllBid = lazy(() => import('../pages/administrator/ListBids/ListAllBid'))
  const ListNewEditableBid = lazy(
    () => import('../pages/administrator/ListBids/ListNewEditableBid')
  )
  const ListReadyToSignBid = lazy(
    () => import('../pages/administrator/ListBids/ListReadyToSignBid')
  )
  const ListDeclinedBid = lazy(() => import('../pages/administrator/ListBids/ListDeclinedBid'))
  const ListSupervisorSignedBid = lazy(
    () => import('../pages/administrator/ListBids/ListSupervisorSignedBid')
  )

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        {/* Administrator */}
        {userRoles.includes(ADMINISTRATOR_ROLE) && (
          <>
            <Route path='/administrator/createnewbid' element={<CreateNewBid />} />
            <Route path='/administrator/bids/all' element={<ListAllBid />} />
            <Route path='/administrator/bids/neweditable' element={<ListNewEditableBid />} />
            <Route path='/administrator/bids/readytosign' element={<ListReadyToSignBid />} />
            <Route path='/administrator/bids/declined' element={<ListDeclinedBid />} />
            <Route
              path='/administrator/bids/supervisorsigned'
              element={<ListSupervisorSignedBid />}
            />
          </>
        )}
        {/* Supervisor */}
        {userRoles.includes(SUPERVISOR_ROLE) && (
          <Route path='/supervisor/bids' element={<SupervisorBids />} />
        )}
        {/* Redirect */}
        {/* 404 */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
