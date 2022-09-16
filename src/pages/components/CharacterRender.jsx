import PropTypes from 'prop-types';

import { CharacterCard, Loader } from '@/components';

const CharacterRender = ({ loader, data }) => {
  return (
    <>
      {loader && <Loader />}

      <div className="card-box">
        {data?.map((character, i) => (
          <CharacterCard character={character} key={i} />
        ))}
      </div>
    </>
  );
};

CharacterRender.propTypes = {
  loader: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterRender;
