let level1;

function initLevel() {

    level1 = new Level(
        [
            new PufferFisch(),
            new PufferFisch(),
            new PufferFisch(),
            new PufferFisch(),
        ],
        [
            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png', -720),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', -720),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', -720),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', -720),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D2.png', 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 0),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png', 720),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 720),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 720),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', 720 * 2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 2),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D2.png', 720 * 2),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 720 * 2),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png', 720 * 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 3),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 720 * 3),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 720 * 3),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D2.png', 720 * 4),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 4),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D2.png', 720 * 4),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 720 * 4),

            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png', 720 * 5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 5),
            new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 720 * 5),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 720 * 5),
        ]
    );
}
