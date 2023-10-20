import { createContext, useContext } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";

// generate context
const UserContext = createContext();

// buatkan shortcut untuk penggunaan context
export const useUserContext = () => useContext(UserContext);

// siapkan komponen provider
export const UserProvider = ({ children }) => {
  // sediakan value yang akan di provide
  const initialValue = {
    isUserAvailable: false,
  };
  const [user, setUser] = useLocalStorage("user", initialValue, "json");
  const changeUser = (data) => {
    setUser((user) => ({
      ...user,
      ...data,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
