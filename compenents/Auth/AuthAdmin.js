import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

export const AuthAdmin = ({children}) => {
    const { push } = useRouter();
    const { isAdmin } = useAuth();

    useEffect(() => {
        if (!isAdmin) {
            return push('/app');
        }
    })

    return(
        <>
            {children}
        </>
    )
};

