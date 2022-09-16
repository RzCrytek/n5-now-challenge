import { renderHook, waitFor } from '@testing-library/react';
import { useFetchData } from '../../hooks';

describe('Hook <useFetchData>', () => {
  test('retorna el estado inicial', () => {
    const apiRickMorty = 'https://rickandmortyapi.com/api/character';

    const { result } = renderHook(() => useFetchData(apiRickMorty));
    const { loader, data } = result.current;

    expect(data.length).toBe(0);
    expect(loader).toBeTruthy();
  });

  test('retornar el arreglo de personajes: RickAndMorty', async () => {
    const apiRickMorty = 'https://rickandmortyapi.com/api/character';

    const { result } = renderHook(() => useFetchData(apiRickMorty));

    await waitFor(() => expect(result.current.data?.results?.length).toBeGreaterThan(0));

    const { loader, data } = result.current;

    expect(data.results.length).toBeGreaterThan(0);
    expect(loader).toBeFalsy();
  });

  test('retornar el arreglo de personajes: HarryPotter', async () => {
    const apiHarryPotter = 'http://hp-api.herokuapp.com/api/characters';

    const { result } = renderHook(() => useFetchData(apiHarryPotter));

    await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0), {
      timeout: 2000,
    });

    const { loader, data } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loader).toBeFalsy();
  });
});
