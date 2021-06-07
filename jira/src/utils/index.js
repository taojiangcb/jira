import React, { useEffect, useState } from "react";

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

  const D = function () {
    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(function () {
      fn && fn();
    }, delay)
  }

  D.clear = function () {
    if (timeout) { clearTimeout(timeout); }
  }

  return D;
}

export const useDebounce = (value, delay) => {
  const [debouceValue, setDebounce] = useState(value);

  let timeout;
  function clear() {
    if (timeout) clearTimeout(timeout);
  }

  useEffect(() => {
    timeout = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return clear;
  }, [value, delay])

  return debouceValue;
}