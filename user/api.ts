import { options } from "../utils";

export default {
  getUserProfile: async (userId: any) => {
    try {
      if (!userId) return {};
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/user_profile/?id=${userId}&playlistLimit=10&artistLimit=10`,
        options
      );
      return await response.json();
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};
