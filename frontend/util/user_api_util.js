

export const getUser = (userId) => {

  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
  
};
