import { Footer, Header } from '../components';

const Layout = ({ children, pageId, className = '' }) => {
  return (
    <div id="wrapper">
      <Header />

      <main id={pageId} className={className}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
export default Layout;
