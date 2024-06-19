import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Artist {
  name: string;
  id: number;
}

const ArtistInfo: React.FC = () => {
  const [artistData, setArtistData] = useState<Artist | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Artist>('https://api.discogs.com/artists/3000')
      .then(response => {
        setArtistData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h5>Artist : {artistData?.name}</h5>
      <p>Id : {artistData?.id}</p>
    </div>
  );
};

export default ArtistInfo;
