import { useEffect } from "react";

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

export const useMount = callback => {
  useEffect(() => {
    callback()
  }, [])
}

const debouce = (fn, delay) => {
  let timeout;
  
  const fn = function () {
    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(function () {
      fn && fn();
    }, delay)
  }

  fn.clear = function () {
    if (timeout) { clearTimeout(timeout); }
  }

  return fn;
}

export const useDebounce = (value, delay) => {
  const [debouceValue, setDebounce] = useState(val);

  let timeout;
  function clear() {
    if (timeout) clearTimeout(timeout);
  }

  useEffect(() => {
    timeout = setTimeout(() => { setDebounce(value); })
    return clear();
  }, [value, delay])

  return debouceValue;
}