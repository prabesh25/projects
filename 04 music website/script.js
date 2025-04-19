

















let rotateOne = document.querySelector(".rotate-one");
let rotateTwo = document.querySelector(".rotate-two");
let rotateThree = document.querySelector(".rotate-three");
let rotateFour = document.querySelector(".rotate-four");
let rotateFive = document.querySelector(".rotate-five");
let rotateSix = document.querySelector(".rotate-six");
let rotateSeven = document.querySelector(".rotate-seven");

let ppOne = document.querySelector(".ppone");
let ppTwo = document.querySelector(".pptwo");
let ppThree = document.querySelector(".ppthree");
let ppFour = document.querySelector(".ppfour");
let ppFive = document.querySelector(".ppfive");
let ppSix = document.querySelector(".ppsix");
let ppSeven = document.querySelector(".ppseven");






let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.querySelector("#gif");
let masterSongName = document.querySelector(".mastersongname");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "I'm alive", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Heart a fire", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hey good Lookin", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "One direction", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "One step forward", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Unity", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Rihanna we found", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
];

// Update song list UI
songItems.forEach((song, i) => {
    song.getElementsByTagName("img")[0].src = songs[i].coverPath;
    song.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// Play/pause main button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = "1";


    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = "0";
    }
});

// Update progress bar
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek audio
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});


// Reset all play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
};

// Play individual song
// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
//     element.addEventListener("click", (e) => {
//         // makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         audioElement.src = songs[songIndex].filePath;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = "1";
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//     });
// });



ppOne.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppOne.classList.contains("fa-circle-play")) {
        ppOne.classList.remove("fa-circle-play")
        ppOne.classList.add("fa-circle-pause")

        songIndex = 0;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateOne.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";

        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        audioElement.pause();
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
        gif.style.opacity = "0";

        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppTwo.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppTwo.classList.contains("fa-circle-play")) {
        ppTwo.classList.remove("fa-circle-play")
        ppTwo.classList.add("fa-circle-pause")

        songIndex = 1;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateTwo.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppThree.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppThree.classList.contains("fa-circle-play")) {
        ppThree.classList.remove("fa-circle-play")
        ppThree.classList.add("fa-circle-pause")

        songIndex = 2;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateThree.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppThree.classList.remove("fa-circle-pause")
        ppThree.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateThree.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppFour.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppFour.classList.contains("fa-circle-play")) {
        ppFour.classList.remove("fa-circle-play")
        ppFour.classList.add("fa-circle-pause")

        songIndex = 3;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateFour.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppFour.classList.remove("fa-circle-pause")
        ppFour.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateFour.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause")
        ppThree.classList.add("fa-circle-play")
        rotateThree.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppFive.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppFive.classList.contains("fa-circle-play")) {
        ppFive.classList.remove("fa-circle-play")
        ppFive.classList.add("fa-circle-pause")

        songIndex = 4;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateFive.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppFive.classList.remove("fa-circle-pause")
        ppFive.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateFive.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause")
        ppThree.classList.add("fa-circle-play")
        rotateThree.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppFour.classList.contains("fa-circle-pause")) {
        ppFour.classList.remove("fa-circle-pause")
        ppFour.classList.add("fa-circle-play")
        rotateFour.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppSix.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppSix.classList.contains("fa-circle-play")) {
        ppSix.classList.remove("fa-circle-play")
        ppSix.classList.add("fa-circle-pause")

        songIndex = 5;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateSix.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppSix.classList.remove("fa-circle-pause")
        ppSix.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateSix.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause")
        ppThree.classList.add("fa-circle-play")
        rotateThree.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppFour.classList.contains("fa-circle-pause")) {
        ppFour.classList.remove("fa-circle-pause")
        ppFour.classList.add("fa-circle-play")
        rotateFour.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppFive.classList.contains("fa-circle-pause")) {
        ppFive.classList.remove("fa-circle-pause")
        ppFive.classList.add("fa-circle-play")
        rotateFive.style.animation = "rotate0 3.5s linear infinite";
    }
    // Add more logic for other buttons here...
})

