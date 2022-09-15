import { Link, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import style from './header.module.scss';

const Header = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header id={style.header}>
      <div className={style.container}>
        <Link className={style.logo} to="/">
          N5-CHALLENGE
        </Link>

        <ul className={style.languages}>
          <li>
            <button
              type="button"
              className={i18n.language === 'es' ? `${style.active}` : ''}
              onClick={() => handleChangeLanguage('es')}
            >
              ES
            </button>
          </li>
          <li>
            <button
              type="button"
              className={i18n.language === 'en' ? `${style.active}` : ''}
              onClick={() => handleChangeLanguage('en')}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
