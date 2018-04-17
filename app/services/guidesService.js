import { GUIDES_API_URL } from '../config/AppConfig';

const GuidesService = {
  FetchGuides() {
    return fetch(GUIDES_API_URL)
      .then(response => (response.json()))
      .then((data) => {
        if (!data.items) {
          throw (new Error('No items returned from server.'));
        } else {
          return data.items;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default GuidesService;
