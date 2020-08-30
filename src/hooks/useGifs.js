import { useState, useEffect } from 'react';

import getGifs from '../services/getGifs';

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const KEYWORD_TO_USE =
    keyword || localStorage.getItem('last_used_keywork') || 'welcome';

  useEffect(() => {
    setLoading(true);
    getGifs(KEYWORD_TO_USE).then(gifs => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('last_used_keywork', KEYWORD_TO_USE);
    });
  }, [KEYWORD_TO_USE]);

  return { loading, gifs };
}
