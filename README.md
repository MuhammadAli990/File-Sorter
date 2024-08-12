
# FileOrganizer

### Description:

FileOrganizer is a Node.js utility designed to streamline the process of organizing files within a directory. This tool automates the task of sorting files based on their extensions by creating dedicated folders for each type of file and moving files into their respective folders.

### Key Features:

Automatic Folder Creation: For each unique file extension found in the specified directory, a new folder is created.
File Sorting: Files are automatically moved into their corresponding folders based on their extension, making it easy to manage and locate files.
Command-Line Interface: Simply provide the path to the directory, and let FileOrganizer handle the rest.
### Usage:
Run the program and specify the path to the folder you wish to organize. FileOrganizer will analyze the files in the directory, create folders named after each file extension (e.g., .txt, .jpg), and move the files into these folders.

### Example:
`D:\\path\\to\\your\\folder`

### Dependencies:
#### prompt-sync:
A dependency for handling user input synchronously from the command line. Install it via npm with the following command:
`npm install prompt-sync`
### Why Use FileOrganizer?:
Managing files can quickly become chaotic, especially in directories with mixed file types. FileOrganizer helps to keep your workspace tidy and organized, saving you time and effort in manual file sorting.
