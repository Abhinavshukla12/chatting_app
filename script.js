document.addEventListener("DOMContentLoaded", function() {
    const chatWindowUser1 = document.getElementById("chat-window-user1");
    const messageInputUser1 = document.getElementById("message-input-user1");
    const sendButtonUser1 = document.getElementById("send-btn-user1");

    const chatWindowUser2 = document.getElementById("chat-window-user2");
    const messageInputUser2 = document.getElementById("message-input-user2");
    const sendButtonUser2 = document.getElementById("send-btn-user2");

    sendButtonUser1.addEventListener("click", function() {
        sendMessage("Nikes J.", messageInputUser1.value, chatWindowUser1, chatWindowUser2);
    });

    sendButtonUser2.addEventListener("click", function() {
        sendMessage("Johnson B.", messageInputUser2.value, chatWindowUser2, chatWindowUser1);
    });

    // Handle Enter key press
    messageInputUser1.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendButtonUser1.click();
        }
    });

    messageInputUser2.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendButtonUser2.click();
        }
    });

    function sendMessage(sender, message, chatWindow, oppositeChatWindow) {
        if (message.trim() !== "") {
            appendMessage(sender, message, chatWindow);
            appendMessage(sender, message, oppositeChatWindow);
            messageInputUser1.value = ""; // Clear input
            messageInputUser2.value = ""; // Clear input
        }
    }

    function appendMessage(sender, message, chatWindow) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        // Scroll to bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
