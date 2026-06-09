
import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import "./UpdateStudent.css";

function UpdateStudent() {

    const { id } = useParams();

    const navigate =
    useNavigate();

    const [student, setStudent] =
    useState({

        first_name: "",

        last_name: "",

        username: "",

        email: "",

        phone: "",

        address: ""

    });

    useEffect(() => {

        axios.get(

            `http://127.0.0.1:8000/api/accounts/student/${id}/`

        )

        .then((response) => {

            setStudent(
                response.data
            );

        })

        .catch((error) => {

            console.log(error);

        });

    }, [id]);

    const handleChange = (e) => {

        setStudent({

            ...student,

            [e.target.name]:
            e.target.value

        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response =
            await axios.put(

                `http://127.0.0.1:8000/api/accounts/update-student/${id}/`,

                student

            );

            alert(
                response.data.message
            );

            navigate("/students");

        }

        catch(error){

            console.log(error);

        }
    };

    return (

        <div className="update-page">

            <div className="update-card">

                <h1>
                    Update Student
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                    type="text"
                    name="first_name"
                    value={student.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    />

                    <input
                    type="text"
                    name="last_name"
                    value={student.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    />

                    <input
                    type="text"
                    name="username"
                    value={student.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />

                    <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />

                    <input
                    type="text"
                    name="phone"
                    value={student.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    />

                    <textarea
                    name="address"
                    value={student.address}
                    onChange={handleChange}
                    placeholder="Address"
                    />

                    <button
                    type="submit"
                    >
                        Update Student
                    </button>

                </form>

            </div>

        </div>
    );
}

export default UpdateStudent;
