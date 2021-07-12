document.addEventListener("DOMContentLoaded", speechToEmotion, false);

function speechToEmotion() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "ko-KR";
  recognition.continuous = true;

  recognition.onresult = function (event) {
    const results = event.results;
    const transcript = results[results.length - 1][0].transcript;
    console.log(transcript);

    setEmoji("searching");

    fetch(`/emotion?text=${transcript}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.score > 0) {
          setEmoji("positive");
          console.log('positive')
        } else if (result.score < 0) {
          setEmoji("negative");
          console.log('negative')
        } else {
          setEmoji("neutral");
        }
      })
      .catch((e) => {
        console.error("Request error -> ", e);
        recognition.abort();
      });
  };

  recognition.onerror = function (event) {
    console.error("Recognition error -> ", event.error);
    setEmoji("error");
  };

  recognition.onaudiostart = function () {
    setEmoji("listening");
  };

  recognition.onend = function () {
    setEmoji("idle");
  };

  recognition.start();

  function setEmoji(type) {
    const emojiElem = document.querySelector(".emoji img");
    emojiElem.classList = type;
  }
}
