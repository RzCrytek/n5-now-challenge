import { render } from '@testing-library/react';
import Card from '../../components/card/Card';

describe('componente <Card>', () => {
  const character = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    gender: 'Male',
    species: 'Human',
  };

  test('match con el snapshot', () => {
    const { container } = render(<Card character={character} />);
    expect(container).toMatchSnapshot();
  });
});
