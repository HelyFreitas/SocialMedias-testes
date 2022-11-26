import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";

import {AuthContext} from "./Contexts/AuthContext";
import { AuthProvider } from "./Contexts/AuthContext";

import { useContext } from "react";

function App() {
  const { auth } = useContext(AuthContext);
 
  return auth ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
