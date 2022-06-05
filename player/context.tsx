import React, { useState, useMemo, useEffect } from "react";

const defaultValues = {
  trackData: [],
  playing: false,
  updatePlayer: () => {},
  statusPlayer: () => {},
};

const PlayerContext = React.createContext(defaultValues);

const PlayerProvider = ({ children }: any) => {
  const [trackUri, setTrackUri] = useState("");
  const [playing, setPlaying] = useState(false);
  const [trackData, setTrackData] = useState(null);

  const updatePlayer = (value: any) => {
    if (!value) return "";
    setTrackUri(value);
  };

  const statusPlayer = (value: boolean) => {
    setPlaying(value);
  };

  const getTrackInformation = async () => {
    if (!trackUri) return null
    try {
      await fetch(`/api/track/${trackUri}`)
        .then(res => res.json())
        .then(([data]) => setTrackData(data))
    } catch (e) {
      console.error(`Something went wrong fetching song id ${trackUri}`)
    }
  };

  useEffect(() => {
    getTrackInformation()
  }, [trackUri])

  const providerValue: any = useMemo(() => {
    return {
      trackData,
      playing,
      updatePlayer,
      statusPlayer,
    };
  }, [playing, trackUri, trackData]);

  return (
    <PlayerContext.Provider value={providerValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider, PlayerContext };
