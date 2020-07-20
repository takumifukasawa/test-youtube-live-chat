const YouTube = require("youtube-live-chat");

const CHANNEL_ID = "channel_id";
const API_KEY = "your_api_key";

const chatElem = document.getElementById("chat");

function addChat(data) {
  const logElem = document.createElement("div");
  logElem.classList.add("log");

  const logThumb = document.createElement("img");
  logThumb.classList.add("log-thumb");
  logThumb.src = data.authorDetails.profileImageUrl;
  logElem.appendChild(logThumb);

  const logContent = document.createElement("p");
  logContent.classList.add("log-content");
  logElem.appendChild(logContent);

  const logName = document.createElement("span");
  logName.classList.add("log-name");
  logName.textContent = data.authorDetails.displayName;
  logContent.appendChild(logName);

  const logText = document.createElement("span");
  logText.classList.add("log-text");
  logText.textContent = data.snippet.displayMessage;
  logContent.appendChild(logText);

  chatElem.appendChild(logElem);
}

const yt = new YouTube(CHANNEL_ID, API_KEY);

yt.on("ready", () => {
  console.log("===== on ready =====")
  yt.listen(1000);
});

yt.on("message", (data) => {
  console.log("===== on message =====")
  console.log(data)
  // console.log(data.snippet.displayMessage);
  addChat(data);
});

yt.on("error", (error) => {
  console.log("===== on error =====")
  console.error(error);
});

console.log(yt);