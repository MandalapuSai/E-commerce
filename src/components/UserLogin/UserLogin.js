import React, { useEffect, useState } from "react";
import Fillingstation from '../../assets/Contactpage-1.jpg';
import { FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import './UserLogin.css'


export default function Sign() {


    const axiosInstance = axios.create();
    const get = (url, config = {}) => axiosInstance.get(url, config);
    const post = (url, payload, config = {}) =>
        axiosInstance.post(url, payload, config);
    const navigate = useNavigate();


    const [activeSection, setActiveSection] = useState("LoginPage");


    const LoginData = [
        { id: 1, name: 'Sai', lastname: 'Mandalapu', email: 'sai@gmail.com', password: '123', Id: '5236', phone: '8317697414' },
        { id: 2, name: 'satish', lastname: 'Dandabathula', email: 'satish@gmail.com', password: '987', Id: '6757', phone: '9951918379' }
    ]


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });



    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password") {
            const regex = /^[a-zA-Z0-9]{8}$/;
            if (!regex.test(value)) {
                setError("Minimum 8 Characters");
            } else {
                setError("");
            }
        }

        if (name === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/;
            if (!emailRegex.test(value)) {
                setEmailError("Enter a valid mail address");
            } else {
                setEmailError("");
            }
        }


    };



    // const [CreateEmail, CreatesetEmail] = useState("");
    // const [CreateEmailError, CreatesetEmailError] = useState("");

    // const CreatEmailchange = (event) => {
    //     const { name, value } = event.target;
    //     CreatesetEmail(value);
    //     if (name === "email") {
    //         const emailRegex1 = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/;
    //         if (!emailRegex1.test(value)) {
    //             CreatesetEmailError("Enter a valid mail address");
    //         } else {
    //             CreatesetEmailError("");
    //         }
    //     }

    // }


    const [ForgotEmail, ForgotsetEmail] = useState("");
    const [ForgotEmailError, ForgotsetEmailError] = useState("");

    const ForgotMailChange = (event) => {
        const { name, value } = event.target;
        ForgotsetEmail(value);
        if (name === "email") {
            const emailRegex1 = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/;
            if (!emailRegex1.test(value)) {
                ForgotsetEmailError("Enter a valid mail address");
            } else {
                ForgotsetEmailError("");
            }
        }

    }


    const SendOTP = (ForgotPassword) => {
        console.log("Send OTP to:", ForgotPassword);
    }



    const LoginPage = () => {
        const isValidUser = LoginData.find((user) => user.email === formData.email && user.password === formData.password);
        console.log(isValidUser)
        if (isValidUser) {
            console.log(isValidUser)
            alert("Login successfully !!!!")
            localStorage.setItem('User', JSON.stringify({ isValidUser }));
            navigate('/home/dashboard');
        } else {
            alert("Incorrect credentials")
        }
    };

    const handleReload = () => {
        window.location.reload();
    };



    const [CreateLoginFormData, CreateLoginSetFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const [CreateErrors, CreateSetErrors] = useState({});

    const CreateHandleChange = (e) => {
        const { name, value } = e.target;
        CreateLoginSetFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));


        // if (name === "email") {
        //     const emailRegex1 = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/;
        //     if (!emailRegex1.test(value)) {
        //         CreatesetEmailError("Enter a valid mail address");
        //     } else {
        //         CreatesetEmailError("");
        //     }
        // }



    };

    const CreateHandleSubmit = (e) => {
        e.preventDefault();
        let CreateNewErrors = {};

        if (!CreateLoginFormData.firstName.trim()) CreateNewErrors.firstName = "First Name is required";
        if (!CreateLoginFormData.lastName.trim()) CreateNewErrors.lastName = "Last Name is required";
        if (!CreateLoginFormData.email.trim()) CreateNewErrors.email = "Email is required";
        if (!CreateLoginFormData.mobile.trim() || CreateLoginFormData.mobile.length !== 10)
            CreateNewErrors.mobile = "Enter a valid 10-digit mobile number";
        if (!CreateLoginFormData.password.trim()) CreateNewErrors.password = "Password is required";
        if (!CreateLoginFormData.confirmPassword.trim()) CreateNewErrors.confirmPassword = "Confirm Password is required";

        if (CreateLoginFormData.password && CreateLoginFormData.confirmPassword && CreateLoginFormData.password !== CreateLoginFormData.confirmPassword) {
            CreateNewErrors.confirmPassword = "Passwords do not match!";
        }

        if (Object.keys(CreateNewErrors).length > 0) {
            CreateSetErrors(CreateNewErrors);
            return;
        }

        console.log("Form Submitted Successfully", CreateLoginFormData);
        alert("Form submitted successfully!");
    };




    return (
        <div className="container-fluid min-vh-100 " style={{ backgroundColor: 'blue' }}>
            <div className="row w-100 justify-content-center" style={{ padding: '80px 0px', height: '100vh' }}>
                <div className="col-md-10 col-lg-8 card login-card p-4 shadow h-100 rounded-4 txtA">
                    <div className="row h-100">
                        <div className="col-md-6 text-center h-100">
                            <img
                                src={Fillingstation}
                                alt="Graduation"
                                className="img-fluid rounded h-100 rounded-4"
                                style={{ objectFit: "cover", width: "100%" }}
                            />
                        </div>

                        <div className="col-md-6 px-4 h-100 d-flex flex-column justify-content-center Saitxt">
                            <div className="mb-3">
                                <img src='https://digispheretech.in/img/logo.webp' alt='' />
                            </div>

                            {activeSection === "LoginPage" && (
                                <section className="LoginPage" >
                                    <h2 className="fw-bold mt-2 mb-3">Let the Journey Begin!</h2>
                                    <p className="fw-bold mt-2 mb-5">
                                        Unlock a world of education with a single click! Please login to your account.
                                    </p>

                                    <div className="form-group mt-3 mb-3">
                                        <label className="fw-semibold mb-2">Email Address</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <span className="input-group-text bg-light">
                                                <FaEnvelope />
                                            </span>
                                        </div>
                                        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                                    </div>

                                    <div className="form-group mt-3 mb-5">
                                        <label className="fw-semibold mb-2">Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control" placeholder="Enter your password" value={formData.password} name="password" onChange={handleChange} />
                                            <span className="input-group-text bg-light">
                                                <FaLock />
                                            </span>
                                        </div>
                                    </div>

                                    <a href="#" className="d-block text-end text-primary mb-3 fw-bold" onClick={() => setActiveSection("ForgotPassword")}>
                                        Forgot Password?
                                    </a>
                                    <button className="btn btn-primary w-100 fw-bold" onClick={LoginPage}>Login</button>
                                    <p className="mt-3 fw-bold">
                                        Don’t have an Account? <a href="#" className="text-primary fw-bold" onClick={() => setActiveSection("Sign Up")}>Sign Up</a>
                                    </p>
                                </section>
                            )}

                            {activeSection === "Sign Up" && (

                                <form onSubmit={CreateHandleSubmit}>
                                    <section className="Sign Up">
                                        <h2 className="text-center">Create Account</h2>

                                        <div className="form-group mt-2 mb-3">
                                            <label className="fw-semibold mb-2">First Name*</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your First Name"
                                                    name="firstName"
                                                    value={CreateLoginFormData.firstName}
                                                    onChange={CreateHandleChange}
                                                    required
                                                />
                                                <span className="input-group-text bg-light"><FaUser /></span>
                                            </div>
                                            {CreateErrors.firstName && <p style={{ color: "red" }}>{CreateErrors.firstName}</p>}
                                        </div>

                                        <div className="form-group mt-2 mb-3">
                                            <label className="fw-semibold mb-2">Last Name*</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your Last Name"
                                                    name="lastName"
                                                    value={CreateLoginFormData.lastName}
                                                    onChange={CreateHandleChange}
                                                    required
                                                />
                                            </div>
                                            {CreateErrors.lastName && <p style={{ color: "red" }}>{CreateErrors.lastName}</p>}
                                        </div>

                                        <div className="form-group mt-2 mb-3">
                                            <label className="fw-semibold mb-2">Email Address*</label>
                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    value={CreateLoginFormData.email}
                                                    onChange={CreateHandleChange}
                                                    required
                                                />
                                            </div>
                                            {CreateErrors.email && <p style={{ color: "red" }}>{CreateErrors.email}</p>}
                                        </div>

                                        <div className="form-group mt-2 mb-3">
                                            <label className="fw-semibold mb-2">Mobile*</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your Mobile Number"
                                                    name="mobile"
                                                    value={CreateLoginFormData.mobile}
                                                    maxLength={10}
                                                    onChange={CreateHandleChange}
                                                    required
                                                />
                                                <span className="input-group-text bg-light"><FaPhoneAlt /></span>
                                            </div>
                                            {CreateErrors.mobile && <p style={{ color: "red" }}>{CreateErrors.mobile}</p>}
                                        </div>

                                        <div className="d-flex justify-content-between flex-wrap gap-2">
                                            <div className="form-group mt-2 mb-3" style={{ flex: "1 1 45%" }}>
                                                <label className="fw-semibold mb-2">Create Password*</label>
                                                <div className="input-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        name="password"
                                                        value={CreateLoginFormData.password}
                                                        onChange={CreateHandleChange}
                                                        required
                                                    />
                                                    <span className="input-group-text bg-light"><FaLock /></span>
                                                </div>
                                                {CreateErrors.password && <p style={{ color: "red" }}>{CreateErrors.password}</p>}
                                            </div>

                                            <div className="form-group mt-2 mb-3" style={{ flex: "1 1 45%" }}>
                                                <label className="fw-semibold mb-2">Confirm Password*</label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Confirm Password"
                                                        name="confirmPassword"
                                                        value={CreateLoginFormData.confirmPassword}
                                                        onChange={CreateHandleChange}
                                                        required
                                                    />
                                                    <span className="input-group-text bg-light"><FaRegEye /></span>
                                                </div>
                                                {CreateErrors.confirmPassword && <p style={{ color: "red" }}>{CreateErrors.confirmPassword}</p>}
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>

                                        <p className="fw-bold mt-3">Already a member ? <label style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={handleReload}>Sign in</label></p>

                                    </section>
                                </form>



                            )}
                            {activeSection === "ForgotPassword" && (
                                <section className="ForgotPassword">
                                    <h2 className="text-center">Forgot Password</h2>
                                    <p className="text-muted">Enter your registered email to reset your password.</p>

                                    <div className="form-group mt-3 mb-3">
                                        <label className="fw-semibold mb-2">Email Address</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={ForgotEmail}
                                                name="email"
                                                onChange={ForgotMailChange}
                                            />
                                        </div>
                                        {ForgotsetEmailError && <p style={{ color: "red" }}>{ForgotEmailError}</p>}
                                    </div>

                                    <button className="btn btn-primary w-100 fw-bold" onClick={() => {
                                        setActiveSection("sendotp");
                                        SendOTP(ForgotEmail);
                                    }}>Send OTP</button>
                                </section>
                            )}

                            {activeSection === "sendotp" && (
                                <section className="sendotp">
                                    <h2 className="text-center">We sent you a code</h2>
                                    <p className="text-muted text-center">Please, enter it below to verify your email</p>

                                    <div className="text-center"><label>abc@gmail.com</label></div>
                                    <div className="form-group mt-3 mb-3">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter your OTP" />
                                        </div>
                                    </div>


                                    <button className="btn btn-primary w-100 fw-bold" onClick={() => setActiveSection("Sign Up")}>Submit</button>

                                    <div className="mt-4 fw-bold">Don’t received code yet? <span ><label style={{ cursor: 'pointer', textDecoration: 'underline' }}>&nbsp;&nbsp;send again</label></span></div>

                                </section>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}