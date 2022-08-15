const config = {

    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: {

        preload,
        create,
        update

    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 400},
            debug: true
        }
    },
    pixelArt: true

}


function preload(){

    this.load.image("sky", "assets/sky.png");
    this.load.image("bird", "assets/bird.png");

}

const VELOCITY = 200;

let bird = null;

let flapVelocity = 150;

function create(){
    
    this.add.image(0, 0, "sky").setOrigin(0); //setOrigin format the origin from the middle of canvas to start of canvas


    bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "bird");

    //if bird position x is same or larger than width of canvas go back to the left
    //if bird position x is smaller or equal to 0 then move back to the right

    bird.setCollideWorldBounds();

    this.input.on("pointerdown", flap);
    this.input.keyboard.on("keydown-SPACE", flap);

    cursors = this.input.keyboard.createCursorKeys();
}

function update(){

    if(bird.y < 0 || bird.y > config.height){

        

    }

}

function flap(){

    bird.body.velocity.y = -flapVelocity

}


const game = new Phaser.Game(config);

