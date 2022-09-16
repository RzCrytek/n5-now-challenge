import PropTypes from 'prop-types';

import { Card, Loader } from '@/components';

const CharacterRender = ({ loader, data }) => {
  return (
    <>
      {loader && <Loader />}

      <div className="card-box">
        {data?.map((character, i) => (
          <Card character={character} key={i} />
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
