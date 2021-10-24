const fs = require('fs');
const { forEach } = require('lodash');

class createHTML{
    constructor(response) {
        this.response = response;
    }

    createPage() {

        const res = this.response;

        const arr_htmlElements = [];

        const topEl = 
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">-->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
                <title>${res[0]}</title>
            </head>
            <body>
                <header class="jumbotron jumbotron-fluid bg-dark text-primary">
                    <h1 class="display-4 text-center">${res[0]}</h1>
                </header>

                <div class="container-fluid d-flex justify-content-around">`;

                arr_htmlElements.push(topEl);

                let new_res = [];

                res.slice(1).forEach(data => 
                    new_res.push(data)
                    );

                new_res.forEach(member => 
                    {
                        if (member.role === "Manager") {
                            const memberCards = 
                            `<div class="row px-4">
                            <div class="card h-100">
                              <div class="card-header bg-dark text-primary">
                                        <h3>${member.name}</h3>
                                        <h4>☕ ${member.role}</h4>
                                    </div>
                                    <div class="card-body">
                                    <p class="id">ID: ${member.id}</p>
                                    <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                                    <p class="office">Office Number: ${member.officePhone}</p>
                                    </div>
                              </div>
                            </div>`;
                        arr_htmlElements.push(memberCards);
                        }

                        if (member.role === "Engineer") {
                            const memberCards = 
                            `<div class="row px-4">
                            <div class="card h-100">
                              <div class="card-header bg-dark text-primary">
                                    <h3>${member.name}</h3>
                                    <h4>🛠 ${member.role}</h4>
                                    </div>
                                    <div class="card-body">
                                    <p class="id">ID: ${member.id}</p>
                                    <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                                    <p class="office">Github : <a href="https://www.github.com/${member.github}">${member.github}</a></p>
                                    </div>
                              </div>
                            </div>`;
                        arr_htmlElements.push(memberCards);
                        }

                        if (member.role === "Intern") {
                            const memberCards = 
                            `<div class="row px-4">
                            <div class="card h-100">
                              <div class="card-header bg-dark text-primary">
                                    <h3>${member.name}</h3>
                                    <h4>🎓 ${member.role}</h4>
                                    </div>
                                    <div class="card-body">
                                    <p class="id">ID: ${member.id}</p>
                                    <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                                    <p class="office">School : ${member.school}</p>
                                    </div>
                              </div>
                            </div>`;
                        arr_htmlElements.push(memberCards);
                        }
                    });

                const btmEl = `</div></div></body></html>`;
                arr_htmlElements.push(btmEl);

        fs.writeFile('./dist/index.html', arr_htmlElements.join(""), (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    }
}

module.exports = createHTML;