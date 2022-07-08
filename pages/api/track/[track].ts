// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../../player/api";
import { PlaylistTrack } from "../../../playlist/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlaylistTrack[]>
) {
  const { track } = req.query;

  if (!track) return res.status(400).end();

  try {
    const trackData = await api.getTrack(track);
    res.status(200).json(trackData);
  } catch (e) {
    return res
      .status(400)
      .end("Something went wrong fetching rapidapi spotify track data");
  }
}
