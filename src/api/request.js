//All the requests according to API
export const request = {
  getUsers: (page, count) => {
    return fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },
  registerUser: (body, getToken) => {
    return getToken().then((res) =>
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        headers: {
          Token: res.token,
        },
        body,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.success;
        })
    );
  },
  getToken: () => {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },
  getPositions: () => {
    return fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },
};
