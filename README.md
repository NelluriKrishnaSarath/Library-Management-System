# 📚 Library Management System

<div align="center">

# 🚀 Full Stack Library Management System using Django REST Framework & React JS

A modern, responsive, and role-based Library Management System that helps librarians manage books and students while allowing students to borrow, return, and track books efficiently.

</div>

---

# 📖 Project Overview

The Library Management System is a full-stack web application developed using Django REST Framework and React JS.

The system provides separate dashboards for Librarians (Admins) and Students, enabling efficient management of books, borrowing activities, returns, fines, and student records.

This project demonstrates:

- Full Stack Development
- REST API Integration
- Role-Based Authentication
- CRUD Operations
- Responsive UI Design
- Database Management
- Real-Time Dashboard Statistics

---

# 🏗️ System Architecture

```text
React Frontend
       │
       ▼
Django REST API
       │
       ▼
SQLite Database
```

---

# ✨ Key Features

## 👨‍💼 Admin Features

### Dashboard

- Total Books
- Available Books
- Issued Books
- Total Students
- Recent Activities
- Professional Analytics Cards

### Book Management

- Add New Books
- Update Books
- Delete Books
- Upload Book Cover Images
- Default Image Support
- Category Management

### Student Management

- View Students
- Update Student Details
- Manage Student Records

### Transactions

- Issue Books
- Return Books
- Track Due Dates
- Monitor Book Availability

### Reports

- Borrowing Statistics
- Book Availability Reports

---

## 👨‍🎓 Student Features

### Dashboard

- Total Borrowed Books
- Currently Borrowed Books
- Returned Books
- Fine Amount

### Books

- Browse Library Books
- View Book Details
- Check Availability
- Book Cover Preview

### Borrow Books

- Borrow Available Books
- Automatic Due Date Generation

### Return Books

- Return Borrowed Books
- Fine Calculation for Late Returns

### Profile

- Personalized Dashboard
- Avatar using Username Initial

---

# 🛠️ Technology Stack

## Frontend

- React JS
- React Router DOM
- Axios
- HTML5
- CSS3
- Responsive Design

## Backend

- Django
- Django REST Framework

## Database

- SQLite3

## Authentication

- Custom User Model
- Role-Based Authentication

## Media Handling

- Django Media Files
- Image Upload Support
- Default Book Images

---

# 📂 Project Structure

```text
library-management-system/

├── backend/
│
├── accounts/
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── books/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
│
├── transactions/
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── dashboard/
│
├── media/
│   └── books/
│
├── manage.py
│
└── frontend/
    │
    ├── src/
    │
    ├── pages/
    │   ├── Home.js
    │   ├── Login.js
    │   ├── Register.js
    │   ├── AdminDashboard.js
    │   ├── StudentDashboard.js
    │   ├── Students.js
    │   ├── UpdateStudent.js
    │   ├── ReturnBooks.js
    │   └── StudentBooks.js
    │
    └── App.js
```

---

# 🔐 User Roles

## Librarian

Permissions:

- Manage Books
- Manage Students
- Issue Books
- Return Books
- View Dashboard
- Generate Reports

## Student

Permissions:

- View Books
- Borrow Books
- Return Books
- View Dashboard
- Track Fine Details

---

# 📊 Database Design

## User

```text
id
username
password
first_name
last_name
email
phone
address
member_type
```

## Book

```text
id
title
author
category
total_copies
available_copies
image
```

## BorrowBook

```text
id
student
book
borrow_date
due_date
return_date
status
fine_amount
```

---

# 🔄 System Workflow

## Book Borrowing Process

```text
Student
   │
   ▼
Select Book
   │
   ▼
Borrow Book
   │
   ▼
Book Issued
   │
   ▼
Available Copies Reduced
   │
   ▼
Due Date Generated
```

## Book Return Process

```text
Student
   │
   ▼
Return Book
   │
   ▼
Status Updated
   │
   ▼
Available Copies Increased
   │
   ▼
Fine Calculated
```

---

# ⚡ API Endpoints

## Accounts

```http
POST /api/accounts/register/
POST /api/accounts/login/
GET  /api/accounts/student/<id>/
PUT  /api/accounts/update-student/<id>/
```

## Books

```http
GET    /api/books/
POST   /api/books/add-book/
PUT    /api/books/update-book/
DELETE /api/books/delete-book/
```

## Transactions

```http
GET  /api/transactions/student-dashboard/
GET  /api/transactions/students/
GET  /api/transactions/my-books/
POST /api/transactions/issue-book/
POST /api/transactions/return-book/
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/library-management-system.git
```

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py runserver
```

Backend Running:

```text
http://127.0.0.1:8000
```

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend Running:

```text
http://localhost:3000
```

---

# 🌟 Major Functionalities

✅ User Authentication

✅ Role-Based Authorization

✅ Book Management

✅ Student Management

✅ Issue Books

✅ Return Books

✅ Fine Calculation

✅ Dashboard Analytics

✅ Image Upload Support

✅ Responsive Design

✅ REST API Integration

✅ Professional UI

---

# 📈 Future Enhancements

- JWT Authentication
- Email Notifications
- Book Reservation System
- Advanced Search & Filtering
- Pagination
- Dark Mode
- PDF Reports
- Excel Reports
- Analytics Charts
- Docker Deployment
- Cloud Hosting

---

# 🎯 Learning Outcomes

This project helped in gaining practical experience in:

- Django REST Framework
- React JS Development
- API Integration
- Database Design
- Authentication & Authorization
- CRUD Operations
- Responsive Web Design
- Full Stack Development
- State Management
- Media File Handling

---

# 👨‍💻 Author

## Krishna Sarath Nelluri

Computer Science Engineer

📧 Email: nellurikrishnasarath@gmail.com

💻 Skills:

- Python
- Django
- Django REST Framework
- React JS
- JavaScript
- HTML
- CSS
- MySQL
- Git & GitHub

---

# ⭐ Show Your Support

If you like this project:

⭐ Star this repository

🍴 Fork this repository

📢 Share it with others

---

## 📚 Library Management System

A Complete Full Stack Web Application Built Using Django REST Framework and React JS.

Made with ❤️ by Krishna Sarath Nelluri
