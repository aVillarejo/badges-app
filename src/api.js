// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const randomNumber = (min = 0, max = 1) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// const simulateNetworkLatency = (min = 30, max = 1500) =>
//   delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  // await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  const url = '/api' + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      // throw new Error("500: Server Error");
      return callApi('/badges');
    },
    create(badge) {
      return callApi(`/badges`, {
        method: 'POST',
        body: JSON.stringify(badge)
      });
    },
    read(id) {
      return callApi(`/badges/${id}`);
    },
    update(id, updates) {
      return callApi(`/badges/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
      });
    },
    remove(id) {
      return callApi(`/badges/${id}`, {
        method: 'DELETE'
      });
    }
  }
};

export default api;
