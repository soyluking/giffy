import { useState, useEffect, useContext } from 'react';
import GifsContext from '../context/GifsContext';
import getGifs from '../services/getGifs';

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    const keywordToUse =
      keyword || localStorage.getItem('last_used_keywork') || 'welcome';

    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('last_used_keywork', keywordToUse);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
}
