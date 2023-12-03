import React from 'react';
import { useState } from 'react';
export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);
      const parsedData = JSON.parse(value);
      return parsedData;
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    if (newValue == 'logout') {
      localStorage.clear();
    } else {
      localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    }
  };
  return [storedValue, setValue];
};
