import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (initialValues) => {
  const [values, setValues] = useLocalStorage("dark", initialValues);

  return [values, setValues];
};

export default useDarkMode;
