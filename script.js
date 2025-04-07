function sendMessage() {
    const input = document.getElementById('user-input');
    const log = document.getElementById('chat-log');
    const userMessage = input.value;
  
    if (userMessage.trim() === '') return;
  
    log.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
    
    // Simple bot responses
    let botReply = "I don't understand.";
    if (userMessage.toLowerCase().includes("hello")) {
      botReply = "Hi there!";
    } else if (userMessage.toLowerCase().includes("how are you")) {
      botReply = "I'm just code, but I'm doing great!";
    }
  
    log.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    input.value = '';
    log.scrollTop = log.scrollHeight;
  }
  