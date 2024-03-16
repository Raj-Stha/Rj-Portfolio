export const getData = () => {
  const data = localStorage.getItem("ThemeData");
  return data === null ? false : JSON.parse(data);
};

export const setData = (data) => {
  return localStorage.setItem("ThemeData", JSON.stringify(data));
};
