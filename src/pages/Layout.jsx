import { Footer, Header } from '../components';

const Layout = ({ pageId, children }) => {
  return (
    <div id="wrapper">
      <Header />

      <main id={pageId}>{children}</main>

      <Footer />
    </div>
  );
};
export default Layout;
