import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), 500);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}
