import { useTranslation } from 'react-i18next';

import { useFetchData } from '@/hooks';

import Layout from '../Layout';
import { StyledLink } from '@/components';
import CharacterRender from '../components/CharacterRender';

const RickMortyPage = () => {
  const ApiRickMorty = import.meta.env.VITE_API_RICK_AND_MORTY;

  const { loader, data } = useFetchData(ApiRickMorty + '/character');
  const [t] = useTranslation();

  return (
    <Layout className="character-list">
      <div className="container">
        <StyledLink to="/">
          {'<'} {t('volver')}
        </StyledLink>

        <h1>{t('lista de personajes de')} RICK AND MORTY</h1>

        <CharacterRender loader={loader} data={data.results || []} />
      </div>
    </Layout>
  );
};

export default RickMortyPage;
