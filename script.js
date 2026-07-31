const openBtn = document.getElementById("openBtn");
const splash = document.getElementById("splash-screen");
const website = document.getElementById("website");

openBtn.addEventListener("click", function () {

    // أنيميشن الزر
    openBtn.classList.add("open-animation");

    // إخفاء شاشة البداية
    setTimeout(() => {
        splash.classList.add("fade-out");
    }, 500);

    // إظهار الموقع
    setTimeout(() => {
        splash.style.display = "none";
        website.style.display = "block";

        // تفعيل النزول في الصفحة
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";

        // بداية الصفحة
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

});

/* ===========================
   ❤️ عداد الذكريات ❤️
=========================== */

const startDate = new Date("2025-10-06T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveCounter();

setInterval(updateLoveCounter, 1000);


const images = document.querySelectorAll(".photo-stack img");

images.forEach(img => {

    img.addEventListener("click", () => {

        if(img.classList.contains("zoom")){

            img.classList.remove("zoom");

        }else{

            images.forEach(i => i.classList.remove("zoom"));

            img.classList.add("zoom");

        }

    });

});



const galleryImages = document.querySelectorAll(".cards-gallery img");

const viewer = document.getElementById("imageViewer");

const bigImage = document.getElementById("bigImage");

const closeImage = document.getElementById("closeImage");

galleryImages.forEach(img=>{

    img.onclick=function(){

        viewer.style.display="flex";

        bigImage.src=this.src;

    }

});

closeImage.onclick=function(){

    viewer.style.display="none";

}

viewer.onclick=function(e){

    if(e.target===viewer){

        viewer.style.display="none";

    }

}




/* ===========================
   Playlist الموسيقى
=========================== */

const bgMusic = document.getElementById("bgMusic");

const playlist = [

    "audio/music1.mp3",

    "audio/music2.mp3",

    "audio/music3.mp3"

];

let currentMusic = 0;

/* تشغيل أول أغنية */

function playMusic(){

    bgMusic.src = playlist[currentMusic];

    bgMusic.play();

}

/* بعد الضغط على OPEN */

openBtn.addEventListener("click",function(){

    setTimeout(function(){

        playMusic();

    },1500);

});

/* عند انتهاء الأغنية */

bgMusic.addEventListener("ended",function(){

    currentMusic++;

    if(currentMusic >= playlist.length){

        currentMusic = 0;

    }

    playMusic();

});

/* الفيديوهات */

const allVideos = document.querySelectorAll("video");

allVideos.forEach(function(video){

    video.addEventListener("play",function(){

        bgMusic.pause();

    });

    
 video.addEventListener("pause", function(){

    // شغل الموسيقى فقط لو مفيش أي فيديو شغال
    const playingVideo = Array.from(allVideos).some(v => !v.paused);

    if(!playingVideo){

        bgMusic.play();

    }

});

video.addEventListener("ended", function(){

    const playingVideo = Array.from(allVideos).some(v => !v.paused);

    if(!playingVideo){

        bgMusic.play();

    }

});

});



/* تشغيل فيديو واحد فقط */

const videos = document.querySelectorAll("video");

videos.forEach(function(video){

    video.addEventListener("play", function(){

        videos.forEach(function(otherVideo){

            if(otherVideo !== video){

                otherVideo.pause();

            }

        });

    });

});





const topBtn=document.getElementById("scrollTopBtn");

const bottomBtn=document.getElementById("scrollBottomBtn");

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

bottomBtn.onclick=function(){

    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });

}



/* ===========================
   الرسالة الصوتية
=========================== */

const playVoice = document.getElementById("playVoice");

const voiceMessage = document.getElementById("voiceMessage");

let voicePlaying = false;

playVoice.onclick = function(){

    if(voicePlaying){

        // إيقاف الصوت فقط
        voiceMessage.pause();

        bgMusic.play();

        voicePlaying = false;

    }else{

        // تشغيل من نفس المكان اللي وقف عنده
        bgMusic.pause();

        voiceMessage.play();

        voicePlaying = true;

    }

}

voiceMessage.onended = function(){

    bgMusic.play();

    voicePlaying = false;

}