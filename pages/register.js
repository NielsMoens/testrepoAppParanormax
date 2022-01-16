import Footer from "../compenents/App/Footer/Footer";
import {useEffect, useState} from "react";
import Input from "../compenents/Design/Input";
import {useRouter} from "next/router";
import {useAuth} from "../hooks/useAuth";

const Register = () => {
    const { push } = useRouter();
    const { isAuthenticated, registerUser } = useAuth();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

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

    const navigateToLogin = (e) => {
        e.preventDefault();
        return push('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(data);
    }

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Register</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control p_input"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
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
                                            <label>Password</label>
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

                                        <div className="text-center">
                                            <button type="submit" onClick={handleSubmit.onCompleted}
                                                    className="btn btn-primary btn-block enter-btn">Register
                                            </button>
                                        </div>

                                        <p className="sign-up text-center">
                                                Already have an Account?
                                                <a onClick={navigateToLogin}>
                                                     Sign In
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

export default Register;
