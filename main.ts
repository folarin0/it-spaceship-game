namespace SpriteKind {
    export const laser = SpriteKind.create()
    export const asteroid = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.laser, SpriteKind.asteroid, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(projectile)
    sprites.destroy(projectile2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Spaceship, 0, -100)
    projectile.setKind(SpriteKind.laser)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Spaceship: Sprite = null
Spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Spaceship, 50, 50)
Spaceship.y += 40
Spaceship.setPosition(84, 113)
info.setLife(5)
info.setScore(0)
forever(function () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 f f f f f 8 8 . . . . 
        . . . f f f 8 8 8 f f 8 . . . . 
        . . . 8 8 8 8 a a a f f . . . . 
        . . . 8 a a a a 8 8 8 f . . . . 
        . . . 8 f 8 8 8 8 8 f f . . . . 
        . . . 8 f 8 f f f 8 f 8 . . . . 
        . . . 8 8 f f 8 8 f f 8 . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -50, 50)
    projectile2.setKind(SpriteKind.asteroid)
    pause(2000)
})
