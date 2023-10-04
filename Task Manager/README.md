# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1.Run in terminal to clone the repository into your directory
```
 git clone https://github.com/Kritika30032002/ReactCreations.git
```
2. Cd to project folder
```
cd '.\Task Manager\'
```
3. Run npm install to download node_modules
```
 npm i
```

4. Runs the app in the development mode.
```
npm start
```

5.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Overview

The Task Manager App is a powerful tool for efficiently managing your tasks and boards. This application provides a range of features to streamline your task management process. 

## Key Features

- **Responsive Design**: Enjoy a seamless experience on various devices, as the app adapts to different screen sizes.

- **Hover States**: Easily identify interactive elements with intuitive hover states.

- **Board Management**: Create, read, update, and delete boards effortlessly.

- **Task Management**: Manage tasks within boards with options to mark subtasks as complete and move tasks between columns.

- **Form Validation**: Receive helpful form validations when creating or editing boards and tasks.

- **Sidebar Control**: Toggle the visibility of the board sidebar for better organization.

## Usage

### Boards

- Click on different boards in the sidebar to switch between them.

- To create a new board, click "Create New Board" in the sidebar, which opens the "Add New Board" modal.

- In the dropdown menu, select "Edit Board" to update board details, including adding or removing columns.

- When deleting a board, all associated columns and tasks are also removed. A confirmation prompt will appear.

### Columns

- A board must have at least one column before adding tasks. If no columns exist, the "Add New Task" button in the header is disabled.

- Click "Add New Column" to open the "Edit Board" modal for adding columns.

### Tasks

- Adding a new task automatically places it at the bottom of the relevant column.

- Updating a task's status will move it to the appropriate column.

## Bonus Feature

- **Drag and Drop**: Tasks can be conveniently dragged and dropped into different columns, providing flexibility in task management.