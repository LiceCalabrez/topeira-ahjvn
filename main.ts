controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(ahjvn)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(ahjvn)
    music.pewPew.play()
    animation.runImageAnimation(
    ahjvn,
    [img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . 5 e e e e e e e e e e e e 5 . 
        . e e e e e e e e e e e e e e . 
        e e e e e e f e e f e e e e e e 
        e e e e e e f e e f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f e e e e e e f e e e e 
        e e e e e f 3 3 3 3 f e e e e e 
        e e e e e e f 3 3 f e e e e e e 
        e e e e e f e e e e f e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e f e e e e e e e e f e e e 
        e e e e f f f f f f f f e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `,img`
        . . . . . 5 . . . . . . . . . 5 
        5 . . . . . 5 . . . . . . . 5 . 
        5 . . . . . . 5 . . . . . . . 5 
        . 5 . . . . . 5 5 . . . . 5 5 . 
        5 . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e f e e f e e e e e e 
        e e e e e e f e e f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f e e e e e e f e e e e 
        e e e e e f 3 3 3 3 f e e e e e 
        e e e e e e f 3 3 f e e e e e e 
        e e e e e f e e e e f e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e f e e e e e e e e f e e e 
        `,img`
        . . . . . . 5 . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        5 . . . . . . . 5 . . . . . . . 
        . 5 . . . . . . 5 . . . . . . 5 
        . 5 . . . . . 5 . . . . . . 5 . 
        . . 5 . . . . 5 . . . . . . . 5 
        . 5 . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e f e e f e e e e e e 
        e e e e e e f e e f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f e e e e e e f e e e e 
        e e e e e f 3 3 3 3 f e e e e e 
        e e e e e e f 3 3 f e e e e e e 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e f e e f e e e e e e 
        e e e e e e f e e f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f e e e e e e f e e e e 
        e e e e e f 3 3 3 3 f e e e e e 
        e e e e e e f 3 3 f e e e e e e 
        e e e e e f e e e e f e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e f e e e e e e e e f e e e 
        e e e e f f f f f f f f e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `],
    50,
    true
    )
})
let ahjvn: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
ahjvn = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e e e e . . 
    . e e e e e e e e e e e e e e . 
    e e e e e e f e e f e e e e e e 
    e e e e e e f e e f e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f e e e e e e f e e e e 
    e e e e e f 3 3 3 3 f e e e e e 
    e 3 3 e e e f 3 3 f e e 3 3 e e 
    e e e e e f e e e e f e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e f e e e e e e e e f e e e 
    e e e e f f f f f f f f e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Enemy)
let dgytdji = sprites.create(img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444444444444d44be..........
    .2b444444444444444d4be..........
    .2b44444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bb4b4444444444444444bbe........
    2bb4444444444444444444be........
    2bb44444444444444444444e........
    2bbb444bbb4444444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(dgytdji, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
carnival.addLabelTo("Alimente a ahjvn(Topeira)", carnival.Areas.Bottom, 3)
game.showLongText("mova-me", DialogLayout.Center)
game.onUpdateInterval(1000, function () {
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
