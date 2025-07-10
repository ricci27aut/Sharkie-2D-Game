let world;
let canvas;
let keyBindings = new KeyBindings();

function init() {
    canvas = document.getElementById("gameCanvas");
    world = new World(canvas, keyBindings);

    console.log('My Character', world.character);
}

window.addEventListener('keydown', (event) => { 
    switch (event.keyCode){
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
    }
});

window.addEventListener('keyup', (event) => { 
    switch (event.keyCode){
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
    }
});