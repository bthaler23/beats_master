

export const getUser = (userId) => {

  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });

};

export const updateUser = (userId, user) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    data: user
  });

};
