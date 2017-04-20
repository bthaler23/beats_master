export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: user
  });
};

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session/',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);

export const email_exists = (email) => (
  $.ajax({
    method: 'GET',
    url: 'api/users/email_exists',
    data: {email}
  })
);
