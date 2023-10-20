import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = "", type) => {
  // menggunakan state untuk kontrol nilai localstorage
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key);
    // console.log(val);
    // jika nilai dari localstorage ditemukan, maka gunakan nilai tersebut
    if (val !== null) {
      switch (type) {
        case "number":
          return parseInt(val);
        case "json":
          return JSON.parse(val);
        default:
          return val;
      }
    }
    // jika initialValue berbentuk fungsi, maka jalankan fungsinya, selain itu returnkan nilainya
    if (typeof initialValue === "function") return initialValue();
    return initialValue;
  });

  useEffect(() => {
    // jika terjadi perubahan value, maka update localstorage nya
    let storedValue = value;
    // untuk handle json
    if (type === "json") storedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, storedValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
