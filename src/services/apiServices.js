const BASE_URL = "https://aircall-job.herokuapp.com/activities";

export const getAllActivity = () => fetch(BASE_URL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const getActivity = (id) => fetch(`${BASE_URL}/${id}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const postArchieve = (id) => fetch(`${BASE_URL}/${id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    is_archived: true,
  }),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));