import { useTranslation } from 'react-i18next';

import style from './footer.module.scss';

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer id={style.footer}>
      N5-Challenge © {t('derechos')} {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
