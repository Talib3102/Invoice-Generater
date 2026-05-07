# Invoice Processing System

A professional full-stack application for managing and generating invoices, built with a modern tech stack.

## 🚀 Features
- **Add Invoices**: Create new invoices with client details and amounts.
- **View Invoices**: A clean dashboard to track all generated invoices.
- **Delete Invoices**: Easily manage and remove outdated records.
- **Responsive Design**: Built with Material UI for a seamless experience across devices.

## 🛠️ Tech Stack
### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: Material UI (MUI)
- **Language**: TypeScript
- **HTTP Client**: Axios

### Backend
- **Framework**: Spring Boot 4.0.6
- **Language**: Java 23
- **ORM**: Hibernate / Spring Data JPA
- **Database**: MySQL

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- JDK 23
- MySQL Server

### Backend Setup
1. Navigate to the `server-side` directory.
2. Copy `src/main/resources/application.properties.example` to `src/main/resources/application.properties`.
3. Update the database URL, username, and password.
4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the `client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📄 License
This project is for demonstration purposes.
