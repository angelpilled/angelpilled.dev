function fade() {
    var content = document.querySelector('.content');
    content.style.opacity = '0';
    setTimeout(function() {
        content.style.display = 'none';
    }, 200)
}

function yes() {
    playMusic();
    fade()
    setTimeout(function() {
        content.style.display = 'none';
    }, 500);
    displayImage();
    
    setTimeout(function() {
        displayText()
    }, 0)
}

function displayImage() {
    document.querySelector("#ip-img").className = "applyOpacityAnimation";
}

function displayText() {
    document.getElementById('wrapper').style.visibility = 'visible';
    document.getElementById('wrapper').style.opacity = 1;
}

function playVoiceline() {
    var scout = document.getElementById("voiceline");
    scout.play();
    scout.volume = 0.1;
}

function playSoundEffect() {
    var flash = document.getElementById("soundeffect")
    flash.play();
    flash.volume = 0.01;
    
}

function playMusic() {
    var music = document.getElementById("music")
    music.play();
    music.volume = 0.03;
}

function no() {
    fade()
    setTimeout(function() {
        content.style.display = 'none';
    }, 500);
    setTimeout(function() {
        document.getElementById('scout-img').style.opacity = '1';
    }, 300)
    
    setTimeout(function() {
        playVoiceline()
    }, 500 )
    
    setTimeout(function() {
        playSoundEffect()
    }, 1700)

    setTimeout(function() {
        document.querySelector("#main").style.backgroundColor = 'white';
    }, 2000);

    setTimeout(function() {
        document.location.href = "https://angelpilled.dev";
    }, 6000);

}