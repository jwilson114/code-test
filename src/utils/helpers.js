export const generateID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}


export const isJSON = (value) => {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
}
