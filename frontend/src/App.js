import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import StudentDashboard
from "./pages/StudentDashboard";

import AdminDashboard
from "./pages/AdminDashboard";
import Books from "./pages/Books";
import AddBook
from "./pages/AddBook";
import DeleteBook
from "./pages/DeleteBook";
import UpdateBook from "./pages/UpdateBook";
import Students
from "./pages/Students";
import IssueBook
from "./pages/IssueBook";
import ReturnBooks from "./pages/ReturnBooks";
import UpdateStudent from "./pages/UpdateStudent";
import StudentBooks from "./pages/StudentBooks";



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route
 path="/student-dashboard"
 element={<StudentDashboard />}
/>
<Route
 path="/books"
 element={<Books />}
/>
<Route

path="/add-book"

element={<AddBook />}

/>
<Route

path="/delete-book"

element={<DeleteBook />}

/>
<Route
 path="/update-book"
 element={<UpdateBook />}
/>
<Route

path="/students"

element={<Students />}

/>
<Route
 path="/issue-books"
 element={<IssueBook />}
/>
<Route

path="/return-books"

element={<ReturnBooks />}

/>
<Route
path="/update-student/:id"
element={<UpdateStudent />}
/>
<Route
path="/student-books"
element={<StudentBooks />}
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;