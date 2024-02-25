const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { mainModule } = require("process");
const { run } = require("jest");


const team = [];


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


];

const menu = [
  {
    type: 'list',
    message: 'Which team member do you want to add:',
    name: 'job',
    choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
  },
]


const engineer =[
  {
    type: 'input',
    message: "Engineer's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Enter Engineer's Employee ID",
    name: 'id',
  },
  {
    type: 'input',
    message: "Enter Engineer's Github Username:",
    name: 'github',
  },
]

const intern =[
  {
    type: 'input',
    message: "Intern's name: ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Intern's Employee ID",
    name: 'id',
  },
  {
    type: 'input',
    message: "Enter Intern's Email:",
    name: 'email',
  },
  {
    type: 'input',
    message: "Enter Intern's School:",
    name: 'school',
  },
]



// function to write HTML file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function runMenu(){
  inquirer.prompt(menu).then((responses)=>{
    console.log(responses.job)
    if(responses.job ==="Add an intern"){
      inquirer.prompt(intern).then((responses)=>{
        team.push(responses)
        runMenu()
      })  
    }
    if(responses.job ==="Add an Engineer"){
      inquirer.prompt(engineer).then((responses) =>{
        console.log(responses)
        team.push(responses)
        runMenu()
      })
    }
    if(responses.job ==="Finish building the team"){
      console.log("Team is done!")
      console.log(team)
    }
  })
}

function generateTeamHTML() {
const html = render(team);
fs.writeFile(outputPath, html, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else{
    console.log("HTML file successfully created");
  }
})

}



// function to initialize program
function init() {
inquirer.prompt(manager).then((responses) => {
  team.push(responses)
  runMenu();
});

}

// function call to initialize program
init();

