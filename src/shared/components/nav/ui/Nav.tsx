import { Link } from 'react-router-dom';
import css from './index.module.scss';
import clsx from 'clsx';

export const Nav = () => {
  return (
    <nav className={clsx(css.nav_wrapper)}>
      <ul className={css.nav_items}>
        <li>
          <Link to={'/demos'}>Demos</Link>
        </li>
        <li>
          <Link to={'/features'}>Features</Link>
        </li>
        <li>
          <Link to={'/pricing'}>Pricing</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}
