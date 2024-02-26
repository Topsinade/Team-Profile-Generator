# Team-Profile-Generator

The Team Generator is a command-line application that helps you build and manage your development team. It gathers information about team members, including managers, engineers, and interns, and generates an HTML page displaying the team roster.

## Features

- Add team members such as managers, engineers, and interns.
- Input team member details like name, ID, email, and specific information based on their role.
- Automatically generates an HTML page with the team roster.
- Supports customization with additional CSS styling.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/topsinade/team-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd team-generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Run the application:

    ```bash
    node index.js
    ```

2. Follow the prompts to input information about each team member.
3. Choose to add a manager, engineer, or intern.
4. Once you've added all team members, select the option to finish building the team.
5. The application will generate an HTML file (`team.html`) in the `output` directory.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Inquirer.js](https://www.npmjs.com/package/inquirer) - Command-line user interface
- [Bootstrap](https://getbootstrap.com/) - Front-end framework for styling
- [Font Awesome](https://fontawesome.com/) - Icon library
- All tests pass using the [Jest package](https://www.npmjs.com/package/jest).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshot
[Link to the Screenshot](/assets/Screenshot%202024-02-26%20205831.png)

## Acknowledgments
- Special thanks to the developers of Inquirer.js for providing a user-friendly CLI interface.
- Special thanks Juan Delgado for his support during this project. Your inputs are highly appreciated.