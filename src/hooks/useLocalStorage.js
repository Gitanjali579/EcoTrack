// ============================================
// EcoTrack - useLocalStorage Hook
// ============================================

import {
  useState,
  useEffect
} from "react";

const useLocalStorage = (
  key,
  initialValue
) => {

  // ==========================================
  // INITIAL STATE
  // ==========================================

  const [storedValue, setStoredValue] =
    useState(() => {

      try {
        const item =
          localStorage.getItem(key);

        if (item !== null) {
          return JSON.parse(item);
        }

        return typeof initialValue === "function"
          ? initialValue()
          : initialValue;

      } catch (error) {

        console.error(
          `Error reading LocalStorage key "${key}":`,
          error
        );

        return typeof initialValue === "function"
          ? initialValue()
          : initialValue;
      }
    });

  // ==========================================
  // UPDATE LOCAL STORAGE
  // ==========================================

  useEffect(() => {

    try {

      localStorage.setItem(
        key,
        JSON.stringify(storedValue)
      );

    } catch (error) {

      console.error(
        `Error saving LocalStorage key "${key}":`,
        error
      );

    }

  }, [key, storedValue]);

  // ==========================================
  // RETURN STATE
  // ==========================================

  return [
    storedValue,
    setStoredValue
  ];
};

export default useLocalStorage;