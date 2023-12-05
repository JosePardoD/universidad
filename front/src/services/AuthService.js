export async function login(username, password) {
  const res = await fetch("http://localhost:5001/api/login/", {
    headers: {
      username: username,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    console.log("No autorizado");
    return null;
  }
}


export async function register(username, password) {
  const data = {

      username: username,
      password: password,

  };

  const res = await fetch("http://localhost:5001/api/registro/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const document = await res.json();
    console.log(document);
    return document;
  } else {
    return null;
  }
}