import {useContext} from "react";
import {AuthContext} from "../compenents/Auth/AuthProvider";

export const useAuth = () => useContext(AuthContext);