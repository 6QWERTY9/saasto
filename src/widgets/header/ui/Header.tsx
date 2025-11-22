import { Auth } from "@features/auth"
import { Nav } from "@shared/components/nav"
import { getAssetPath } from "@shared/lib"
import { Link } from "react-router-dom"
import css from './index.module.scss';
import { useState } from "react";
import clsx from "clsx";
import { useDeviceType } from "@shared/lib/hooks";
export const Header = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDeviceType() === 'mobile';

  const handleOpenMobileNav = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <header className={css.header}>
      <div className={css.header_content}>
        <Logo/>
        {isMobile ? (
          <MobileNavOpenButton onClick={handleOpenMobileNav} isOpen={isOpen}/>
        ) : (
          <>
            <Nav/>
            <Auth/>
          </>
        )}

        <MobileNav open={isOpen} />
      </div>
    </header>
  )
}


const Logo = () => {
  return (
    <Link to={'/'} className={css.logo_wrapper}>
      <img src={getAssetPath('/logo.svg')} alt="logo" width={'40px'} height={'40px'} className={css.logo} />
      <span className={css.logo_title} >SaaSto</span>
    </Link>
  )
}

const MobileNav = ({open}: {open: boolean}) => {
  
  return (
    <div className={`${css.mobile_nav} ${open ? css.mobile_nav_open : css.mobile_nav_closed}`} aria-label="mobile navigation">
      <div className={css.mobile_nav_content}>
        <Nav/>
      </div>
    </div>
  )
}

const MobileNavOpenButton = ({onClick, isOpen}: {onClick: () => void, isOpen: boolean}) => {
  
  return (
    <button className={clsx(css.mobile_nav_open_btn, {[css.open_animate]: isOpen})} onClick={onClick}>
      <div className={css.line}></div>
    </button>
  )
}