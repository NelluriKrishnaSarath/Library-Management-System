import React, {

    useState

} from "react";

import {

    useNavigate

} from "react-router-dom";

import axios from "axios";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        username: "",

        first_name: "",

        last_name: "",

        address: "",

        gender: "",

        email: "",

        phone: "",

        dob: "",

        registration_date: "",

        member_type: "",

        password: "",

        confirm_password: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (

            formData.password !==
            formData.confirm_password
        ) {

            alert(
                "Passwords do not match"
            );

            return;
        }

        try {

            await axios.post(

                "http://127.0.0.1:8000/api/accounts/register/",

                formData
            );

            alert(
                "Registration Successful"
            );

            navigate("/login");
        }

        catch (error) {

            console.log(error);

            alert(
                "Registration Failed"
            );
        }
    };

    return (

        <div className="register-page">

            <div className="register-overlay">

                <div className="register-card">

                    <h1>

                        Registration

                    </h1>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="form-control mb-3"
                            onChange={handleChange}
                            required
                        />

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        <textarea
                            name="address"
                            placeholder="Address"
                            className="form-control mb-3"
                            rows="3"
                            onChange={handleChange}
                        >
                        </textarea>

                        <div className="mb-3">

                            <label>

                                Gender

                            </label>

                            <div className="gender-box">

                                <label>

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        onChange={handleChange}
                                    />

                                    Male

                                </label>

                                <label>

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        onChange={handleChange}
                                    />

                                    Female

                                </label>

                            </div>

                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control mb-3"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control mb-3"
                            onChange={handleChange}
                            required
                        />

                        <div className="mb-3">

                            <label>

                                Date of Birth

                            </label>

                            <input
                                type="date"
                                name="dob"
                                className="form-control"
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>

                                Registration Date

                            </label>

                            <input
                                type="date"
                                name="registration_date"
                                className="form-control"
                                onChange={handleChange}
                            />

                        </div>

                        <select
                            name="member_type"
                            className="form-select mb-3"
                            onChange={handleChange}
                        >

                            <option value="">

                                Select Member Type

                            </option>
<option value="Student">

    Student

</option>

<option value="Librarian">

    Librarian

</option>

                        </select>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control mb-3"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            className="form-control mb-4"
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="register-btn"
                        >

                            Register

                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Register;