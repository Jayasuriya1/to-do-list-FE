import React from "react";

export default function SignUp(){
    return(
        <div>
            <div className="login-header">
            <i className="bx bxs-book-open bx-lg" style={{ color: "#FBBC04" }}></i>
                <span>
                    
                <span className="logoFirstLetter">N</span>
                otify
                </span>
            </div>
            
                <div className="container ">
                    <div className="row login-input align-items-center">
                        <div class="col-md-6 ">
                            
                            <div className="text-center bold-1">
                                <h1>Create Account</h1>
                            </div>
                            <label for="exampleFormControlInput1" class="form-label bold">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                            <label for="exampleFormControlInput1" class="form-label bold pt-2">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                            <label for="inputPassword5" class="form-label bold pt-2">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" placeholder="Password" aria-labelledby="passwordHelpBlock"></input>
                            <button class="btn btn-primary login-btn" type="submit">Create Account</button>
                            <hr></hr>
                            <div className="d-flex justify-content-center align-items-end mb-0 pb-0">
                                <p className="pe-2 mb-0">Already have an account</p>
                                <a href="" className="text-primary text-decoration-none">Login</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="pe-2 mb-0">Having trouble logging in?</p>
                                <a href="" className="text-primary text-decoration-none">Reset your password</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
        </div>
    )
}