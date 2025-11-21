import { Link } from 'react-router-dom';
import css from './index.module.scss';

export const Auth = () => {
  return (
    <div className={css.auth_buttons_wrapper}>
      <Link to={'/login'} className={css.login_btn}>Login</Link>
      <Link to={'/registration'} className={css.sing_up_btn}>Sing Up</Link>
    </div>
  )
}
