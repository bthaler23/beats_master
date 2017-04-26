

export const getUser = (userId) => {

  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });

};

export const getUsers = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const updateUser = (userId, user) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: user
  });

};
