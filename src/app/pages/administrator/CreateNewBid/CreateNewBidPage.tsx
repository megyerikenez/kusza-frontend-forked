import {useState, useEffect} from 'react'
import {useFormik, FormikValues} from 'formik'
import {Tab, Tabs} from 'react-bootstrap'
import {initialValues, newBidSchema} from './helpers'
import {BaseDataTab} from './tabs/BaseDataTab'
import {ContractorDataTab} from './tabs/ContractorDataTab'
import {OrganizationDataTab} from './tabs/OrganizationDataTab'
import './styles/CreateNewBid.css'
import {AddItems} from './tabs/AddItemsTab'
import {PageTitle} from '../../../../_metronic/layout/core'
import {getSupervisors} from '../../../modules/auth/core/requests'
import {useDispatch} from 'react-redux'
import {setSupervisors} from '../state/administratorSlice'

type SelectCallback = (eventKey: string | null) => void

function CreateNewBid() {
  const dispatch = useDispatch()
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

  const onSave = async () => {
    try {
      setLoading(true)
      console.log('Saving new bid data:', formik.values)
      formik.resetForm()
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const onClear = () => {
    formik.resetForm()
  }

  const handleTabSelect: SelectCallback = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab)
    }
  }

  useEffect(() => {
    const fetchSupervisors = async () => {
      try {
        const response = await getSupervisors()
        dispatch(setSupervisors(response.data.result))
      } catch (error) {
        console.error(error)
      }
    }

    fetchSupervisors()
  }, [dispatch])

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
        <div className='d-flex justify-content-around'>
          <button
            key='clearButton'
            type='button'
            onClick={onClear}
            className='btn btn-danger w-25'
            disabled={formik.isSubmitting}
          >
            {!loading && <span className='indicator-label'>Törlés</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Kérem várjon
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
          <button
            key='saveButton'
            type='button'
            onClick={onSave}
            className='btn btn-primary w-25'
            disabled={formik.isSubmitting}
          >
            {!loading && <span className='indicator-label'>Mentés</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Kérem várjon
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
          <button
            key='submitButton'
            type='submit'
            className='btn btn-success w-25'
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

export default CreateNewBid
