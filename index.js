const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const manager =[
  {
    type: 'input',
    message: "Enter Team Manager's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Enter Team Manager's Employee ID",
    name: 'id',
  },
  {
    type: 'input',
    message: "Enter Team Manager's Email Address:",
    name: 'email',
  },
  {
    type: 'input',
    message: "Enter Team Manager'sOffice number:",
    name: 'officeNumber',
  },
  {
    type: 'list',
    message: 'Choose from the Menu',
    name: 'job',
    choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
  },
  {
  type: 'input',
   message: 'Please enter your Github Username:',
   name: 'github',
  }, 
  {
    type: 'input',
     message: 'Please enter your email:',
     name: 'email',
    }, 
];

// const engineer =[
//   {
//     type: 'input',
//     message: "Engineer's name: ",
//     name: 'name',
//   },
//   {
//     type: 'input',
//     message: "Enter Engineer's Employee ID",
//     name: 'id',
//   },
//   {
//     type: 'input',
//     message: "Enter Engineer's Github Username:",
//     name: 'github',
//   },
// ]

// const intern =[
//   {
//     type: 'input',
//     message: "Intern's name: ",
//     name: 'name',
//   },
//   {
//     type: 'input',
//     message: "Intern's Employee ID",
//     name: 'id',
//   },
//   {
//     type: 'input',
//     message: "Enter Intern's Email:",
//     name: 'email',
//   },
//   {
//     type: 'input',
//     message: "Enter Intern's School:",
//     name: 'school',
//   },
// ]



// function to write HTML file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
inquirer.prompt(manager).then((responses) => {
  console.log("creating html file...");
  writeToFile("./team.html", generateTeam({...responses}));
});

}

// function call to initialize program
init();

