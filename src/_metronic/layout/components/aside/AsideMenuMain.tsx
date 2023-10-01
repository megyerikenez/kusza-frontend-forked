import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem to='/dashboard' icon='black-right' title='Menü' fontIcon='bi-app-indicator' />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Kusza</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Árajánlatok'
        fontIcon='bi-archive'
        icon='black-right'
      >
        <AsideMenuItem to='/administrator/createnewbid' title='Új árajánlat' hasBullet={true} />
        <AsideMenuItemWithSub
          to='/crafted/accounts'
          title='Árajánlataim'
          icon='black-right'
          fontIcon='bi-person'
        >
          <AsideMenuItem to='/crafted/account/overview' title='Összes' hasBullet={true} />
          <AsideMenuItem to='/crafted/account/settings' title='Elfogadott' hasBullet={true} />
          <AsideMenuItem to='/crafted/account/settings' title='Elutasitott' hasBullet={true} />
          <AsideMenuItem to='/crafted/account/settings' title='Elfogadásra váró' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/account/settings'
            title='Szerkesztés alatt'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
    </>
  )
}
