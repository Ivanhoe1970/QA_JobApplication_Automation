# Automated Job Application Testing with Cypress

## 📌 Overview
This project automates the **job application process** on Amazon Careers (or similar job portals) using **Cypress**. It demonstrates how to efficiently **search for a QA job, navigate job listings, and fill out an application form** while following best practices for **test automation**.

## 🚀 Key Features
✔ **End-to-End Test Automation**: Automates the job application flow using Cypress.  
✔ **Page Object Model (POM)**: Enhances test maintainability and readability.  
✔ **Dynamic Test Data**: Uses **Faker.js** to generate random names, emails, and phone numbers.  
✔ **Email Verification with Mailosaur**: Captures and verifies confirmation emails.  
✔ **CI/CD Pipeline**: Runs tests automatically using **GitHub Actions**.

## 🔧 Technologies Used
- **Cypress**: UI and API test automation framework  
- **Faker.js**: Random test data generation  
- **Mailosaur**: Email testing and verification  
- **GitHub Actions**: Continuous Integration (CI) pipeline  

## 📂 Project Structure

QA_JobApplication_Automation
│── cypress/
│   ├── e2e/                 # Test cases
│   ├── page_objects/         # Page Object Model (POM) files
│   ├── fixtures/             # Test data (e.g., resume files)
│── .github/workflows/        # GitHub Actions CI setup
│── README.md                 # Project documentation
│── cypress.config.js         # Cypress configuration
│── package.json              # Dependencies and scripts
