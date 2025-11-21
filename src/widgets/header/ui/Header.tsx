import { Auth } from "@features/auth"
import { Nav } from "@shared/components/nav"
import { getAssetPath } from "@shared/lib"
import { Link } from "react-router-dom"
import css from './index.module.scss';
export const Header = () =>  {
  return (
    <header className={css.header}>
      <div className={css.header_content}>
        <Logo/>
        <Nav/>
        <Auth/>
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