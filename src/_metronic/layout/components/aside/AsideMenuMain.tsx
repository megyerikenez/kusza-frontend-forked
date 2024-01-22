import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {useSelector} from 'react-redux'
import {userRolesSelector} from '../../../../app/modules/auth/state/authSelector'
import {ADMINISTRATOR_ROLE, SUPERVISOR_ROLE} from '../../../helpers/roles'

export function AsideMenuMain() {
  const userRole: string[] = useSelector(userRolesSelector)
  return (
    <>
      <AsideMenuItem to='/dashboard' icon='black-right' title='Menü' fontIcon='bi-app-indicator' />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Kusza</span>
        </div>
      </div>
      {userRole.includes(ADMINISTRATOR_ROLE) && (
        <AsideMenuItemWithSub
          to='/crafted/pages'
          title='Megrendelések'
          fontIcon='bi-archive'
          icon='black-right'
        >
          <AsideMenuItem to='/administrator/createnewbid' title='Új megrendelés' hasBullet={true} />
          <AsideMenuItemWithSub
            to='/crafted/accounts'
            title='Megrendelések'
            icon='black-right'
            fontIcon='bi-person'
          >
            <AsideMenuItem to='/administrator/bids/all' title='Összes' hasBullet={true} />
            <AsideMenuItem
              to='/administrator/bids/supervisorsigned'
              title='Felülvizsgáló által aláírva'
              hasBullet={true}
            />
            <AsideMenuItem
              to='/administrator/bids/readytosign'
              title='Felülvizsgáló által aláírásra vár'
              hasBullet={true}
            />
            <AsideMenuItem
              to='/administrator/bids/neweditable'
              title='Szerkesztés alatt'
              hasBullet={true}
            />
            <AsideMenuItem to='/administrator/bids/declined' title='Elutasitott' hasBullet={true} />
          </AsideMenuItemWithSub>
        </AsideMenuItemWithSub>
      )}
      {userRole.includes(SUPERVISOR_ROLE) && (
        <AsideMenuItemWithSub to='/supervisor/bids' title='Megrendelések' hasBullet={true}>
          <AsideMenuItem to='/supervisor/bids/all' title='Összes megrendelés' hasBullet={true} />
          <AsideMenuItem to='/supervisor/bids/waiting' title='Aláírásra vár' hasBullet={true} />
          <AsideMenuItem to='/supervisor/bids/signed' title='Aláírt' hasBullet={true} />
          <AsideMenuItem to='/supervisor/bids/declined' title='Elutasított' hasBullet={true} />
        </AsideMenuItemWithSub>
      )}
    </>
  )
}
