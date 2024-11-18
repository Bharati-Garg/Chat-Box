document.getElementById("send-btn").addEventListener("click", sendMessage);
document
  .getElementById("user-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      sendFile(file);
    }
  });

function sendMessage() {
  const messageInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  // Get the input message
  const message = messageInput.value.trim();

  // If message is not empty, append it to the chat box
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message");

    chatBox.appendChild(messageElement);

    // Clear the input field
    messageInput.value = "";

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function sendFile(file) {
  const fileType = file.type.split("/")[0];

  let fileMessage = document.createElement("div");
  fileMessage.classList.add("message", "user");

  if (fileType === "image") {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.alt = file.name;
    fileMessage.classList.add("file-message");
    fileMessage.appendChild(img);
  } else {
    let fileLink = document.createElement("a");
    fileLink.herf = URL.createObjectURL(file);
    fileLink.download = file.name;
    fileLink.textContent = `Download${file.name}`;
    fileMessage.classList.add("file-message");
    fileMessage.appendChild(fileLink);
  }

  document.getElementById("chat-box").appendChild(fileMessage);
}
