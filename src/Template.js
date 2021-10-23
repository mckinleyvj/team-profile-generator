const fs = require('fs');

class createHTML{
    constructor(response) {
        this.response = response;
    }

    createPage() {
        const generateHTML = () => `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <title>Team Profile</title>
            </head>
            <body>
                <header class="container-fluid jumbotron-custom bg-dark text-white">
                    <h1 class="display-4 text-center">${this.response[0]}</h1>
                </header>

                <section></section>
                </div>
            </div>
            </body>
        </html>
        `;

        console.log(this.response);
        const htmlPageContent = generateHTML(this.response);

        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    }
}

module.exports = createHTML;