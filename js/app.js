function send() {
    userName = document.getElementById('name').value;
    userMessage = document.getElementById('message').value;
    console.log(userName);
    console.log(userMessage);
    document.getElementById('message').value='';
}  