import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useStateLocalStorage<T>(
  localStorageKey: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(
    (getLocalStorageItem(localStorageKey) as T) ?? initialValue,
  );

  useEffect(() => {
    setLocalStorageItem(localStorageKey, state);
  }, [localStorageKey, state]);

  return [state, setState];
}

function getLocalStorageItem(localStorageKey: string): unknown {
  const text = localStorage.getItem(localStorageKey);
  if (text === null) return text;

  const data = JSON.parse(text) as unknown;

  return data;
}

function setLocalStorageItem(localStorageKey: string, data: unknown): void {
  const text = JSON.stringify(data);
  localStorage.setItem(localStorageKey, text);
}
