import { useTranslation } from 'react-i18next';

import Layout from '../Layout';
import { Buttons, StyledLink } from '../../components';

const HomePage = () => {
  const [t] = useTranslation();

  return (
    <Layout pageId="home">
      <div className="container">
        <h2 className="title">{t('seleccione una opción')}</h2>

        <Buttons>
          <StyledLink bg="3ddc97" to="rick-and-morty">
            RICK AND MORTY
          </StyledLink>
          <StyledLink bg="00aeef" to="harry-potter">
            HARRY POTTER
          </StyledLink>
        </Buttons>
      </div>
    </Layout>
  );
};

export default HomePage;
