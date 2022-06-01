import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import api from "../../playlist/api";
import UserBanner from "../../components/UserBanner";
import { TrackListRow } from "../../components/SearchTrackResults";
import { usePlayer } from "../../player/hooks";

const PlaylistPage: React.FC<any> = ({ data, playlist }) => {
	const { trackData, updatePlayer, statusPlayer } = usePlayer();

  const onPlayTrack = (track: any) => {
    updatePlayer(track.id);
    statusPlayer(true);
  };
  return (
    <Stack w="full">
      <UserBanner isPlaylist playlistData={data} />
      <Stack px={6}>
        <Stack
          direction="row"
          p={2}
          alignItems="center"
          borderBottom="1px solid rgba(255, 255, 255, .1)"
        >
          <Text
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
						fontSize="sm"
            w={6}
            px={2}
          >
            #
          </Text>
          <Stack width="full" direction="row" justifyContent="space-between">
            <Stack minWidth={200} width="sm">
              <Text fontSize="sm" fontWeight={500}>
                TITLE
              </Text>
              <Stack direction="row" margin="0px !important"></Stack>
            </Stack>
            <Stack display="flex" textAlign="start" w={300}>
              <Text fontSize="sm">ALBUM</Text>
            </Stack>
            <Text fontSize="sm">DATE ADDED</Text>
            <Text fontSize="sm" w={6}>
              🕒
            </Text>
          </Stack>
        </Stack>

        {playlist?.map((track, idx) => (
          <TrackListRow
						isPlaylist
						key={track?.track?.id}
						isActive={track?.track?.id === trackData?.id}
						onDoubleClick={() => onPlayTrack(track.track)}
            song={track?.track?.name}
            artists={track.track.artists}
            covertArt={track?.track?.album?.images[2]?.url}
            duration={track?.track?.duration_ms}
            dateAdded={track?.added_at}
            index={idx + 1}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default PlaylistPage;

export async function getServerSideProps({ query }) {
  // const res = await api.getPlaylist(query.id)
  // const res = await api.getPlaylistTrack(query.id)
  const trackResponse = [
    {
      added_at: "2021-10-22T17:52:20Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3FZTMjJc9MIJaUDQJDHdfN",
          },
          id: "3FZTMjJc9MIJaUDQJDHdfN",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2738808fd66bf07cb5250de8ec6",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e028808fd66bf07cb5250de8ec6",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048518808fd66bf07cb5250de8ec6",
              width: 64,
            },
          ],
          name: "Waterfall",
          release_date: "2020-11-16",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:3FZTMjJc9MIJaUDQJDHdfN",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 162374,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZNWR2081404",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4u2cpX7EWWTtQNB7qLiYdE",
        },
        id: "4u2cpX7EWWTtQNB7qLiYdE",
        is_local: false,
        is_playable: true,
        name: "Waterfall",
        popularity: 28,
        preview_url:
          "https://p.scdn.co/mp3-preview/e78132cafce48fb478ec60122eb57be4acfa32a5?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:4u2cpX7EWWTtQNB7qLiYdE",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:21:52Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0A1ZbxdVPTCXVhKDlPj5ro",
          },
          id: "0A1ZbxdVPTCXVhKDlPj5ro",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27379c55bd04ae7f2516a13565d",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0279c55bd04ae7f2516a13565d",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485179c55bd04ae7f2516a13565d",
              width: 64,
            },
          ],
          name: "Porta Vista",
          release_date: "2015-04-29",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:0A1ZbxdVPTCXVhKDlPj5ro",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 195935,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "CA6D21500219",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4UgecbYlUBMCq55ulRYxM0",
        },
        id: "4UgecbYlUBMCq55ulRYxM0",
        is_local: false,
        is_playable: true,
        name: "Porta Vista",
        popularity: 30,
        preview_url:
          "https://p.scdn.co/mp3-preview/11744d2ff7ab3d9a2d90ed589b577ac94f927d73?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:4UgecbYlUBMCq55ulRYxM0",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:58:43Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1jdOwFNU265923uTnbhLXD",
              },
              id: "1jdOwFNU265923uTnbhLXD",
              name: "KUWAGO",
              type: "artist",
              uri: "spotify:artist:1jdOwFNU265923uTnbhLXD",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/00zCFvOBUrnbvOychjaaTT",
          },
          id: "00zCFvOBUrnbvOychjaaTT",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27353408ca2ca4bf2b444e2f916",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0253408ca2ca4bf2b444e2f916",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485153408ca2ca4bf2b444e2f916",
              width: 64,
            },
          ],
          name: "Let's start",
          release_date: "2020-10-05",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:00zCFvOBUrnbvOychjaaTT",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1jdOwFNU265923uTnbhLXD",
            },
            id: "1jdOwFNU265923uTnbhLXD",
            name: "KUWAGO",
            type: "artist",
            uri: "spotify:artist:1jdOwFNU265923uTnbhLXD",
          },
        ],
        disc_number: 1,
        duration_ms: 240923,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "CAGOO2037195",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2O1rof3cGPN34ncC5rvBv2",
        },
        id: "2O1rof3cGPN34ncC5rvBv2",
        is_local: false,
        is_playable: true,
        name: "Let's start",
        popularity: 37,
        preview_url:
          "https://p.scdn.co/mp3-preview/abee7f21d720eb39e3520f86f253cf0bad9127df?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:2O1rof3cGPN34ncC5rvBv2",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:59:29Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4TmruNLpWJmcrBCT1jKvTs",
          },
          id: "4TmruNLpWJmcrBCT1jKvTs",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2739786e97a478d553208c1bc4f",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e029786e97a478d553208c1bc4f",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048519786e97a478d553208c1bc4f",
              width: 64,
            },
          ],
          name: "Banana Mania",
          release_date: "2021-10-06",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:4TmruNLpWJmcrBCT1jKvTs",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 100066,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZNWR2172785",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0dy7otQwm3u7CZh7qAnZu4",
        },
        id: "0dy7otQwm3u7CZh7qAnZu4",
        is_local: false,
        is_playable: true,
        name: "Banana Mania",
        popularity: 26,
        preview_url:
          "https://p.scdn.co/mp3-preview/5eef28b4a041fd258c6ee144e4f5a5d5aa658644?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:0dy7otQwm3u7CZh7qAnZu4",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:52:37Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2IIfnJSprmAN47vePMSBoX",
              },
              id: "2IIfnJSprmAN47vePMSBoX",
              name: "Mega Flare",
              type: "artist",
              uri: "spotify:artist:2IIfnJSprmAN47vePMSBoX",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5bvRZ6bprCfAyQFLm9OTat",
          },
          id: "5bvRZ6bprCfAyQFLm9OTat",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2730b00296bd775bd3405d75727",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e020b00296bd775bd3405d75727",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048510b00296bd775bd3405d75727",
              width: 64,
            },
          ],
          name: "Where We Wanna Be",
          release_date: "2019-06-24",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:5bvRZ6bprCfAyQFLm9OTat",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2IIfnJSprmAN47vePMSBoX",
            },
            id: "2IIfnJSprmAN47vePMSBoX",
            name: "Mega Flare",
            type: "artist",
            uri: "spotify:artist:2IIfnJSprmAN47vePMSBoX",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3urhrgG6tVFVPIc8Dgf3Y2",
            },
            id: "3urhrgG6tVFVPIc8Dgf3Y2",
            name: "Slyleaf",
            type: "artist",
            uri: "spotify:artist:3urhrgG6tVFVPIc8Dgf3Y2",
          },
        ],
        disc_number: 1,
        duration_ms: 206953,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZFYX1962617",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/46PVskv9ZO7W37YGfNIRCd",
        },
        id: "46PVskv9ZO7W37YGfNIRCd",
        is_local: false,
        is_playable: true,
        name: "Where We Wanna Be",
        popularity: 32,
        preview_url:
          "https://p.scdn.co/mp3-preview/d38ec476fb6b4c9a6c40ef1cc719995dcdd88e28?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:46PVskv9ZO7W37YGfNIRCd",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:59:27Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5cPYslfIIWpkXzaFtgDty4",
          },
          id: "5cPYslfIIWpkXzaFtgDty4",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273bc3e8780c4150e17813a4db6",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02bc3e8780c4150e17813a4db6",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851bc3e8780c4150e17813a4db6",
              width: 64,
            },
          ],
          name: "Borderline Forever (Scott The Woz Outro Music)",
          release_date: "2021-05-23",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:5cPYslfIIWpkXzaFtgDty4",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 138000,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZHN82196537",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7lODnXY1ML4RFKE2PtXl6Q",
        },
        id: "7lODnXY1ML4RFKE2PtXl6Q",
        is_local: false,
        is_playable: true,
        name: "Borderline Forever (Scott The Woz Outro Music)",
        popularity: 33,
        preview_url:
          "https://p.scdn.co/mp3-preview/16ef93dca3163c70c8b670c85b03f617795608f1?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:7lODnXY1ML4RFKE2PtXl6Q",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:20:09Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4H3t48ROzEcPu8kCHXHvk2",
          },
          id: "4H3t48ROzEcPu8kCHXHvk2",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27335929fcbfa7ac427a9b6e944",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0235929fcbfa7ac427a9b6e944",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485135929fcbfa7ac427a9b6e944",
              width: 64,
            },
          ],
          name: "Snowball Fight",
          release_date: "2021-12-10",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:4H3t48ROzEcPu8kCHXHvk2",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 197294,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZRP42110695",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2uFOGFTmoh2eZRUKf9l2vF",
        },
        id: "2uFOGFTmoh2eZRUKf9l2vF",
        is_local: false,
        is_playable: true,
        name: "Snowball Fight",
        popularity: 28,
        preview_url:
          "https://p.scdn.co/mp3-preview/1ff1bc181141f3d34142ecc1b3518f274bc11b6b?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:2uFOGFTmoh2eZRUKf9l2vF",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2022-01-31T18:59:05Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4XU5f8nGiPMr6eetud6epC",
              },
              id: "4XU5f8nGiPMr6eetud6epC",
              name: "Nitro Fun",
              type: "artist",
              uri: "spotify:artist:4XU5f8nGiPMr6eetud6epC",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3DCxmnz8RuBOkwITe6PSpl",
          },
          id: "3DCxmnz8RuBOkwITe6PSpl",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2736ca83c728a67e47968a90473",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e026ca83c728a67e47968a90473",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048516ca83c728a67e47968a90473",
              width: 64,
            },
          ],
          name: "Checkpoint",
          release_date: "2016-05-23",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:3DCxmnz8RuBOkwITe6PSpl",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4XU5f8nGiPMr6eetud6epC",
            },
            id: "4XU5f8nGiPMr6eetud6epC",
            name: "Nitro Fun",
            type: "artist",
            uri: "spotify:artist:4XU5f8nGiPMr6eetud6epC",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 219898,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "CA6D21600124",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5bkYsnrf7j88oN1x510yMf",
        },
        id: "5bkYsnrf7j88oN1x510yMf",
        is_local: false,
        is_playable: true,
        name: "Checkpoint",
        popularity: 43,
        preview_url:
          "https://p.scdn.co/mp3-preview/6f46ae1fd111741dd6a98c4905241432ad926a59?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:5bkYsnrf7j88oN1x510yMf",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:59:12Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6GTRLqqiBPUqaOgyxOraHp",
              },
              id: "6GTRLqqiBPUqaOgyxOraHp",
              name: "StreamBeats by Harris Heller",
              type: "artist",
              uri: "spotify:artist:6GTRLqqiBPUqaOgyxOraHp",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6JhSOFDCYZWrrh4YvmUO3r",
          },
          id: "6JhSOFDCYZWrrh4YvmUO3r",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2732a816931a9af4a544e5cc285",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e022a816931a9af4a544e5cc285",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048512a816931a9af4a544e5cc285",
              width: 64,
            },
          ],
          name: "White",
          release_date: "2020-06-27",
          release_date_precision: "day",
          total_tracks: 31,
          type: "album",
          uri: "spotify:album:6JhSOFDCYZWrrh4YvmUO3r",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6GTRLqqiBPUqaOgyxOraHp",
            },
            id: "6GTRLqqiBPUqaOgyxOraHp",
            name: "StreamBeats by Harris Heller",
            type: "artist",
            uri: "spotify:artist:6GTRLqqiBPUqaOgyxOraHp",
          },
        ],
        disc_number: 1,
        duration_ms: 158048,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZHN62074614",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5EBwvRJsjNELTdyYZ6t8tH",
        },
        id: "5EBwvRJsjNELTdyYZ6t8tH",
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: "https://open.spotify.com/track/2huz7lPPEww3eI462KVdKd",
          },
          id: "2huz7lPPEww3eI462KVdKd",
          type: "track",
          uri: "spotify:track:2huz7lPPEww3eI462KVdKd",
        },
        name: "White Lie",
        popularity: 41,
        preview_url:
          "https://p.scdn.co/mp3-preview/53e3ebcfef3ac6cfb6eed54458eb5821bf3d55ac?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 4,
        type: "track",
        uri: "spotify:track:5EBwvRJsjNELTdyYZ6t8tH",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:59:12Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1jdOwFNU265923uTnbhLXD",
              },
              id: "1jdOwFNU265923uTnbhLXD",
              name: "KUWAGO",
              type: "artist",
              uri: "spotify:artist:1jdOwFNU265923uTnbhLXD",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6qSZpHDNzDEo1K3KmCUAcR",
          },
          id: "6qSZpHDNzDEo1K3KmCUAcR",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731938a2dbf9c3edf6bd1ec057",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021938a2dbf9c3edf6bd1ec057",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511938a2dbf9c3edf6bd1ec057",
              width: 64,
            },
          ],
          name: "Toy Box 1",
          release_date: "2020-01-28",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: "spotify:album:6qSZpHDNzDEo1K3KmCUAcR",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1jdOwFNU265923uTnbhLXD",
            },
            id: "1jdOwFNU265923uTnbhLXD",
            name: "KUWAGO",
            type: "artist",
            uri: "spotify:artist:1jdOwFNU265923uTnbhLXD",
          },
        ],
        disc_number: 1,
        duration_ms: 222545,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "CALVP2022208",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5l2DJtXj5EK4Ppv6lIM9wA",
        },
        id: "5l2DJtXj5EK4Ppv6lIM9wA",
        is_local: false,
        is_playable: true,
        name: "Happiness",
        popularity: 11,
        preview_url:
          "https://p.scdn.co/mp3-preview/ed2e09ae2d0d82e0a1619b3dbf538cedb2b65696?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 9,
        type: "track",
        uri: "spotify:track:5l2DJtXj5EK4Ppv6lIM9wA",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-19T13:58:28Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4YqfXU53VVYBunSuvrDZYO",
              },
              id: "4YqfXU53VVYBunSuvrDZYO",
              name: "Synthion",
              type: "artist",
              uri: "spotify:artist:4YqfXU53VVYBunSuvrDZYO",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4o66UJPzUonUgENhbqpHRX",
              },
              id: "4o66UJPzUonUgENhbqpHRX",
              name: "MYLK",
              type: "artist",
              uri: "spotify:artist:4o66UJPzUonUgENhbqpHRX",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/48NJffm2f5RAu5hfXjJc5B",
          },
          id: "48NJffm2f5RAu5hfXjJc5B",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273cb6f1873aa3142c8fd965f4e",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02cb6f1873aa3142c8fd965f4e",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851cb6f1873aa3142c8fd965f4e",
              width: 64,
            },
          ],
          name: "Maboroshi",
          release_date: "2018-12-10",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:48NJffm2f5RAu5hfXjJc5B",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4YqfXU53VVYBunSuvrDZYO",
            },
            id: "4YqfXU53VVYBunSuvrDZYO",
            name: "Synthion",
            type: "artist",
            uri: "spotify:artist:4YqfXU53VVYBunSuvrDZYO",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4o66UJPzUonUgENhbqpHRX",
            },
            id: "4o66UJPzUonUgENhbqpHRX",
            name: "MYLK",
            type: "artist",
            uri: "spotify:artist:4o66UJPzUonUgENhbqpHRX",
          },
        ],
        disc_number: 1,
        duration_ms: 244323,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZES71897260",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5euHZw4X82pmE12LUP7Zam",
        },
        id: "5euHZw4X82pmE12LUP7Zam",
        is_local: false,
        is_playable: true,
        name: "Maboroshi",
        popularity: 41,
        preview_url:
          "https://p.scdn.co/mp3-preview/83af7565509dd85f322fc15af7238ea6753eb0e0?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:5euHZw4X82pmE12LUP7Zam",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:52:43Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/32tm4kFatfXJM1kWaoBu69",
              },
              id: "32tm4kFatfXJM1kWaoBu69",
              name: "Nokae",
              type: "artist",
              uri: "spotify:artist:32tm4kFatfXJM1kWaoBu69",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1pmDczRBof6t2mtfcTRBvK",
          },
          id: "1pmDczRBof6t2mtfcTRBvK",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2730ca60b2c79d45c58202c149f",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e020ca60b2c79d45c58202c149f",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048510ca60b2c79d45c58202c149f",
              width: 64,
            },
          ],
          name: "Expedition",
          release_date: "2018-11-27",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:1pmDczRBof6t2mtfcTRBvK",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/32tm4kFatfXJM1kWaoBu69",
            },
            id: "32tm4kFatfXJM1kWaoBu69",
            name: "Nokae",
            type: "artist",
            uri: "spotify:artist:32tm4kFatfXJM1kWaoBu69",
          },
        ],
        disc_number: 1,
        duration_ms: 286500,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "CA6D21800358",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3ZxPJQeGt7r0E3w7de2Yxs",
        },
        id: "3ZxPJQeGt7r0E3w7de2Yxs",
        is_local: false,
        is_playable: true,
        name: "Expedition",
        popularity: 39,
        preview_url:
          "https://p.scdn.co/mp3-preview/71f088a7149469f661d4c939cbd4f3b7862b7d33?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:3ZxPJQeGt7r0E3w7de2Yxs",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:52:49Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1MdC9yiSquIzhRUZu8mV5h",
          },
          id: "1MdC9yiSquIzhRUZu8mV5h",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273a965d9f6f3e2218f5d46224b",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02a965d9f6f3e2218f5d46224b",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851a965d9f6f3e2218f5d46224b",
              width: 64,
            },
          ],
          name: "Time Trials",
          release_date: "2017-05-30",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:1MdC9yiSquIzhRUZu8mV5h",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 202971,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QM2PV1734520",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4FM8p97PmVN9GXSdjjobQG",
        },
        id: "4FM8p97PmVN9GXSdjjobQG",
        is_local: false,
        is_playable: true,
        name: "Time Trials",
        popularity: 38,
        preview_url:
          "https://p.scdn.co/mp3-preview/7c916f6e96417a79d04d855b630b2fbf5a4b07fb?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:4FM8p97PmVN9GXSdjjobQG",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:54:09Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
              },
              id: "78ZthkNmTi16Je9PsNR6L6",
              name: "SONDS.",
              type: "artist",
              uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5INcNnrCH1DfPWmVCGktVp",
              },
              id: "5INcNnrCH1DfPWmVCGktVp",
              name: "Chill LoFi SONDS.",
              type: "artist",
              uri: "spotify:artist:5INcNnrCH1DfPWmVCGktVp",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6r9DOKy4M7U57PceUhU9qP",
              },
              id: "6r9DOKy4M7U57PceUhU9qP",
              name: "DMCA Free SONDS.",
              type: "artist",
              uri: "spotify:artist:6r9DOKy4M7U57PceUhU9qP",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6AudE60aPBwhor9wSFDXc3",
          },
          id: "6AudE60aPBwhor9wSFDXc3",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2736609da7a3f149397d6278636",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e026609da7a3f149397d6278636",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048516609da7a3f149397d6278636",
              width: 64,
            },
          ],
          name: "Dmca Free Stream Beats - Lo-Fi - No Copyright Royalty Free Music Safe for Twitch Vol.2",
          release_date: "2021-06-26",
          release_date_precision: "day",
          total_tracks: 30,
          type: "album",
          uri: "spotify:album:6AudE60aPBwhor9wSFDXc3",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
            },
            id: "78ZthkNmTi16Je9PsNR6L6",
            name: "SONDS.",
            type: "artist",
            uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5INcNnrCH1DfPWmVCGktVp",
            },
            id: "5INcNnrCH1DfPWmVCGktVp",
            name: "Chill LoFi SONDS.",
            type: "artist",
            uri: "spotify:artist:5INcNnrCH1DfPWmVCGktVp",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6r9DOKy4M7U57PceUhU9qP",
            },
            id: "6r9DOKy4M7U57PceUhU9qP",
            name: "DMCA Free SONDS.",
            type: "artist",
            uri: "spotify:artist:6r9DOKy4M7U57PceUhU9qP",
          },
        ],
        disc_number: 1,
        duration_ms: 99692,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "TCAFQ2149710",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3RvtGsrBou6aRTuvHbaNfb",
        },
        id: "3RvtGsrBou6aRTuvHbaNfb",
        is_local: false,
        is_playable: true,
        name: "Shiloh Dynasty (Dmca Free Stream Beats)",
        popularity: 25,
        preview_url:
          "https://p.scdn.co/mp3-preview/121cff66e1b2dcb118a109408fc0525fcc8a8cb9?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:3RvtGsrBou6aRTuvHbaNfb",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:54:49Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
              },
              id: "78ZthkNmTi16Je9PsNR6L6",
              name: "SONDS.",
              type: "artist",
              uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2UaLS09lGjlB4nGDcxfo3P",
          },
          id: "2UaLS09lGjlB4nGDcxfo3P",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27319152403729e3c042fbb6fd3",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0219152403729e3c042fbb6fd3",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485119152403729e3c042fbb6fd3",
              width: 64,
            },
          ],
          name: "The Dream Smp: No Dmca Stream Lofi, Vol. 3",
          release_date: "2021-09-30",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:2UaLS09lGjlB4nGDcxfo3P",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
            },
            id: "78ZthkNmTi16Je9PsNR6L6",
            name: "SONDS.",
            type: "artist",
            uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
          },
        ],
        disc_number: 1,
        duration_ms: 105692,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "usl4q2119566",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4b831tD8ysvuPI2aVKHII2",
        },
        id: "4b831tD8ysvuPI2aVKHII2",
        is_local: false,
        is_playable: true,
        name: "Tommyinnit",
        popularity: 13,
        preview_url:
          "https://p.scdn.co/mp3-preview/a186c6e57d21904d938012a6a05c7bc4f22a6c8e?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 4,
        type: "track",
        uri: "spotify:track:4b831tD8ysvuPI2aVKHII2",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:54:56Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
              },
              id: "78ZthkNmTi16Je9PsNR6L6",
              name: "SONDS.",
              type: "artist",
              uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2UaLS09lGjlB4nGDcxfo3P",
          },
          id: "2UaLS09lGjlB4nGDcxfo3P",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27319152403729e3c042fbb6fd3",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0219152403729e3c042fbb6fd3",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485119152403729e3c042fbb6fd3",
              width: 64,
            },
          ],
          name: "The Dream Smp: No Dmca Stream Lofi, Vol. 3",
          release_date: "2021-09-30",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:2UaLS09lGjlB4nGDcxfo3P",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
            },
            id: "78ZthkNmTi16Je9PsNR6L6",
            name: "SONDS.",
            type: "artist",
            uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
          },
        ],
        disc_number: 1,
        duration_ms: 80000,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "usl4q2119569",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7dz3I8uKPrjMCdPiRvDp1W",
        },
        id: "7dz3I8uKPrjMCdPiRvDp1W",
        is_local: false,
        is_playable: true,
        name: "Ranboo",
        popularity: 14,
        preview_url:
          "https://p.scdn.co/mp3-preview/197939c9ef984c392269b97fd1bc6da69ca94be0?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 7,
        type: "track",
        uri: "spotify:track:7dz3I8uKPrjMCdPiRvDp1W",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-10-22T17:55:59Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
              },
              id: "78ZthkNmTi16Je9PsNR6L6",
              name: "SONDS.",
              type: "artist",
              uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3EA9xPOd24P7mH3NnCQnm1",
          },
          id: "3EA9xPOd24P7mH3NnCQnm1",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273989ec11c5a746c212faa15fd",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02989ec11c5a746c212faa15fd",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851989ec11c5a746c212faa15fd",
              width: 64,
            },
          ],
          name: "Southwest",
          release_date: "2021-01-31",
          release_date_precision: "day",
          total_tracks: 12,
          type: "album",
          uri: "spotify:album:3EA9xPOd24P7mH3NnCQnm1",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/78ZthkNmTi16Je9PsNR6L6",
            },
            id: "78ZthkNmTi16Je9PsNR6L6",
            name: "SONDS.",
            type: "artist",
            uri: "spotify:artist:78ZthkNmTi16Je9PsNR6L6",
          },
        ],
        disc_number: 1,
        duration_ms: 96000,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZFZ42131686",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7Coqa1TBRF6sUOFjIMG5H2",
        },
        id: "7Coqa1TBRF6sUOFjIMG5H2",
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: "https://open.spotify.com/track/2b4HokzUJJBdMPt7dqTU3L",
          },
          id: "2b4HokzUJJBdMPt7dqTU3L",
          type: "track",
          uri: "spotify:track:2b4HokzUJJBdMPt7dqTU3L",
        },
        name: "Velvet",
        popularity: 8,
        preview_url:
          "https://p.scdn.co/mp3-preview/d85e1f27ba567536cb36d9974f691e3fc819eed8?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 11,
        type: "track",
        uri: "spotify:track:7Coqa1TBRF6sUOFjIMG5H2",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:20:21Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4xeULTO1rzrBHQ6XSRu0Bf",
              },
              id: "4xeULTO1rzrBHQ6XSRu0Bf",
              name: "BadBoyHalo",
              type: "artist",
              uri: "spotify:artist:4xeULTO1rzrBHQ6XSRu0Bf",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3YJDqtTSjydvUpTvU1fJ6O",
              },
              id: "3YJDqtTSjydvUpTvU1fJ6O",
              name: "CG5",
              type: "artist",
              uri: "spotify:artist:3YJDqtTSjydvUpTvU1fJ6O",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/23AQbzkTQHvqn5v5dCRIiW",
          },
          id: "23AQbzkTQHvqn5v5dCRIiW",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2732774515187d913c8407e6d6d",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e022774515187d913c8407e6d6d",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048512774515187d913c8407e6d6d",
              width: 64,
            },
          ],
          name: "MUFFIN",
          release_date: "2021-10-22",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:23AQbzkTQHvqn5v5dCRIiW",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4xeULTO1rzrBHQ6XSRu0Bf",
            },
            id: "4xeULTO1rzrBHQ6XSRu0Bf",
            name: "BadBoyHalo",
            type: "artist",
            uri: "spotify:artist:4xeULTO1rzrBHQ6XSRu0Bf",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3YJDqtTSjydvUpTvU1fJ6O",
            },
            id: "3YJDqtTSjydvUpTvU1fJ6O",
            name: "CG5",
            type: "artist",
            uri: "spotify:artist:3YJDqtTSjydvUpTvU1fJ6O",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4o84Vs5pBuB8azgiQyzzeT",
            },
            id: "4o84Vs5pBuB8azgiQyzzeT",
            name: "Skeppy",
            type: "artist",
            uri: "spotify:artist:4o84Vs5pBuB8azgiQyzzeT",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4ZF7wQBi0coA8VYoMkkPMg",
            },
            id: "4ZF7wQBi0coA8VYoMkkPMg",
            name: "CaptainPuffy",
            type: "artist",
            uri: "spotify:artist:4ZF7wQBi0coA8VYoMkkPMg",
          },
        ],
        disc_number: 1,
        duration_ms: 224040,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZPEW2000423",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0w9SSLVuq8ZlCdrfEuqQ6z",
        },
        id: "0w9SSLVuq8ZlCdrfEuqQ6z",
        is_local: false,
        is_playable: true,
        name: "MUFFIN",
        popularity: 61,
        preview_url:
          "https://p.scdn.co/mp3-preview/5922b713ae9fe03ad57e9b3d03969022526d9eda?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:0w9SSLVuq8ZlCdrfEuqQ6z",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:20:15Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4o66UJPzUonUgENhbqpHRX",
              },
              id: "4o66UJPzUonUgENhbqpHRX",
              name: "MYLK",
              type: "artist",
              uri: "spotify:artist:4o66UJPzUonUgENhbqpHRX",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6ePYocfmtafLwf8uxkQLR8",
          },
          id: "6ePYocfmtafLwf8uxkQLR8",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2738767abc958be58e7628fc7de",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e028767abc958be58e7628fc7de",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048518767abc958be58e7628fc7de",
              width: 64,
            },
          ],
          name: "Papaya",
          release_date: "2021-11-12",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:6ePYocfmtafLwf8uxkQLR8",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4o66UJPzUonUgENhbqpHRX",
            },
            id: "4o66UJPzUonUgENhbqpHRX",
            name: "MYLK",
            type: "artist",
            uri: "spotify:artist:4o66UJPzUonUgENhbqpHRX",
          },
        ],
        disc_number: 1,
        duration_ms: 201882,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZNWX2120326",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1SDFw6dNzRo9HyDyUbhz9I",
        },
        id: "1SDFw6dNzRo9HyDyUbhz9I",
        is_local: false,
        is_playable: true,
        name: "Papaya",
        popularity: 30,
        preview_url:
          "https://p.scdn.co/mp3-preview/023d81cf7dad7e8645f38dcde47e70f88399b61d?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:1SDFw6dNzRo9HyDyUbhz9I",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-11-04T14:37:31Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
              },
              id: "3zDGjdtoxUiH7YcTWOdtMd",
              name: "LAKEY INSPIRED",
              type: "artist",
              uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/30Hrm4HzaEk9qR94TcNlpO",
          },
          id: "30Hrm4HzaEk9qR94TcNlpO",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27374067f96089e82e83b3b0d28",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0274067f96089e82e83b3b0d28",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485174067f96089e82e83b3b0d28",
              width: 64,
            },
          ],
          name: "Better Days",
          release_date: "2017-05-15",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:30Hrm4HzaEk9qR94TcNlpO",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
            },
            id: "3zDGjdtoxUiH7YcTWOdtMd",
            name: "LAKEY INSPIRED",
            type: "artist",
            uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
          },
        ],
        disc_number: 1,
        duration_ms: 207335,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QM42K1738106",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/36nutPAJFggPeddyVWDFm9",
        },
        id: "36nutPAJFggPeddyVWDFm9",
        is_local: false,
        is_playable: true,
        name: "Better Days",
        popularity: 59,
        preview_url:
          "https://p.scdn.co/mp3-preview/9ff387226b4d060556d84c4d952cd12cfbe27f7b?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:36nutPAJFggPeddyVWDFm9",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-11-04T14:37:37Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
              },
              id: "3zDGjdtoxUiH7YcTWOdtMd",
              name: "LAKEY INSPIRED",
              type: "artist",
              uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1mBLFCBVnn7dYS2IHudT4F",
          },
          id: "1mBLFCBVnn7dYS2IHudT4F",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2730ffdbca118e665999a4b0a67",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e020ffdbca118e665999a4b0a67",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048510ffdbca118e665999a4b0a67",
              width: 64,
            },
          ],
          name: "Blossom",
          release_date: "2019-07-27",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:1mBLFCBVnn7dYS2IHudT4F",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
            },
            id: "3zDGjdtoxUiH7YcTWOdtMd",
            name: "LAKEY INSPIRED",
            type: "artist",
            uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
          },
        ],
        disc_number: 1,
        duration_ms: 190000,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QM42K1985832",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3yGysFfkk88Qmual9Yt74Y",
        },
        id: "3yGysFfkk88Qmual9Yt74Y",
        is_local: false,
        is_playable: true,
        name: "Blossom",
        popularity: 43,
        preview_url:
          "https://p.scdn.co/mp3-preview/8ca50f0e8a93a7f03f7553b84b34e03e462917e9?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:3yGysFfkk88Qmual9Yt74Y",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-11-04T14:37:52Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
              },
              id: "3zDGjdtoxUiH7YcTWOdtMd",
              name: "LAKEY INSPIRED",
              type: "artist",
              uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/67hMzoTlWnFdxR5ncL9ioL",
          },
          id: "67hMzoTlWnFdxR5ncL9ioL",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273acf9953e670cd68022d1e313",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02acf9953e670cd68022d1e313",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851acf9953e670cd68022d1e313",
              width: 64,
            },
          ],
          name: "Blue Boi",
          release_date: "2018-05-01",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:67hMzoTlWnFdxR5ncL9ioL",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3zDGjdtoxUiH7YcTWOdtMd",
            },
            id: "3zDGjdtoxUiH7YcTWOdtMd",
            name: "LAKEY INSPIRED",
            type: "artist",
            uri: "spotify:artist:3zDGjdtoxUiH7YcTWOdtMd",
          },
        ],
        disc_number: 1,
        duration_ms: 105613,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QM42K1821605",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4SKBaun9EERfPsuLYqF1Fm",
        },
        id: "4SKBaun9EERfPsuLYqF1Fm",
        is_local: false,
        is_playable: true,
        name: "Blue Boi",
        popularity: 54,
        preview_url:
          "https://p.scdn.co/mp3-preview/2b6e0a61a962c4957563e0f5c968cbff2319ba33?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:4SKBaun9EERfPsuLYqF1Fm",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-11-04T14:38:11Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/70yqWLuRMiIAt19vzytn7W",
              },
              id: "70yqWLuRMiIAt19vzytn7W",
              name: "Huggy Beats",
              type: "artist",
              uri: "spotify:artist:70yqWLuRMiIAt19vzytn7W",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0UuoZs97ybziJ9xEqIc7bD",
          },
          id: "0UuoZs97ybziJ9xEqIc7bD",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27369b73701241db4a64558c330",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0269b73701241db4a64558c330",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485169b73701241db4a64558c330",
              width: 64,
            },
          ],
          name: "Donuts, Vol. 6",
          release_date: "2020-10-23",
          release_date_precision: "day",
          total_tracks: 10,
          type: "album",
          uri: "spotify:album:0UuoZs97ybziJ9xEqIc7bD",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/70yqWLuRMiIAt19vzytn7W",
            },
            id: "70yqWLuRMiIAt19vzytn7W",
            name: "Huggy Beats",
            type: "artist",
            uri: "spotify:artist:70yqWLuRMiIAt19vzytn7W",
          },
        ],
        disc_number: 1,
        duration_ms: 227368,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZMEP2066352",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/67k6RyeyMGLsawkYQrqLEm",
        },
        id: "67k6RyeyMGLsawkYQrqLEm",
        is_local: false,
        is_playable: true,
        name: "Gyoza",
        popularity: 16,
        preview_url:
          "https://p.scdn.co/mp3-preview/d4b59a7ed70dc982fdc2b4d7ac1a31c58a0fa596?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 7,
        type: "track",
        uri: "spotify:track:67k6RyeyMGLsawkYQrqLEm",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-11-04T14:40:29Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6GTRLqqiBPUqaOgyxOraHp",
              },
              id: "6GTRLqqiBPUqaOgyxOraHp",
              name: "StreamBeats by Harris Heller",
              type: "artist",
              uri: "spotify:artist:6GTRLqqiBPUqaOgyxOraHp",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1JiuvJro8Om00xwxYi1iCP",
          },
          id: "1JiuvJro8Om00xwxYi1iCP",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2738bc713666181e1216b23e391",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e028bc713666181e1216b23e391",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048518bc713666181e1216b23e391",
              width: 64,
            },
          ],
          name: "High at the Planetarium",
          release_date: "2020-03-13",
          release_date_precision: "day",
          total_tracks: 30,
          type: "album",
          uri: "spotify:album:1JiuvJro8Om00xwxYi1iCP",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6GTRLqqiBPUqaOgyxOraHp",
            },
            id: "6GTRLqqiBPUqaOgyxOraHp",
            name: "StreamBeats by Harris Heller",
            type: "artist",
            uri: "spotify:artist:6GTRLqqiBPUqaOgyxOraHp",
          },
        ],
        disc_number: 1,
        duration_ms: 130983,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZFZ72012722",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4avk1dsdSOPC6d83BZ3kme",
        },
        id: "4avk1dsdSOPC6d83BZ3kme",
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: "https://open.spotify.com/track/2IdzHT5pNeWTVToCScrhv0",
          },
          id: "2IdzHT5pNeWTVToCScrhv0",
          type: "track",
          uri: "spotify:track:2IdzHT5pNeWTVToCScrhv0",
        },
        name: "Dark Matter",
        popularity: 32,
        preview_url:
          "https://p.scdn.co/mp3-preview/9f169de8a4be42d00b94680d1770fd4fe9c247ba?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 9,
        type: "track",
        uri: "spotify:track:4avk1dsdSOPC6d83BZ3kme",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:21:11Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "compilation",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2TjowcA2RoCXXzLqMwA46A",
          },
          id: "2TjowcA2RoCXXzLqMwA46A",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2732ed34853bd91af7d9b5ca4fe",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e022ed34853bd91af7d9b5ca4fe",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048512ed34853bd91af7d9b5ca4fe",
              width: 64,
            },
          ],
          name: "Spin Rhythm XD, Vol. 1 (Original Game Soundtrack)",
          release_date: "2020-02-27",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: "spotify:album:2TjowcA2RoCXXzLqMwA46A",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
        ],
        disc_number: 1,
        duration_ms: 190968,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZGWW2045926",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1jR0UA2MT5KCtB2wAK3Omj",
        },
        id: "1jR0UA2MT5KCtB2wAK3Omj",
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: "https://open.spotify.com/track/70n5Zlhebl9iuwhyp2ySTP",
          },
          id: "70n5Zlhebl9iuwhyp2ySTP",
          type: "track",
          uri: "spotify:track:70n5Zlhebl9iuwhyp2ySTP",
        },
        name: "New Year",
        popularity: 22,
        preview_url:
          "https://p.scdn.co/mp3-preview/582ff5ee66a5312183b77c22015552879184bd52?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 10,
        type: "track",
        uri: "spotify:track:1jR0UA2MT5KCtB2wAK3Omj",
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: "2021-12-28T17:21:20Z",
      added_by: {
        external_urls: {
          spotify: "https://open.spotify.com/user/wildkyo",
        },
        id: "wildkyo",
        type: "user",
        uri: "spotify:user:wildkyo",
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
              },
              id: "1KkjjsBwGqU2YjS9OIucZV",
              name: "Hyper Potions",
              type: "artist",
              uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7zlaMf32qgze6Q8vzBxxYg",
              },
              id: "7zlaMf32qgze6Q8vzBxxYg",
              name: "Skye Rocket",
              type: "artist",
              uri: "spotify:artist:7zlaMf32qgze6Q8vzBxxYg",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/40rqDj2y2soNTkCYA7ZrpP",
          },
          id: "40rqDj2y2soNTkCYA7ZrpP",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27308844aff9dd65a51aee678ff",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0208844aff9dd65a51aee678ff",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485108844aff9dd65a51aee678ff",
              width: 64,
            },
          ],
          name: "Shooting Star",
          release_date: "2019-05-10",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:40rqDj2y2soNTkCYA7ZrpP",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1KkjjsBwGqU2YjS9OIucZV",
            },
            id: "1KkjjsBwGqU2YjS9OIucZV",
            name: "Hyper Potions",
            type: "artist",
            uri: "spotify:artist:1KkjjsBwGqU2YjS9OIucZV",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7zlaMf32qgze6Q8vzBxxYg",
            },
            id: "7zlaMf32qgze6Q8vzBxxYg",
            name: "Skye Rocket",
            type: "artist",
            uri: "spotify:artist:7zlaMf32qgze6Q8vzBxxYg",
          },
        ],
        disc_number: 1,
        duration_ms: 192857,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: "QZES81943110",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7xHrqNdRTjVmvualewApyl",
        },
        id: "7xHrqNdRTjVmvualewApyl",
        is_local: false,
        is_playable: true,
        name: "Shooting Star",
        popularity: 25,
        preview_url:
          "https://p.scdn.co/mp3-preview/0eba6f8a47b727b0e3d42732400fa26588100df5?cid=f6a40776580943a7bc5173125a1e8832",
        track: true,
        track_number: 1,
        type: "track",
        uri: "spotify:track:7xHrqNdRTjVmvualewApyl",
      },
      video_thumbnail: {
        url: null,
      },
    },
  ];
  const playlistResponse = {
    collaborative: false,
    description: "",
    followers: {
      total: 35,
    },
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b27353408ca2ca4bf2b444e2f916ab67616d0000b27379c55bd04ae7f2516a13565dab67616d0000b2738808fd66bf07cb5250de8ec6ab67616d0000b2739786e97a478d553208c1bc4f",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b27353408ca2ca4bf2b444e2f916ab67616d0000b27379c55bd04ae7f2516a13565dab67616d0000b2738808fd66bf07cb5250de8ec6ab67616d0000b2739786e97a478d553208c1bc4f",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b27353408ca2ca4bf2b444e2f916ab67616d0000b27379c55bd04ae7f2516a13565dab67616d0000b2738808fd66bf07cb5250de8ec6ab67616d0000b2739786e97a478d553208c1bc4f",
        width: 60,
      },
    ],
    name: "MIDU TWITCH",
    owner: {
      display_name: "midudev",
      id: "wildkyo",
      uri: "spotify:user:wildkyo",
    },
    public: true,
    tracks: {
      items: [
        {
          track: {
            duration_ms: 162374,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 195935,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 240923,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 100066,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 206953,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 138000,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 197294,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 219898,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 158048,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 222545,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 244323,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 286500,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 202971,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 99692,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 105692,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 80000,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 96000,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 224040,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 201882,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 207335,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 190000,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 105613,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 227368,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 130983,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 190968,
            type: "track",
          },
        },
        {
          track: {
            duration_ms: 192857,
            type: "track",
          },
        },
      ],
      total: 26,
    },
    uri: "spotify:playlist:1pp3Qh62wV5853vDMvk89v",
  };
  return {
    props: {
      data: playlistResponse,
      playlist: trackResponse,
    },
  };
}
