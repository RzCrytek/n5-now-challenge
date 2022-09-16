import PropTypes from 'prop-types';

import { Footer, Header } from '@/components';

const Layout = ({ children, pageId, className }) => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
