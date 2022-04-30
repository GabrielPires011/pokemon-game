const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }
    draw() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -735,
        y: -600
    },
    image: image
})

const Keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    context.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 4 / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )

    if (Keys.w.pressed && lastKey === 'w') background.position.y += 3
    else if (Keys.a.pressed && lastKey === 'a') background.position.x += 3
    else if (Keys.s.pressed && lastKey === 's') background.position.y -= 3
    else if (Keys.d.pressed && lastKey === 'd') background.position.x -= 3
}

animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            Keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            Keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            Keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            Keys.d.pressed = true
            lastKey = 'd'
            break
    }
    console.log(Keys)
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            Keys.w.pressed = false
            break
        case 'a':
            Keys.a.pressed = false
            break
        case 's':
            Keys.s.pressed = false
            break
        case 'd':
            Keys.d.pressed = false
            break
    }
    console.log(Keys)
})