import {useState} from 'react'
import {useFormik, FormikValues} from 'formik'
import {Tab, Tabs} from 'react-bootstrap'
import {initialValues, newBidSchema} from './helpers'
import {BaseDataTab} from './tabs/BaseDataTab'
import {ContractorDataTab} from './tabs/ContractorDataTab'
import {OrganizationDataTab} from './tabs/OrganizationDataTab'
import './styles/CreateNewBid.css'
import {AddItems} from './tabs/AddItemsTab'
import {PageTitle} from '../../../../_metronic/layout/core'
import {useDispatch} from 'react-redux'
import {addBidToState, deleteBidFromState, updateBidInState} from '../state/administratorSlice'
import {postBid, nextStatus, deleteBid} from '../requests'
import {useSelector} from 'react-redux/es/hooks/useSelector'
import {selectData, selectIsEditing} from './editSelector'
import {selectBids} from '../state/administratorSelector'
import toast from 'react-hot-toast'
type SelectCallback = (eventKey: string | null) => void

function CreateNewBid() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('baseData')
  const bids = useSelector(selectBids)
  const isEditing = useSelector(selectIsEditing)
  const data = useSelector(selectData)
  const values = isEditing ? data : initialValues

  const isBidAlreadySaved = (id: string) => {
    try {
      return bids.some((bid) => bid.id.toString() === id.toString())
    } catch (error) {
      return false
    }
  }

  const formik = useFormik<FormikValues>({
    initialValues: values,
    validationSchema: newBidSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        if (!isBidAlreadySaved(values.id)) {
          console.log('Submitting new bid data:', values)
          const response = await postBid(formik.values)
          const bidId = response.data.result['id']
          dispatch(addBidToState(response.data.result))
          await nextStatus(bidId)
          toast.success('Sikeres megrendelés létrehozás')
          formik.resetForm()
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
        setSubmitting(false)
        setLoading(false)
        toast.error('Hiba a megrendelés létrehozása során')
      }
    },
  })

  const onSave = async () => {
    try {
      setLoading(true)
      if (!isEditing) {
        const response = await postBid(formik.values)
        dispatch(addBidToState(response.data.result))
        formik.resetForm()
        setLoading(false)
        toast.success('Sikeres mentés')
        return
      } else {
        //await updateBid(formik.values) TODO
        dispatch(updateBidInState(formik.values))
        formik.resetForm()
        setLoading(false)
        toast.success('Sikeres mentés')
        return
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
      toast.error('Hiba a mentés során')
    }
  }

  const onClear = async () => {
    if (isEditing) {
      try {
        setLoading(true)
        await deleteBid(data.id)
        dispatch(deleteBidFromState(data.id))
        setLoading(false)
        toast.success('Sikeres törlés')
      } catch (error) {
        console.error(error)
        setLoading(false)
        toast.error('Hiba a törlés során')
      }
    }
    formik.resetForm()
  }

  const handleTabSelect: SelectCallback = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab)
    }
  }

  return (
    <>
      <PageTitle>Új megrendelés létrehozása</PageTitle>

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
            {!loading && <span className='indicator-label'>Megrendelés létrehozása</span>}
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
