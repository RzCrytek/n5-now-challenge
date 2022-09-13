import style from './footer.module.scss';

const Footer = () => {
  return <footer id={style.footer}>N5-Challenge © Todos los derechos reservados {new Date().getFullYear()}</footer>;
};

export default Footer;
