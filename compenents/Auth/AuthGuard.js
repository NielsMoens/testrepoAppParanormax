import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

export const AuthGuard = ({children}) => {
    const { push } = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            return push('/login');
        }
    })

    return(
        <>
            {children}
        </>
    )
};

