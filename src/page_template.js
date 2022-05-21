const pageTemplate = teamData => {

    cards = [];

    for (employee of teamData) {
        card = `
        <div class="card">
        <div class="card-header">
<p class="name">${employee.getName()}</p>
<p class="role">${employee.getRole()}</p>
        </div>
        <div class="card-body">
<p class="id">${employee.getId()}</p>
<p class="email">${employee.getEmail()}</p>
<p class="other">Other</p>
        </div>
    </div>
        `
        cards.push(card);
    }

    let finalHTML =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="../src/style.css" />
</head>

<header>
    <h1 class="team">Team</h1>
</header>

<body>
<div class="card-box">
    ${cards}
</div>
</body>

<footer>
</footer>

</html>`

    return finalHTML;
}

module.exports = pageTemplate

