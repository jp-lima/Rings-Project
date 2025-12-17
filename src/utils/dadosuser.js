const USER_KEY = 'user_data';

export const saveAuthData = (data) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const getAuthData = () => {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem(USER_KEY);
};
