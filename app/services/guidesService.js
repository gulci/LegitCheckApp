import { ROOT_API_URL } from '../config/AppConfig';

const GuidesService = {
  FetchItems() {
    return fetch(`${ROOT_API_URL}/items.json`)
      .then(response => (response.json()))
      .then((data) => {
        if (data.length === 0) {
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
        if (data.length === 0) {
          throw (new Error('No varieties returned from server.'));
        } else {
          return data;
        }
      })
      .catch((error) => {
        throw error;
      });
  },
  FetchTells(itemId, varietyId) {
    return fetch(`${ROOT_API_URL}/tells/${itemId}/${varietyId}.json`)
      .then(response => (response.json()))
      .then((data) => {
        if (data.length === 0) {
          throw (new Error('Invalid variety returned from server.'));
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
