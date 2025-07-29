let world;
let canvas;
let keyBindings = new KeyBindings();
let controlsActive = true;

function init() {
    removeOverlay()
    startGame()
    initLevel()
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyBindings);
    
}

function startGame() {
    document.getElementById('gameCanvas').classList.toggle('dnone');
    chanceButten();
}

function disableControls(t) {
    controlsActive = false;

    setTimeout(() => controlsActive = true, t);
}

window.addEventListener('keydown', (event) => {
    if (!controlsActive) {
        return
    }
    switch (event.keyCode) {
        case 37:
            keyBindings.LEFT = true;
            break;
        case 39:
            keyBindings.RIGHT = true;
            break;
        case 32:
            keyBindings.SPACE = true;
            break;
        case 38:
            keyBindings.UP = true;
            break;
        case 40:
            keyBindings.DOWN = true;
            break;
        case 68:
            keyBindings.Attack = true;
            break;
        case 70:
            keyBindings.AttackTail = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37:
            keyBindings.LEFT = false;
            break;
        case 39:
            keyBindings.RIGHT = false;
            break;
        case 32:
            keyBindings.SPACE = false;
            break;
        case 38:
            keyBindings.UP = false;
            break;
        case 40:
            keyBindings.DOWN = false;
            break;
        case 68:
            keyBindings.Attack = false;
            break;
        case 70:
            keyBindings.AttackTail = false;
            break;
    }
});

function getOverlay(i) {
    overlayRef = document.getElementById('overlay');
    if (!overlay.classList.contains('dnone')) {
        removeOverlay()
        return
    }
    overlayRef.innerHTML = "" 
    content = withContent(i);
    overlayRef.innerHTML = content;
    overlayRef.classList.toggle('dnone');
}

function withContent(i) {
    if (i === 1) {
        return settings();
    }
    if (i === 2) {
        return guide();
    }
}

function removeOverlay() {
    const overlay = document.getElementById('overlay');
    if (!overlay.classList.contains('dnone')) {
        overlay.innerHTML = "";
        overlay.classList.add('dnone');
    }
}

function chanceButten() {
    document.getElementById('reloadButton').classList.remove('dnone')
    document.getElementById('startButton').classList.add('dnone')
}

function reload() {
    window.location.reload();
}

document.querySelector('.icon-style-Feedback').addEventListener('click', function(event) {
    event.stopPropagation(); // verhindert removeOverlay()
    getOverlay(3);
});

