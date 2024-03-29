const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Hi! My name is ${answers.name}</h1>
                <p class="lead">I am from ${answers.location}.</p>
                <h3>Want to learn more? <span class="badge badge-secondary">Contact Me!</span></h3>
                <ul class="list-group">
                    <li class="list-group-item">My GitHub username is ${answers.github}</li>
                    <li class="list-group-item">My LinkedIn username is ${answers.linkedin}</li>
                    <li class="list-group-item">My Twitter username is ${answers.twitter}</li>
                </ul>
                <p class="p-2">I like ${answers.hobby} and ${answers.food}.</p>
            </div>
        </div>
    </body>
    </html>`;

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn username',
        },
        {
            type: 'input',
            name: 'twitter',
            message: 'Enter your Twitter username',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!'))
    })