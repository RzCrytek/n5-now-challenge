import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const initial = {
    data: [],
    loader: true,
  };

  const [state, setState] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) throw new Error('algo falló');

        const data = await response.json();

        setState({
          data,
          loader: false,
        });
      } catch (error) {
        if (error.name === 'AbortError') console.warn('Request aborted');
        else console.error(error);
      } finally {
        if (!controller.signal.aborted) console.log('finally');
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return state;
};

export default useFetchData;
