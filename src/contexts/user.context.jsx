import { createContext, useState } from "react";

// initialized with default value
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
