import { Link, NavLink } from 'react-router-dom';

import style from './header.module.scss';

const Header = () => {
  return (
    <header id={style.header}>
      <div className={style.container}>
        <Link className={style.logo} to="/">
          N5-CHALLENGE
        </Link>

        <ul className={style.languages}>
          <li>
            <a className={'style.active'} href="/es">
              ES
            </a>
          </li>
          <li>
            <a href="/es">EN</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
