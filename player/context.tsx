import React, { useState, useMemo, useEffect } from "react";
import { PlaylistTrack } from "../playlist/types";

interface Context {
  trackData: PlaylistTrack;
  playing: boolean;
  updatePlayer: (e: string) => void;
  statusPlayer: (e: boolean) => void;
}

const defaultValues = {
  trackData: null,
  playing: false,
  updatePlayer: () => {},
  statusPlayer: () => {},
};

const PlayerContext = React.createContext<Context>(defaultValues);

interface Props {
  children: React.ReactNode
}

const PlayerProvider: React.FC<Props> = ({ children }) => {
  const [trackUri, setTrackUri] = useState<string>("");
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackData, setTrackData] = useState<PlaylistTrack | null>(defaultValues.trackData);

  const updatePlayer = (value: string) => {
    if (!value) return "";
    setTrackUri(value);
  };

  const statusPlayer = (value: boolean) => {
    setPlaying(value);
  };

  const getTrackInformation = async () => {
    if (!trackUri) return null;
    try {
      await fetch(`/api/track/${trackUri}`)
        .then((res) => res.json())
        .then(([data]) => setTrackData(data));
    } catch (e) {
      console.error(`Something went wrong fetching song id ${trackUri}`);
    }
  };

  useEffect(() => {
    getTrackInformation();
  }, [trackUri]);

  const providerValue = useMemo<Context>(() => {
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
