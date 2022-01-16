import * as yup from "yup";
import Link from "next/link";
import {useEffect, useState} from "react";
import Input from "../compenents/Design/Input";
import Btn from "../compenents/Design/Btn";
import {useAuth} from "../hooks/useAuth";
import {useRouter} from "next/router";

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = () => {
   const { push } = useRouter();
   const { isAuthenticated, loginUser } = useAuth();

   const [data, setData] = useState({
       email: '',
       password: ''
   });

   const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isAuthenticated) {
            return push('/app');
        }
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const navigateToRegister = (e) => {
        e.preventDefault();
        return push('/register')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data)
            .then(() =>{
                loginUser(data);
            })
            .catch((err) => {
        });

    };

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Login</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Username or email *</label>
                                            <Input
                                                placeholder="email"
                                                id="email"
                                                className="form-control p_input"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                onChange={handleChange}
                                                // error={errors.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <Input
                                                id="password"
                                                className="form-control p_input"
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                onChange={handleChange}
                                                // error={errors.password}
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between">
                                            <Link href='/forgotPassword'><a href="#" className="forgot-pass">Forgot password</a></Link>
                                        </div>
                                        <div className="text-center">
                                            <Btn className="btn btn-primary btn-block enter-btn" onClick={handleSubmit.onCompleted} type="submit"> Login </Btn>
                                        </div>
                                        <p className="sign-up">
                                            Don&apos;t have an Account?

                                            <a onClick={navigateToRegister}>
                                                Sign Up
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
