const pageTemplate = teamData => {

    let cards = '';

    for(employee of teamData){
        cards=`
        PUT HTML HERE
        `
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
    <div class="card">
        <div class="card-header">
<p class="name">${getName}</p>
<p class="role">${getRole}</p>
        </div>
        <div class="card-body">

        </div>
    </div>
</div>
</body>

<footer>
</footer>

</html>`

return finalHTML;
}

module.exports = pageTemplate

