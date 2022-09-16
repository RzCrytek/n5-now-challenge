import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { CardInfo, CardName, CardPicture, CardSummary, CardWrapper } from './CharacterCard.styled';

import imgNoPhoto from '@/assets/images/no-photo.png';

const CharacterCard = ({ character }) => {
  const [t] = useTranslation();

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
              <strong>{t('genero')}: </strong>
              {character.gender}
            </span>

            <span> | </span>

            <span>
              <strong>{t('especie')}: </strong>
              {character.species}
            </span>
          </p>
        </CardInfo>
      </CardSummary>
    </CardWrapper>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
