#  ShareSphere – Campus Resource Exchange Platform

## Introduction
**ShareSphere** is a web-based platform designed to help students **share, discover, and manage academic resources** easily.

Students can upload:
-  Digital resources (PDF notes, books)
-  Physical items (lab coat, drafter, etc.)

It works like a **simple marketplace for students**, where resources can be shared instead of being wasted or hard to find.

---

## Problem Statement
Students often face problems like:
- Not having access to proper notes  
- Difficulty in finding study materials  
- Spending money on items they could borrow  
- No common platform to share resources  

---

## Solution
ShareSphere provides a **centralized platform** where students can:
- Upload resources  
- Search and filter items  
- Manage their own uploads  
- Save useful items for later  

---

##  Core Features

###  1. Add Resource (Create)
Users can add a new resource using a form:
- Title  
- Type (PDF / Physical)  
- Semester  
- Description  

---

###  2. View Resources (Read)
All resources are displayed as cards in a clean UI.

---

###  3. Search & Filter
Users can:
- Search by title  
- Filter by:
  - Semester  
  - Category  
  - Resource type  

This is done using JavaScript `filter()` function.

---

###  4. Update Resource (Update)
Users can edit their uploaded resources.

---

###  5. Delete Resource (Delete)
Users can remove items when no longer needed.

---

###  6. Watchlist (Save for Later)
Users can save resources and access them later.

---

##  CRUD Concept (Main Logic)

This project is based on CRUD operations:

- **Create** → Add new resource  
- **Read** → Display resources  
- **Update** → Edit resource  
- **Delete** → Remove resource  

---

## How the Application Works

- All resources are stored as **objects inside an array**
- Each object contains:
  - title  
  - type  
  - semester  
  - description  

### Example:

- Data is displayed using `map()`
- Filtering is done using `filter()`
- UI updates automatically using React state

---

## React Concepts Used

- Components (UI divided into reusable parts)
- Props (data passing between components)
- useState (to store and update data)
- useEffect (for lifecycle handling)
- Conditional Rendering (show data based on conditions)
- Controlled Components (form handling)
- React Router (navigation between pages)

---

## JavaScript Concepts Used

- Data Types  
- Arrays & Objects  
- Functions  
- Conditionals  
- Higher Order Functions (`map`, `filter`)  
- Spread Operator  
- Event Handling  

---

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- React.js  

---

##  Key Highlight

 “A simple and efficient platform for students to share and access academic resources.”

---




##  Conclusion
ShareSphere demonstrates how a real-world problem can be solved using **basic web development concepts**. It focuses on simplicity, usability, and effective use of **React and JavaScript fundamentals**.

---
