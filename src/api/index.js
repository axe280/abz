export async function request(url) {
  const response = await fetch(url);
  return await response.json();
}

export async function getTokenApi() {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
  return await response.json();
}

export async function sendFormApi(formData, token) {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: {
      'Token': token
    },
  });

  return response;
}