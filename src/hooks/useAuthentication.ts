import { useContext } from "react";
import { AuthContext } from "../utils/contexts";
import { AuthContextProps } from '../utils/models';

export const useAuthentication = () => useContext<AuthContextProps>(AuthContext);
