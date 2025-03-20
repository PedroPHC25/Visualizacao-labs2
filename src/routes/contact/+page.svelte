<svelte:head>
    <title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<form action = "mailto:pedrocoterli@gmail.com" method = "get">
    <label for = "email">Email: 
        <input name = "email" type = "email" placeholder= "example@email.com">
    </label><br>
    <label for = "subject">Subject: 
        <input name = "subject" type = "text" placeholder= "Your subject">
    </label><br>
    <label for = "body">Body: 
        <textarea name = "body" placeholder= "Type your message here"></textarea>
    </label><br>
    <input type = "submit" value = "Submit" id = "button">
</form>