ppSeven.addEventListener("click", () => {
    console.log("heeelllll0000")
    if (ppSeven.classList.contains("fa-circle-play")) {
        ppSeven.classList.remove("fa-circle-play")
        ppSeven.classList.add("fa-circle-pause")

        songIndex = 6;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        rotateSeven.style.animation = "rotate360 3.5s linear infinite";
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        ppSeven.classList.remove("fa-circle-pause")
        ppSeven.classList.add("fa-circle-play")
        audioElement.pause();
        gif.style.opacity = "0";
        rotateSeven.style.animation = "rotate0 3.5s linear infinite";
        
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
    if (ppOne.classList.contains("fa-circle-pause")) {
        ppOne.classList.remove("fa-circle-pause")
        ppOne.classList.add("fa-circle-play")
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppTwo.classList.contains("fa-circle-pause")) {
        ppTwo.classList.remove("fa-circle-pause")
        ppTwo.classList.add("fa-circle-play")
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause")
        ppThree.classList.add("fa-circle-play")
        rotateThree.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppFour.classList.contains("fa-circle-pause")) {
        ppFour.classList.remove("fa-circle-pause")
        ppFour.classList.add("fa-circle-play")
        rotateFour.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppFive.classList.contains("fa-circle-pause")) {
        ppFive.classList.remove("fa-circle-pause")
        ppFive.classList.add("fa-circle-play")
        rotateFive.style.animation = "rotate0 3.5s linear infinite";
    }
    if (ppSix.classList.contains("fa-circle-pause")) {
        ppSix.classList.remove("fa-circle-pause")
        ppSix.classList.add("fa-circle-play")
        rotateSix.style.animation = "rotate0 3.5s linear infinite";
    }
})





// Next song
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    if (songIndex == 0) {
        rotateOne.style.animation = "rotate360 3.5s linear infinite";
        if (ppOne.classList.contains("fa-circle-play")) {
            ppOne.classList.remove("fa-circle-play")
            ppOne.classList.add("fa-circle-pause")
        }    
    } else {
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
        if (ppOne.classList.contains("fa-circle-pause")) {
            ppOne.classList.remove("fa-circle-pause")
            ppOne.classList.add("fa-circle-play")
        }    
    }
    
    if (songIndex == 1) {
        rotateTwo.style.animation = "rotate360 3.5s linear infinite";
        if (ppTwo.classList.contains("fa-circle-play")) {
            ppTwo.classList.remove("fa-circle-play")
            ppTwo.classList.add("fa-circle-pause")
        }    
    } else {
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
        if (ppTwo.classList.contains("fa-circle-pause")) {
            ppTwo.classList.remove("fa-circle-pause")
            ppTwo.classList.add("fa-circle-play")
        }    
    }
    
if (songIndex == 2) {
    rotateThree.style.animation = "rotate360 3.5s linear infinite";
    if (ppThree.classList.contains("fa-circle-play")) {
        ppThree.classList.remove("fa-circle-play");
        ppThree.classList.add("fa-circle-pause");
    }
} else {
    rotateThree.style.animation = "rotate0 3.5s linear infinite";
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause");
        ppThree.classList.add("fa-circle-play");
    }
}

if (songIndex == 3) {
    rotateFour.style.animation = "rotate360 3.5s linear infinite";
    if (ppFour.classList.contains("fa-circle-play")) {
        ppFour.classList.remove("fa-circle-play");
        ppFour.classList.add("fa-circle-pause");
    }
} else {
    rotateFour.style.animation = "rotate0 3.5s linear infinite";
    if (ppFour.classList.contains("fa-circle-pause")) {
        ppFour.classList.remove("fa-circle-pause");
        ppFour.classList.add("fa-circle-play");
    }
}

if (songIndex == 4) {
    rotateFive.style.animation = "rotate360 3.5s linear infinite";
    if (ppFive.classList.contains("fa-circle-play")) {
        ppFive.classList.remove("fa-circle-play");
        ppFive.classList.add("fa-circle-pause");
    }
} else {
    rotateFive.style.animation = "rotate0 3.5s linear infinite";
    if (ppFive.classList.contains("fa-circle-pause")) {
        ppFive.classList.remove("fa-circle-pause");
        ppFive.classList.add("fa-circle-play");
    }
}

if (songIndex == 5) {
    rotateSix.style.animation = "rotate360 3.5s linear infinite";
    if (ppSix.classList.contains("fa-circle-play")) {
        ppSix.classList.remove("fa-circle-play");
        ppSix.classList.add("fa-circle-pause");
    }
} else {
    rotateSix.style.animation = "rotate0 3.5s linear infinite";
    if (ppSix.classList.contains("fa-circle-pause")) {
        ppSix.classList.remove("fa-circle-pause");
        ppSix.classList.add("fa-circle-play");
    }
}

