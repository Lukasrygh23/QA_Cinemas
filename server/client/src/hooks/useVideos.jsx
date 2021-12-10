import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term },
    });
    setVideos(res.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
};

export default useVideos;
