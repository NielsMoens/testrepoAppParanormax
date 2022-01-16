import {getUser} from "../../compenents/core/storage";
import Image from 'next/image';

const Profile = () => {
    const userName = getUser();
    // console.log(userName.user.firstName);
    const profiledata = userName.user
    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white">
                                        <Image
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar"
                                            className="img-fluid my-5 w-50 "
                                        />
                                        <h5>{profiledata.firstName} {profiledata.lastName}</h5>
                                        <p>Web Designer</p>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>firstName</h6>
                                                        <p className="text-muted">{profiledata.firstName}</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>LastName</h6>
                                                        <p className="text-muted">{profiledata.lastName}</p>
                                                    </div> <div className="col-6 mb-3">
                                                        <h6>Email</h6>
                                                        <p className="text-muted">{profiledata.email}</p>
                                                    </div>

                                                </div>
                                                <h6>Projects</h6>
                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>Recent</h6>
                                                            <p className="text-muted">Lorem ipsum</p>
                                                        </div>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Profile.requiresAuth = true;
export default Profile;
