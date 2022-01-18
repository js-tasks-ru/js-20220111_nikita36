/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let i = 0;

  return Object.fromEntries(
    Object.entries(obj).filter(function ([key, elem]) {
      return key !== fields[i++];
    })
  );
};
