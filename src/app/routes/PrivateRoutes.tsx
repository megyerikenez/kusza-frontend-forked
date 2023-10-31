import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {lazy} from 'react'

const PrivateRoutes = () => {
  const ListAllBid = lazy(() => import('../pages/administrator/ListBids/ListAllBid'))
  const CreateNewBid = lazy(() => import('../pages/administrator/CreateNewBid/CreateNewBidPage'))
  const ListNewEditableBid = lazy(
    () => import('../pages/administrator/ListBids/ListNewEditableBid')
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
        <Route path='/administrator/createnewbid' element={<CreateNewBid />} />
        <Route path='/administrator/bids/all' element={<ListAllBid />} />
        <Route path='/administrator/bids/neweditable' element={<ListNewEditableBid />} />
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
