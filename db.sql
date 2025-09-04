-- Create database (optional)
CREATE DATABASE IF NOT EXISTS task_manager;

-- Use the database
USE task_manager;

-- Create table Tasks
CREATE TABLE IF NOT EXISTS Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
