
import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    useNavigate
} from "react-router-dom";

import "./Students.css";

function Students() {

    const navigate =
    useNavigate();

    const [students, setStudents] =
    useState([]);

    useEffect(() => {

        axios.get(

            "http://127.0.0.1:8000/api/transactions/students/"

        )

        .then((response) => {

            setStudents(
                response.data
            );

        })

        .catch((error) => {

            console.log(error);

        });

    }, []);

    return (

        <div className="students-page">

            <div className="students-container">

                <h1>

                    Students List

                </h1>

                <table
                className="students-table"
                >

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Address</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                    {
                        students.map(
                        (student) => (

                        <tr
                        key={student.id}
                        >

                            <td>
                                {student.name}
                            </td>

                            <td>
                                {student.email}
                            </td>

                            <td>
                                {student.phone}
                            </td>

                            <td>
                                {student.address}
                            </td>

                            <td>

                                <button

                                className="update-btn"

                                onClick={() =>

                                navigate(

                                `/update-student/${student.id}`

                                )

                                }

                                >

                                    Update

                                </button>

                            </td>

                        </tr>

                        ))
                    }

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Students;

