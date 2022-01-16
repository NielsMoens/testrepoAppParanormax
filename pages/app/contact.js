const Contact = () => {
    return (
        <>
            <div className="col-12 grid-margin stretch-card container-fluid page-body-wrapper full-page-wrapper">
                <div className="card full-page-wrapper">
                    <div className="card-body">
                        <h4 className="card-title">Any Questions?</h4>
                        <form className="forms-sample">
                            <div className="form-group">
                                <label htmlFor="exampleInputName1">Name</label>
                                <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail3">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="exampleTextarea1">Your Question</label>
                                <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

Contact.requireAuth = true;
export default Contact;
