import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {AuthPage} from '../modules/auth'
import {App} from '../App'
import {useSelector} from 'react-redux'
import {isUserAuthenticated} from '../modules/auth/core/authSelector'
import {PrivateRoutes} from './PrivateRoutes'

const AppRoutes: FC = () => {
  const isAuthorized = useSelector(isUserAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          {isAuthorized ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
