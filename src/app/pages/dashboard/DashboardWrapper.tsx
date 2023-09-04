import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'

const DashboardPage = () => <></>

const DashboardWrapper = () => {
  return (
    <EnableSidebar>
      <PageTitle description='You’ve got 24 New Sales' breadcrumbs={[]}>
        Hello, Paul
      </PageTitle>
      <DashboardPage />
    </EnableSidebar>
  )
}

export {DashboardWrapper}
