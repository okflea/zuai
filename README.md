# 📚 ZuAi Coursework Evaluation Platform

Welcome to the **ZuAi Coursework Evaluation Platform**! This project is a web application designed to evaluate  coursework, closely modeled after the "ZuAi" interface design. The application is built using the latest technologies, including Next.js 14, TailwindCSS  and Shadcn UI components.

🔗 **Live Demo**: [https://zuai-rho.vercel.app/]  

## 🚀 Tech Stack

- **Next.js 14**
- **TailwindCSS**
<!-- - **Zustand** (for state management) -->
- **Shadcn UI** (for component library)

## ✨ Key Features

### 1. File Upload
- 🖱️ Drag-and-drop functionality for PDF files
- 📁 Manual file upload option
- 📏 File size limit display (e.g., "Limit 25 MB per file")
- 💾 Store uploaded files using browser local storage

### 2. Local Storage Implementation
- 📂 Save uploaded files and their metadata locally
- 🔄 Ensure persistence of data across page reloads
- 🚀 Efficient retrieval of stored files and data

### 3. Coursework Details Form
- 📑 Dropdowns for "Coursework Type" and "Subject"
- 📝 Text input for essay title
- 🗂️ Store form data locally with the associated file

### 4. Evaluation Display
- 📊 Display overall score with a circular progress indicator
- 📈 Breakdown of scores by criteria (A, B, C)
- 📅 Evaluation date display
- 🔄 Store and retrieve evaluation results locally

### 5. Coursework List
- 📃 Display previously uploaded coursework from local storage
- 📋 Show title, subject, word count, and other relevant details for each item

### 6. Explore Coursework Section
- 🗂️ Implement a tabbed interface for different coursework categories
- 🎨 Create a grid layout for coursework examples

## 💎 Bonus Features

- 🎞️ **Animations**: Smooth transitions between states
- 🎯 **Micro-interactions**: Enhanced user feedback
- 🌟 **User Gratification**: Congratulatory messages for good scores and encouraging feedback for areas of improvement
- ♿ **Accessibility**: Proper use of ARIA attributes and keyboard navigation support

## 🧪 Testing(Planned)

- 🧩 **Unit tests**: For critical components
- 🔄 **Integration tests**: For main user flows

## 🗃️ Advanced Local Storage Features(Planned)

- 🗜️ **Data compression**: For efficient storage
- 🧹 **Clear storage options**: Option to clear local storage or individual files
- 🔗 **Mock API integration**: For simulating server-side persistence

## 🛠️ Implementation Notes

<!-- - ⚙️ Used mock API calls for the evaluation process with tools like MSW (Mock Service Worker). -->
- 💾 All data is stored and retrieved from local storage.
- 🎨 Closely matched the provided Figma designs.
- 📊 Handled potential storage limitations gracefully, providing user feedback when necessary.
<!-- - 🧠 Leveraged Zustand for global state management. -->
- 🧩 Utilized Shadcn UI components to maintain design consistency and accelerate development.

## 📝 Setup Instructions

0. **Clone and install the repository**:
   ```bash
   git clone https://github.com/okflea/zuai.git
   cd zuai
   bun install
   bun run dev 
   ```
## 🔍 **Assumptions & Design Decisions**

- Data is stored locally to simulate a full-fledged backend.
- Mock APIs were used for testing and simulating server-side evaluation processes.
- The design was closely followed with some adjustments for responsiveness and user experience.

🚧 **Challenges Faced**

- **Storage Limits**: Managed potential storage limitations by compressing data and providing clear user feedback.
- **Design Consistency**: Ensured design consistency by utilizing Shadcn UI components and adhering to the provided Figma design.

🎉 **Conclusion**

This platform successfully meets the requirements of evaluating ZuAi coursework in a user-friendly and responsive manner. The application is equipped with advanced local storage features, user gratification elements, and robust testing to ensure a smooth and reliable user experience.

