import { Card, Loader } from '../../components';

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
export default CharacterRender;
