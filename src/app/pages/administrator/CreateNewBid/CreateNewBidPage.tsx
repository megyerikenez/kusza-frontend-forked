import {useState} from 'react'
import {useFormik, FormikValues} from 'formik'
import {Tab, Tabs} from 'react-bootstrap'
import {initialValues, newBidSchema} from './helpers'
import {BaseDataTab} from './tabs/BaseDataTab'
import {ContractorDataTab} from './tabs/ContractorDataTab'
import {OrganizationDataTab} from './tabs/OrganizationDataTab'
import './styles/CreateNewBid.css' // Import the CSS file containing the customization
import {AddItems} from './tabs/AddItemsTab'
import {PageTitle} from '../../../../_metronic/layout/core'

type SelectCallback = (eventKey: string | null) => void

export function NewBidForm() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('baseData')

  const formik = useFormik<FormikValues>({
    initialValues,
    validationSchema: newBidSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        console.log('Submitting new bid data:', values)
        formik.resetForm()
        setLoading(false)
      } catch (error) {
        console.error(error)
        setStatus('Hibás adatok')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const handleTabSelect: SelectCallback = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab)
    }
  }

  return (
    <>
      <PageTitle>Új árajánlat létrehozása</PageTitle>

      <form className='form w-100' onSubmit={formik.handleSubmit} noValidate id='new_bid_form'>
        <Tabs activeKey={activeTab} onSelect={handleTabSelect} id='bidTabs'>
          <Tab eventKey='baseData' title='Alap adatok'>
            <BaseDataTab formik={formik} />
          </Tab>
          <Tab eventKey='contractorData' title='Szerzödő adatai'>
            <ContractorDataTab formik={formik} />
          </Tab>
          <Tab eventKey='organizationData' title='Organizáció adatai'>
            <OrganizationDataTab formik={formik} />
          </Tab>
          <Tab eventKey='addItems' title='Termék hozzáadása'>
            <AddItems formik={formik} />
          </Tab>
        </Tabs>
        <div className='d-grid mb-10'>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <span className='indicator-label'>Árajánlat létrehozása</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Kérem várjon
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default NewBidForm
