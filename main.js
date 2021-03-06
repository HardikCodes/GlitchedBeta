const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const body = document.querySelector('body')
const clickAudio = document.getElementById('click-sound')
const firstMessageFromRealWorld = document.getElementById('first message')
const secondMessage = document.getElementById('second-meassage')
const thirdMessage = document.getElementById('third-message')
const fourthMessage = document.getElementById('4th-message')
const fifthMessage = document.getElementById('5th-message')
const sixthMessage = document.getElementById('6th-message')
const seventhMessage = document.getElementById('7th-message')



let playAudio = confirm('Would you like to play with sound effects')
let invinceibleMode = false
let points = 0
let time = 0
let storyMode = confirm('would you like to play with storyline or play endless mode? Click ok to play with storyline.')
let powerUpMode = false
let shieldPwrUp = false
let tripleShootPwrUp = false
let shockwavePWRUp = false
let animationId
let bossLevel = false
let spawnMonstersID
let numberOfMonstersSpawnedInBossMode = 0
let playerX = innerWidth / 2
let playerY = innerHeight / 2

function randomNum(min, max){
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

class Boss {
    constructor(x,y,sideLenght,color){
        this.x = x 
        this.y =y
        this.sideLenght = sideLenght
        this.color = color 
    }

    draw(){
        c.beginPath()
        c.rect(this.x,this.y,this.sideLenght,this.sideLenght)
        c.fillStyle = this.color
        c.fill()
    }
}

class GlitchDrift{
    constructor(x,y,sideLenght,color){
        this.x = x 
        this.y =y
        this.sideLenght = sideLenght
        this.color = color 
    }

    draw(){
        c.beginPath()
        c.rect(this.x,this.y,this.sideLenght,this.sideLenght)
        c.fillStyle = this.color
        c.fill()
    }
}

class Turret {
    constructor(x,y,radius,color){
        this.x = x 
        this.y =y
        this.radius = radius
        this.color = color 
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Player {
    constructor(x,y,radius,color){
        this.x = x 
        this.y =y
        this.radius = radius
        this.color = color 
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Bullet {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y 
        this.radius = radius 
        this.color = color 
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update (){
        this.draw()
        this.x+=this.velocity.x 
        this.y+=this.velocity.y
    }
}

class Monster {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y 
        this.radius = radius 
        this.color = color 
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update (){
        this.draw()
        this.x+=this.velocity.x 
        this.y+=this.velocity.y
    }
}

class Particle {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y 
        this.radius = radius 
        this.color = color 
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update (){
        this.draw()
        this.x+=this.velocity.x 
        this.y+=this.velocity.y
    }
}



const player = new Player(playerX,playerY,10,'white')
const playerPowerUp = new Player(player.x,player.y,10,'blue')
const tripleShooterPlayer = new Player(player.x,player.y,10,'green')
const sheildPlayer = new Player(player.x,player.y,10,'rgb(0, 255, 255)')
const invinciblePlayer = new Player(player.x,player.y,10,'#FFD700')
const shockwavePWRUpPlayer = new Player(player.x,player.y,10,'rgb(232, 172, 172)')
const boss = new Boss(canvas.width-300,canvas.height/2-150,300,'rgb(24,0,36)')


const bullets = []
const specialBullets = []
const monsters = []
