# Robot Arm Control Panel
This project provides a web-based control interface for a six-motor robot arm. It allows users to set various motor positions, save these positions to a database, load them later, and also trigger their execution by an actual robot arm (via an external system that communicates with the backend).

## Features
*  Direct Motor Control: Sliders to control the angle of each of the six motors (0-180 degrees).

*  Reset Positions: A button to reset all motors to a default position (e.g., 90 degrees).

*  Save Poses: Save the current motor settings as a new pose in the database.

* Manage Saved Poses:

  *    Display a table of all saved poses.

  *    "Load" button to transfer the values of a specific pose to the main control panel.

  *    "Remove" button to delete a pose from the database.

* Run Poses: A "Run" button to mark the current pose for execution by the physical robot arm.

* Robust Backend:

   *    PHP for server-side logic and database interaction.

   *    MySQL for storing poses.

    *   Dedicated API endpoints for fetching ready-to-run poses and updating their status after execution.

## Technologies Used
* HTML: Structuring the web page.

* CSS: Styling the graphical user interface for an appealing and user-friendly experience.

* JavaScript: For frontend interactive functionalities (e.g., slider updates, AJAX requests).

* PHP: Server-side scripting language for connecting to the database and processing frontend requests.

* MySQL: Database management system for storing robot arm poses.

* AJAX (Fetch API): For asynchronous communication between the frontend and backend.

## Prerequisites
* A web server (e.g., Apache) with PHP support.

* A MySQL database server.

* A LAMP (Linux), WAMP (Windows), or MAMP (macOS) stack is recommended for easy setup.

* A modern web browser.

## Run the Application:

* Open the web browser.

* Go to the URL: http://localhost/robot_arm_control/index.html.



