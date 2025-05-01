function handleSubmit() {
    const name = document.getElementById("nameInput").value;
    const isSubscribed = document.getElementById("newsletter").checked;
  
    let message = `Thanks for contacting us, ${name}!`;
    if (isSubscribed) {
      message += " You've subscribed to our newsletter.";
    }
  
    document.getElementById("responseArea").innerHTML = `<p>${message}</p>`;
    return false; // prevent page reload