export default (arrUsers) => {
  const arr = arrUsers.slice();

  arr.sort((a, b) => {
    return b.registration_timestamp - a.registration_timestamp;
  });

  return arr;
};