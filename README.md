# demodb_dynamic
Application Overview:
The application allows users to insert daily work hour records for employees and search for records based on employee names and dates.

Components:

Database: You have a MySQL database named employee_daily_work_hours_tracker that stores employee work hour records.

Server (PHP):

db_connect.php: Establishes a database connection.
insert.php: Handles the insertion of new work hour records into the database.
select_v2.php: Handles fetching work hour records from the database based on search criteria.
Frontend (HTML/CSS/JavaScript):

index.html: Provides the user interface for entering employee work hour records and searching for records.
demotracker.css: Styles the user interface.
demotracker_v2.js: Contains JavaScript logic for handling user interactions and making requests to the server.
User Workflow:

User visits the application's web page (index.html).
User can input employee work hour records, including first name, last name, department, date, total hours worked, and rate per hour.
User clicks the "Done" button to submit the work hour record to the server for insertion.
User can also enter search criteria, including employee name and date, in the "Search by Name" and "Search by Date" fields.
User clicks the "Done" button in the search section to search for records.
JavaScript (demotracker_v2.js) sends requests to the server (insert.php or select_v2.php) based on the user's actions.
The server (PHP) processes the requests, inserts new records into the database, or retrieves records from the database based on the search criteria.
The server responds with JSON data.
JavaScript updates the UI with the retrieved data or displays an error message if an issue occurs.
Improvements:

Ensure that the PHP scripts are properly sanitized and validated to prevent SQL injection.
Implement error handling for database connection and query execution.
Enhance the user interface for a better user experience.
Consider implementing user authentication and authorization if needed.
Implement pagination for displaying a large number of records.
Add validation on the client-side to ensure that the user enters valid data before submitting.
