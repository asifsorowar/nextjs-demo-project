const baseUrl = process.env.NODE_ENV
  ? "http://localhost:3000"
  : "http://yourwebsite.com";

const get = async (api) => {
  const res = await fetch(`${baseUrl}${api}`);
  return res.json();
};

const post = async (api, body) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
};

const put = async (api, body) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return res.json();
};

const remove = async (api) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "DELETE",
  });
  return res.json();
};

export default {
  get,
  post,
  put,
  remove,
};
