export const isFlasy = (value) => value === 0 ? false : !value;

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isFlasy(value)) {
      delete result[key];
    }
  })
  return result;
}