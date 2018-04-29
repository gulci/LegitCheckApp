import { ROOT_API_URL } from '../config/AppConfig';

const GuidesService = {
  FetchItems() {
    return fetch(`${ROOT_API_URL}/items.json`)
      .then(response => (response.json()))
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          throw (new Error('No items returned from server.'));
        } else {
          return data;
        }
      })
      .catch((error) => {
        throw error;
      });
  },
  FetchVarieties(itemId) {
    return fetch(`${ROOT_API_URL}/varieties/${itemId}.json`)
      .then(response => (response.json()))
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          return {
            isEmpty: true,
          };
        }
        return data;
      })
      .catch((error) => {
        throw error;
      });
  },
  FetchTells(varietyId) {
    return fetch(`${ROOT_API_URL}/tells/${varietyId}.json`)
      .then(response => (response.json()))
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          throw (new Error('No tells returned from server.'));
        } else {
          return data;
        }
      })
      .catch((error) => {
        throw error;
      });
  },
};

export default GuidesService;
