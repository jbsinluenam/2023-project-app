//Create fetcher function to make API calls
//This function will be used by SWR to fetch data from the API
//In this function, we pass the object with the URL, method, body, and json parameters

const fetcher = async ({ url, method, body, json = true }) => {

  const res = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  });

  //Throw an error if the response is not ok
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  //If the json parameter is true, then we parse the response as JSON and return the data
  if (json) {
    const data = await res.json();
    return data;
  }
};

//Create register function to make a POST request to the /api/register endpoint
//This function will be used by the register page to register a new user
//We pass the user object which contains the name, email, and password
export const register = async (user) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
    json: false,
  });
};

export const signin = async (user) => {
  return fetcher({
    url: '/api/signin',
    method: 'POST',
    body: user,
    json: false,
  });
};