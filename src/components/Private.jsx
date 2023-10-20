import { Navigate } from "react-router-dom";

import { useUserContext } from "../contexts/userContext";

function Private({ children }) {
  // cek hak akses
  const { user } = useUserContext();
  if (user.isUserAvailable) return children;

  return <Navigate to="/" replace={true} />;
}

export default Private;
