import {createContext, useContext, useState} from "react";
import { storeUser, getUser, removeUser } from "../core/storage";
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";
import GET_LOGINDATA from "../../lib/Queries/getLoginData";
import {REGISTER_USER} from "../../lib/mutations/register";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const { push } = useRouter();

    const [user, setUser] = useState(getUser());

    const [loginUserMutation] = useMutation(GET_LOGINDATA);
    const [registerUserMutation] = useMutation(REGISTER_USER);

    const loginUser = (userData) => {
        loginUserMutation({
            variables: userData,
            onCompleted: ({authenticate})=>{
                console.log('logged in');
            },
        }).then(({data})=>{
            const authenticationData = data.authenticate;
            storeAuthUser(authenticationData)
        })
    }

    const registerUser = (userData) => {
        registerUserMutation({
            variables: userData,
            onCompleted: ({authenticate})=>{
                console.log('registered');
            },
        }).then(({data})=>{
            const authenticationData = data.register;
            storeAuthUser(authenticationData)
        })
    }

    const logoutUser = () => {
        setUser(null);
        removeUser();
        return push('/login')
    }

    const storeAuthUser = (user) => {
        setUser(user);
        storeUser(user);
    };

    return(
        <>
            <AuthContext.Provider value={{ isAuthenticated: !!user /*isAdmin: user.user.role === 'admin'*/, loginUser, registerUser, logoutUser }}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

