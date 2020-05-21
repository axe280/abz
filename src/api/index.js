export default async function request(url, method = 'GET', formData = null) {
  try {

    let headers = {};
    let body;

    if (formData) {
      headers = {
        'Token': 'token'
      };
      body = formData;
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    })

    return await response.json();

  } catch(e) {

    console.log(e.message);

  }
}