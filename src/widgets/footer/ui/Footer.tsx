import { Link } from 'react-router-dom';
import css from './index.module.scss';
import { getAssetPath } from '@shared/lib';
import { Nav } from '@shared/components/nav';

export const Footer = () => {

  return (
    <footer className={css.footer}>
      <div className={css.footer_top}>
        <Logo/>
        <Nav/>
        <Socials/>
      </div>
      <div className={css.footer_bottom}>
        <div>
          <span>Terms & condition</span>
          <span>Privacy policy</span>
        </div>
        <span>All Right Reserved @ plowv.com</span>
      </div>
    </footer>
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

const Socials = () => {
  return (
    <div className={css.socials_wrapper}>
      <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer' aria-label='our instagram'>
        <img src={getAssetPath('/Instagram.svg')} alt="vector image instagram" />
      </a>
      <a href="https://ru.linkedin.com/" target='_blank' rel='noopener noreferrer' aria-label='our linkendIn'>
        <img src={getAssetPath('/Linkedin.svg')} alt="vector image linkedin" />
      </a>
      <a href="https://www.facebook.com/?locale=ru_RU" target='_blank' rel='noopener noreferrer' aria-label='our facebook'>
        <img src={getAssetPath('/Facebook.svg')} alt="vector image facebook" />
      </a>
      <a href="https://x.com/?lang=ru" target='_blank' rel='noopener noreferrer' aria-label='our twitter'>
        <img src={getAssetPath('/Twitter.svg')} alt="vector image twitter" />
      </a>
    </div>
  )
}