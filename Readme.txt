# Task Manager with Local Storage

## Overview
This is a simple task management script that allows users to add, delete, and mark tasks as completed. The tasks persist in the browser's local storage, ensuring they remain available even after the page is refreshed.

## Features
- Add new tasks
- Delete tasks
- Mark tasks as completed
- Store tasks in local storage

## How It Works
1. When the page loads, stored tasks are retrieved from local storage and displayed.
2. The user can add a task by typing into the input field and clicking the "Add" button.
3. Clicking a task marks it as completed.
4. Clicking the delete button removes the task.
5. All actions automatically update local storage to preserve changes.

## Installation & Usage
1. Include the script in an HTML file.
2. Ensure an element with `#newTask` (input field) and `#tasks` (task container) exist in the HTML.
3. Open the HTML file in a browser to use the task manager.

## Dependencies
- FontAwesome (for delete icon)

## Future Enhancements
- Add task editing functionality
- Improve UI with CSS animations
- Implement categories and due dates

