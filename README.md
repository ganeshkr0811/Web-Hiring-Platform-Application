# Web Hiring Platform Application



## Table of Contents
1. [Objective](#objective)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)


---
Developer Detail:

- Name: Ganesh Kumar
- Branch : Chemical Engineering, NIT Jalandhar
- Email: ganeshkr0811@gmail.com

### Objective

The **Web Hiring Platform Application** is a React-based solution designed to help streamline the hiring process by providing an intuitive interface for job posting, candidate tracking, and assessment management. The platform allows an admin to manage job listings, track applicants, and create job-specific assessments, all within a user-friendly environment.

### Features

1. **Dashboard for Managing Job Postings**:
   - An admin interface to monitor and edit job listings, each including:
     - Job title
     - Job description
     - Number of candidates who applied
   - Admin can add, edit, or delete job postings as needed.

2. **Candidate Tracking & Details Page**:
   - A detailed view of candidates applying for each job:
     - Candidate name, resume (upload/download functionality), application date, and status (e.g., "Under Review," "Interview Scheduled").
   - Clicking on a candidate opens a profile page displaying:
     - Candidate’s profile details (e.g., name, email, contact information, skills, and experience)
     - Resume preview or download link
     - Option to update application status

3. **Job-Specific Test/Assessment Creation**:
   - Admins can create unique, job-specific assessments:
     - Choose a job from a dropdown list
     - Create a multiple-choice assessment for the selected position
     - Add, edit, or delete questions and answers as needed
   - Ensures each job listing has a distinct assessment.

4. **User Interface & User Experience**:
   - A responsive, desktop, and mobile-friendly interface
   - Consistent and intuitive design using a UI library (e.g., Material-UI, Ant Design)
   - Modular, clean code adhering to React best practices
   - Efficient state management using Redux or React Context API

### Tech Stack

- **Frontend**: React, React Router, Redux, Typescript (or React Context API)
- **UI Library**: Material-UI or Ant Design for a polished, consistent look


### Installation

To run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ganeshkr0811/Web-Hiring-Platform-Application
   cd web-hiring-platform

2. **Add node modules**:
   ```bash
     npm install
   
3. **to run locally**:
   ```bash
      npm run dev

