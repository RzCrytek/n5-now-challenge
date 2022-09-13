import { useFetchData } from '../../hooks';

import Layout from '../Layout';
import { StyledLink } from '../../components';
import CharacterRender from '../components/CharacterRender';

const HarryPotterPage = () => {
  const ApiHarryPotter = import.meta.env.VITE_API_HARRY_POTTER;
  const { loader, data } = useFetchData(ApiHarryPotter + '/characters');

  return (
    <Layout className="character-list">
      <div className="container">
        <StyledLink to="/">{'<'} VOLVER</StyledLink>

        <h1>LISTA DE PERSONAJES DE HARRY POTTER</h1>

        <CharacterRender loader={loader} data={data} />
      </div>
    </Layout>
  );
};

export default HarryPotterPage;
