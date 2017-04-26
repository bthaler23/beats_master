

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

export const updateUser = (userId, user, form)  => {
  if (form === "image") {
    return $.ajax({
      method: 'PATCH',
      url: `api/users/${userId}`,
      contentType: false,
      processData: false,
      data: user
    });
  }
  else {
    return $.ajax({
      method: 'PATCH',
      url: `api/users/${userId}`,
      data: user
    });
  }

};
