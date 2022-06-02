import { options } from "../utils";

export default {
  getGlobalSearch: async (query) => {
    try {
      if (!query) return {};
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
        options
      );
      return await response.json();
    } catch (e) {
      console.error(e);
      return {};
    }
  },
};
