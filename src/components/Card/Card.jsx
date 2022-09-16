import PropTypes from 'prop-types';

import { CardInfo, CardName, CardPicture, CardSummary, CardWrapper } from './card.styled';

import imgNoPhoto from '@/assets/images/no-photo.png';

const Card = ({ character }) => {
  return (
    <CardWrapper>
      <CardPicture>
        <img src={character.image || imgNoPhoto} alt="" />
      </CardPicture>
      <CardSummary>
        <CardName>{character.name}</CardName>
        <CardInfo>
          <p>
            <span>
              <strong>Género: </strong>
              {character.gender}
            </span>

            <span> | </span>

            <span>
              <strong>Especie: </strong>
              {character.species}
            </span>
          </p>
        </CardInfo>
      </CardSummary>
    </CardWrapper>
  );
};

Card.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Card;
