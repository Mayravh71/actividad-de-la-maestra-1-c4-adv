player.onTravelled(WALK, function () {
    if (score < 20) {
        mobs.spawn(PIG, randpos(
        pos(-10, 0, -10),
        pos(10, 0, 10)
        ))
    } else {
        player.say("Ganaste")
    }
})
player.onTravelled(FLY, function () {
    for (let index = 0; index < 2; index++) {
        mobs.spawn(PARROT, randpos(
        pos(-5, 0, -5),
        pos(5, 0, 5)
        ))
    }
})
let score = 0
score = 0