if (songIndex == 6) {
    rotateSeven.style.animation = "rotate360 3.5s linear infinite";
    if (ppSeven.classList.contains("fa-circle-play")) {
        ppSeven.classList.remove("fa-circle-play");
        ppSeven.classList.add("fa-circle-pause");
    }
} else {
    rotateSeven.style.animation = "rotate0 3.5s linear infinite";
    if (ppSeven.classList.contains("fa-circle-pause")) {
        ppSeven.classList.remove("fa-circle-pause");
        ppSeven.classList.add("fa-circle-play");
    }
}
});

// Previous song
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    
    if (songIndex == 0) {
        rotateOne.style.animation = "rotate360 3.5s linear infinite";
        if (ppOne.classList.contains("fa-circle-play")) {
            ppOne.classList.remove("fa-circle-play")
            ppOne.classList.add("fa-circle-pause")
        }    
    } else {
        rotateOne.style.animation = "rotate0 3.5s linear infinite";
        if (ppOne.classList.contains("fa-circle-pause")) {
            ppOne.classList.remove("fa-circle-pause")
            ppOne.classList.add("fa-circle-play")
        }    
    }
    
    if (songIndex == 1) {
        rotateTwo.style.animation = "rotate360 3.5s linear infinite";
        if (ppTwo.classList.contains("fa-circle-play")) {
            ppTwo.classList.remove("fa-circle-play")
            ppTwo.classList.add("fa-circle-pause")
        }    
    } else {
        rotateTwo.style.animation = "rotate0 3.5s linear infinite";
        if (ppTwo.classList.contains("fa-circle-pause")) {
            ppTwo.classList.remove("fa-circle-pause")
            ppTwo.classList.add("fa-circle-play")
        }    
    }
    
if (songIndex == 2) {
    rotateThree.style.animation = "rotate360 3.5s linear infinite";
    if (ppThree.classList.contains("fa-circle-play")) {
        ppThree.classList.remove("fa-circle-play");
        ppThree.classList.add("fa-circle-pause");
    }
} else {
    rotateThree.style.animation = "rotate0 3.5s linear infinite";
    if (ppThree.classList.contains("fa-circle-pause")) {
        ppThree.classList.remove("fa-circle-pause");
        ppThree.classList.add("fa-circle-play");
    }
}

if (songIndex == 3) {
    rotateFour.style.animation = "rotate360 3.5s linear infinite";
    if (ppFour.classList.contains("fa-circle-play")) {
        ppFour.classList.remove("fa-circle-play");
        ppFour.classList.add("fa-circle-pause");
    }
} else {
    rotateFour.style.animation = "rotate0 3.5s linear infinite";
    if (ppFour.classList.contains("fa-circle-pause")) {
        ppFour.classList.remove("fa-circle-pause");
        ppFour.classList.add("fa-circle-play");
    }
}

if (songIndex == 4) {
    rotateFive.style.animation = "rotate360 3.5s linear infinite";
    if (ppFive.classList.contains("fa-circle-play")) {
        ppFive.classList.remove("fa-circle-play");
        ppFive.classList.add("fa-circle-pause");
    }
} else {
    rotateFive.style.animation = "rotate0 3.5s linear infinite";
    if (ppFive.classList.contains("fa-circle-pause")) {
        ppFive.classList.remove("fa-circle-pause");
        ppFive.classList.add("fa-circle-play");
    }
}

if (songIndex == 5) {
    rotateSix.style.animation = "rotate360 3.5s linear infinite";
    if (ppSix.classList.contains("fa-circle-play")) {
        ppSix.classList.remove("fa-circle-play");
        ppSix.classList.add("fa-circle-pause");
    }
} else {
    rotateSix.style.animation = "rotate0 3.5s linear infinite";
    if (ppSix.classList.contains("fa-circle-pause")) {
        ppSix.classList.remove("fa-circle-pause");
        ppSix.classList.add("fa-circle-play");
    }
}

if (songIndex == 6) {
    rotateSeven.style.animation = "rotate360 3.5s linear infinite";
    if (ppSeven.classList.contains("fa-circle-play")) {
        ppSeven.classList.remove("fa-circle-play");
        ppSeven.classList.add("fa-circle-pause");
    }
} else {
    rotateSeven.style.animation = "rotate0 3.5s linear infinite";
    if (ppSeven.classList.contains("fa-circle-pause")) {
        ppSeven.classList.remove("fa-circle-pause");
        ppSeven.classList.add("fa-circle-play");
    }
}
});
