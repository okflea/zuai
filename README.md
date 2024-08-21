##  ZuAi Coursework Evaluation Platform

Welcome to the IB Coursework Evaluation Platform! This project is a web application designed to streamline the evaluation of International Baccalaureate (IB) coursework, closely modeled after the "ZuAi" interface design. The application leverages cutting-edge technologies to deliver a robust and user-friendly experience:

* **Next.js 14:** A powerful framework for building modern web applications.
* **TailwindCSS:** A utility-first CSS framework for rapid and responsive design.
<!-- * **Zustand:** A lightweight state management solution for managing application state effectively. -->
* **Shadcn UI:** A comprehensive component library that simplifies UI development and ensures design consistency.

##  Live Demo: [https://zuai-rho.vercel.app/]

##  Figma Design: ZuAi Interface Design

##  Tech Stack

* Next.js 14
* TailwindCSS
<!-- * Zustand (for state management) -->
* Shadcn UI (for component library)

## ✨ Key Features

1. **Effortless File Upload:**
    * Drag-and-drop functionality for convenient file submission (PDFs only).
    * Manual file upload option for users who prefer a traditional approach.
    * Clear file size limit display to avoid file rejection due to size constraints (e.g., "Limit 25 MB per file").
    * Secure storage of uploaded files using browser local storage for seamless access.

2. **Persistent Local Storage:**
    * Stores uploaded files and their associated metadata locally to ensure data persistence across page reloads, enhancing user experience.
    * Efficient retrieval of stored files and data for smooth interaction with the platform.

3. **Comprehensive Coursework Details Form:**
    * Dropdowns for "Coursework Type" and "Subject" to facilitate accurate categorization.
    * Text input field for easy entry of the essay title.
    * Local storage for coursework details, keeping track of important information alongside the uploaded files.

4. **Interactive Evaluation Display:**
    * Visually appealing circular progress indicator to showcase the overall score effectively.
    * Detailed breakdown of scores by criteria (A, B, C) for a deeper understanding of performance.
    * Clear display of the evaluation date for reference.
    * Local storage of evaluation results to maintain a record of past assessments.

5. **Streamlined Coursework List:**
    * Displays previously uploaded coursework from local storage for easy access and management.
    * Informative details for each item listed, including title, subject, word count, and other relevant data.

6. **Enriching Explore Coursework Section (Planned):**
    * Implementation of a tabbed interface to categorize and manage different coursework categories (future feature).
    * Eye-catching grid layout for showcasing coursework examples in a visually appealing manner (future feature).

##  Bonus Features (Planned):**

* **Delightful Animations:** Implement smooth transitions between states for a polished user experience (future feature).
* **Engaging Micro-interactions:** Enhance user feedback with subtle interactions that improve understanding (future feature).
* **Motivational User Gratification:** Provide congratulatory messages for good scores and encouraging feedback for areas of improvement (future feature).
* **Accessibility Best Practices:** Ensure optimal accessibility through proper use of ARIA attributes and comprehensive keyboard navigation support for an inclusive user experience (future feature).

##  Testing(Planned):**

* **Unit Tests:** Rigorous unit tests for critical components to guarantee individual functionality (Planned).
* **Integration Tests:** Comprehensive integration tests to verify the seamless interaction of main user flows (Planned).

## ️ Advanced Local Storage Features (Planned):**

* **Efficient Data Compression:** Implement data compression techniques for optimized storage utilization and faster performance (future feature).
* **Clear Storage Management:** Offer options to clear local storage entirely or remove individual files (future feature).
* **Mock API Integration:** Simulate server-side persistence with mock APIs to explore backend integration possibilities (implemented).

## ️ Implementation Notes:**

* **Mock APIs for Evaluation:** Leveraged tools like MSW (Mock Service Worker) to create mock API calls for the evaluation process, facilitating development and testing (implemented).
* **Local Storage Reliance:** Currently, all data is stored and retrieved from local storage, ensuring accessibility offline (implemented).
* **Figma Alignment:** Closely followed the provided Figma design guidelines to maintain a consistent and professional user interface (implemented).
* **Storage Graceful Handling:** Implemented mechanisms to manage potential storage limitations and provide informative feedback to users when necessary (implemented).
<!-- * **Zustand for State Management:** Effective use of Zustand to simplify the management of application state across components (implemented). -->
* **Shadcn UI for Efficiency:** Utilized components from the Shadcn UI library to accelerate development and maintain design
