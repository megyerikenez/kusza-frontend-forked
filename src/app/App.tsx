import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Toaster />
      <I18nProvider>
        <LayoutProvider>
          <Outlet />
          <MasterInit />
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
