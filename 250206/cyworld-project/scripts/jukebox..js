const songs = document.querySelectorAll(".albumTable-song");

let currentAudio = null;

songs.forEach((song) => {
  const play = song.querySelector(".fa-caret-right");
  const stop = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    // console.log(e.target.closest("td").querySelector("audio"));
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    audio.play();
    currentAudio = audio;
  });

  stop.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    audio.pause();

    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
