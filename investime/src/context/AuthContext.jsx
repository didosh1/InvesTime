import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [auth, setAuth] = useState({
    fio: null,
    email: null,
    role: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}