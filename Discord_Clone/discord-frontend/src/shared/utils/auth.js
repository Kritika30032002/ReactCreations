export const logout = () => {
  localStorage.clear();
  window.location.pathname = "/login";
};
