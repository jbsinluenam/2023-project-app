const fetcher = async ({ url, method, body, json = true }) => {

  const res = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
    json: false,
  });
};

export const login = async (user) => {
  return fetcher({
    url: '/api/login',
    method: 'POST',
    body: user,
    json: false,
  });
};