controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage`, canon, 0, -100)
    projectile.startEffect(effects.fire, 5000)
})
function Meteors () {
    projectile2 = sprites.createProjectileFromSide(list[randint(0, 3)], 0, 250)
    projectile2.setPosition(randint(5, 140), 0)
    projectile2.setKind(SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    pause(500)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let list: Image[] = []
let canon: Sprite = null
let timer = 0
info.setLife(3)
info.setScore(0)
scene.setBackgroundImage(img`
    cccccccccdbbbbbcbbbbbbbbcccccccaaaaaaaaaaaaaaaccaccccccccccccccccccbbbbbbbbbbbccccccccccccccccccccccccccccccccaaaaaabbbbbbbbcccaaaaaaccccccccccccccccccccccccccc
    cccccccccdbbbbccbbbbbbbcccccccaaaaaaaaaaaaaaacaccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccccaaaaabbbbbbbbbcccaaaaacccccccccccccccccccccccccccc
    cccccccccdbbbbbcbbbbbbbcccccccccaaaaaaaaaaaacccccccccaaaaccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccaabbbbbbbbcccaaaacccccccccccccccccccccccccccccc
    cccccccccdbbbbbcbbbbbbccccccccaaaaaaaaaaaaaacccccccaaaaacccccccccccbbbbbccccccccccccccccccbcccccccccccccccccccaaaabbbbbbbbcccaaaaccbbbbbbccccccccccddcccccccccaa
    cccccccccbbbbccbbbbbbbcccccabccbbbaaaaaaaaaccccccaaaaccccccaacccccbabbbccccccccccccccccbbbbaccccccccccccccccccaaabbbbbbbbcccaaaccbbbbbbbccccccccadddccccccccaaaa
    ccccccccbbbbbccbbbbccccccccbcbbbbaaaaaaaacccccccaaaacacccaaccccccbbbbbccccccccccccccccbbbbcccccccccccccccccccaaaabbbbbbbd5caaaabbbbbbccccccccccccccccccccccaaaaa
    ccccccccbbbbccbbbbccccccccabcbbbaaaaaaaaccccccaaaaacccaaaccccccccbabbbcccccccccccccccbbbbccccccccccccccccccaaaaabbbbbdbbccaaaabcccccccccccccccccccccccccccaaaaaa
    cccccccbbbcccbbbccccccccaaccbbbaaaaaaacccccccaaaaccccccccccccccccbbbbcccccccccccccccbbbbccccccccccccccccccaaaaabbbbbbbbccaaabbbcaaaaaaaaacccccccccccccccaaaaaaab
    ccccccabbcccbbbbccccccacacbbbbaaaaaaacccccccaaacccccccccccccccccbbbbcccccccccccccccbbbbccccccccccccccccccaaaaaabbbbbbbccaaabaaaabbbbaaaaacccccccccccccccaaaaaabd
    ccccccbbcccbbbcccccccccacbbbbaaaaaaccccccccaccccaaccccaaccccccccbabcccccccccccccccbbbaccccccccccccccccccaaaaaabbbbbbbcaaaaaabbbbccccbbbbccccccccccccccaaaaaaadbb
    cccccabccbbbbcccccccccaacbbbaaacccccccccccacccacccccacccccaccccbbbbccccccccccccccbbbbcccccccccccccccccccaaaacbbbbbbbbaaaaabbbcccbbbbbccccccccccccccccaaaaaaabbba
    cccccccbbbbccccccacccabcbbaaaacccccccccccaccccccccaaccccaacccccbbbccccccccccccccbbbbccccccccccccccccccccaaacbbbbbbbbaaaaabbcccbbbbccccccccccccacccccaaaaaaabbaab
    ccccbccbbbccccccaccccbcbbaaaacccccccccccccccaccaaaccccaaaaccccbbcccccccccccccccabbbcccccccccccccccccccccaaacbbbbbbbaaaaabbccbbbccbbccccccccccccccccaaaaaaabbaaaa
    cccccbbccccccccacccabcbbaaaaccccccccccccacaccaaaccccaaaaacccccbccccccccccccccccbbbcccccccccccccccccc9ccaaacbbbbbbbbaaaaabccbbbcbbbacccccccccccccccaaaaaaabaaaaaa
    ccccbbcccccccaccaccccbbaaaaccccccccccccaccccaaccccaaaaaacccccbccccccccccccccccbbbcccccccccccccccccccc9aaacbbbbbbbbaaaaabccbbcbbbbccccccccccccccccaaaaaaabaaaaaaa
    cccbbcccccccaccacacbbbbaaaccccccccccccccccaaccaccaaaaacccccccccccccccccccccccbbbccccccccccccccccccccc9aaacbbbbbbbbaaaabbcbbcbbbbccbbcccccccccccccaaaaabbaaaaaaaa
    ccbbccccccaaccccacbbbaaaaccccccccccccccccaacaaccaaaaacccccccccccccccccccccccabbccccccccccccccccccccaaaaaccbbbbbbbaaaabbcbdcbbbbcbbbcccccccccccccbaaaaabaaaaaaaaa
    ccbcccccaacccacccbbbaaaacccccccccccccacaaccaaccaaaacccccccccccccccccccccccccbbccccccccccccccccccccaaaaaccbbbbbbbaaaaabbbbcbbbaabbbccccccccccccccaaaabbaccccaaaaa
    cbcccccaaccca5ccbbbaaaacc5cccccccaccccccc5aaccaaaacccccccccbbbcccccccccccccbbbcccccccc5ccccccccccaaaaacc5bbbbbbbaaaabbbbccbbbcbbbccccccccc5ccccaaaaaaccccccaaaaa
    ccccccaaccccccbbbaaaaaccccccccccccccccaaaaaacaaaccccccccbbbbbbbcccccccccccabbcccccccccccccccccccaaaaaaccbbbbbbbaaaaabcbdcbbbccbbcccccaaccccaccbaaaaacccccccaaaaa
    cccccaccccccabbbaaaaaccccccccccccacccaaaaaacaaaccccccccbbbbbbbbccccccccccaabcacccccccccccccccccaaaaaaccdbbbbbbbaaaaabbdcbbbacbbcccccaaccccaccaaaaaaccccccaaaaaaa
    cccaacccccaabbbaaaaacccccccccccccccaaaaaaaccaa9ccccccbbbbbbcbbbcc5cccccccab9acccccc9ccccccccccaaaaaacccbbbbbbbbaaaabbbdcbbbdbbcccccaaccccccaaaaaaaccccccaaaaaaab
    ccaaccccacbbbbaaaaacccccccccccccccaaaaaaaccaacccccccbbbbbbbcccccccccccccabaacccccccccccccccccaaaaaaccccbbbbbbbbaaaabbbcbbbbbbccccccaacccccaaaaaaaccccccaaaaaaabb
    caaccccacbbbaaaaacccccccccccccccaaaaaaaaccaaaccccccbbbbbbbcccccccccccccbabaccccccccccccccccaaaaaaaccccbbbbbbbbaaaaabbccbbbbbcccccaaaccccccaaaaacccccccaaaaaaaabb
    accaccacbbbaaaaacccccccccccccaaaaaaaaaaacaaaccccccbbbbbbbccccccccccccccbbaaccccccccccccccaaaaaaaacccccbbbbbbbaaaaabbbcbbbbcccccccaacccccabaaaaccccccaaaaaaaaaccc
    ccacaacbbaaaaaccccccccccccccaaaaaaaaaaaccaaccccccbbbbbbbccccccccccccccbbacccccccccccccccaaaaaaaaccccccbbbbbbbaaaaabbbbbbbccccccaaaacccccaaaaacccccaaaaaaaaaacccc
    cccacbbbaaaacccccccccccccccaaaaaaaaaaaccaaccccccbbabbbbccccccccccacccbaaaccccccccccccccaaaaaaaacbbcccbbbbbbaaaaabbbbbabbccccccaaaacccccaaaaaaccccaaaaaaaaaabcccc
    cccbbbaaaacccccccccccccccccaaaaaaaaaaccaaacccccbbbbbbbccccccccccacc5babaccccccccccccccaaaaaaacbbbccccbbbbbaaaaabbbbccbbacccccaaaacccccaaaaaaccccaaaaaaaaaacccccc
    cbbbbaaaaaccccccccccccccccaaaaaaaaaacccaccccccbbbbbbbbcccccccccacccc5bacccccccaccccccaaaaacbbbbccccccbbbbaaaabbbbbccbbacccccaaaacccccaaaaaccccaaaaaaaaaaaccccccc
    bbbaaaaaccccccccccccccccccaaaaaaaaaccaaccccccbbbbbbbbcccccccccaacccbbaccccccccccccccaaaabbbbbbccccccbbbaaaabbbbbbccbbccccccaaaacccccaaaaaccccaaaaaaaaaaacccccccc
    baaaaaaccccccccccccccccccaaaaaaaaacacaacccccbbbbbbbbaccccccccaaccccbbacccccccccccccaaabbbbbbbccccccbbbaaaabbbbbbcabbbcccccaaaaaccccaaaaa9cccaaaaaaaaaaacccccccbc
    aaaaacccccccccccccccccccaaaaaaaaacacaaccccccbbbbbbbcccccccccaaccccbaacccccccacccccaaabbbbccccccccccbd5abbbbbbbbabbbbcccccaaaaaccccaaaaaacccaaaaaaaaaaccccccccbcc
    aaacccccccccccccccccccaaaaaaaaaccacaaccccccbbbbbbccacccccccaaccccbbbccccccccacccccabbbbcccccccccccbbbbbbbbbaccbbbbbcccccaaaaacccaaaaaaaccaaaaaaaaaaaaccccccbcccc
    accccccccccccccccccccaaaaaaaaaccacaaccccccbbbbbbcaacccccccaaccccbabccccccccacccccaabbccccccccccccbbbbbbbbcccabbbbbcccccaaaaccccaaaaaaccaaaaaaaaaaaaccccccccccbbb
    ccccccccccccccccccaaaaaaaaaaaccccaaacccccbbbbbbcbccccccccaaccccbbbacccccccaacccccabbacccccccccccbbbbbbbccabbbbbbccccccaaaaccccaaaaaaccaaaaaaaaaaacccccccccaaaaaa
    ccccccccccccccccaaaaaaaaaaaccacaaaacccccbbbbbbbcccccc9caaacccccbaaccccccccacccccaabaaccccccccbbbbbbbbccccbbbbbbcccccccaaccccaaaaaaacaaaaaaaaaaaacccccaaaaabbbbbb
    ccccccccccccccaaaaaaaaaaaaccccaaaacccccbbbbbbccccccccccaacccccbabccccccccaacccccaabaacccbbbbbbbbbbaccccbbbbbbccccccccacccccaaaaaacaaaaaaaaaaaaccccccabbbbbbbcccc
    cccccccccccccaaaaaaaaaaaccccaaaaccccccbbbbbbccccccccccaacccccbabacccccccaacccccaaaacccccbbbbbbbbcccccbbbabbaccccccccaccccaa5aaaaaaaaaaaaaaaaaccccabbbbbccccccccc
    ccccccccccccaaaaaaaaaaaccaaaaaaccccccbbbbbcccccccccccaacccccabbbacccccccaacccccaaccccccc55bbbbcccbbbbbbbbaccccccccaccccaaaaaaaaaaaaaaaaaaaaacababbbbcccccccccccc
    cccccccccccaaaaaaaaaaaaaaaaaaaccccccbbbbbccccaccccccaaccccccbbbacccccccaacccccaaccccccccbbbcccbbbbbbbbbbccccccccacccccaaaaaaaaaaaaaaaaaaaaccbbbbbccccccccacccccc
    ccccccccccaaaaaaaaaaaaaaaaa9aacccccbbbbccccccccccccaaccccccbabbccccccccaacccccacccccccbbbbccbbbcbbbbbcccccccccaacccccaaaaaaaaaaaaaaaaa9aabbbbbcccccccccccccccccc
    cccccccccaaaaaaaaaaaaaaaaaaaaccccccbcccbccccccccccaaccccccbbbbacccccccaacccccaccccccbbbbbcbcbbbbbbccccccccccaaccccccaaaaaaaaaaaaaaaaaaa9bbbccccccccccccccccccccc
    cccccccccaaaaaaaaaaaaaaaaaacccccccccbbbccccccccccacccccccbbbbbcccccccaaacccccccccccbbbbcccbbbbbbccccccccccaaccccccaaaaaaaaaaaaaaaaaabbbbbbcccccccccccccccccccccc
    ccccccccaaaaaaaaaaaaaaaaacccccccc5cbbcccccccccccaccccccabbbbbccccccccaacccccccccccbbbbcccbbbbbcccccccccaaacccccccaaaaaaaaaaaaaaaabbbbbbbcccbcccccccccccccccccccc
    cccccccaaaaaaaaaaaaaaaccccccccccccacccacccccccaacccccccbbbbbbccccc5caaacccccccccaabbbcbbbbbbbcccccccaaaacccccaaaaaaaaaaaaaaaaaabbbbbcccccccbcccccccccccccccaaaaa
    ccccccaaaaaaaaaaaaaaaacccccccccccccccacccccccaaccccccabbbbbbbccccccaaacccccccccaabbccbbbabbcccccccaaaacccccccaaaaaaaaaaaaaabbbbbbccccccccbbbcccccccccccccaaaaaaa
    ccccccaaaaaaaaaaaaaaccccccccccccccccacccccccaaccccccbbbbbbbbacccccaaccccccccccaaabccbbbbbcccccccaaaaacccccccaaaaaaaaaaaaaabbbbccccccccccbbbccccccccccccaaaaaaaaa
    cccccaaaaaaaaaaaaacccccccccccccaccaccccccccacccccccbbbbbbbbacccccaacccccccccccaabccbbbbbccccccaaaaacccccccaaaaaaaaaaaaaacccccccccccccccbbbccccccccccaaaaaaaaaaaa
    cccccaaaaaaaaaaacccccccccccccaccaacccccccaacccccccbbbbbbbbbccccccccccccccccccaabccbbbccccccccaaaaccccccccaaaaaaaaaaadcccccccccccccccbbbbcccccccccaaaaaaaaaaaaaaa
    ccccaaaaaaaaaaaccccccccccccccccaccccccccaacccccccbbbbbabbacccccccccccccccccccaacbbbcccccccccaaaaaccccccbaaaaaaaaaadcccccccccccbbbbbbbcccccccccaaaaaaaaaaaaaaaaaa
    ccccaaaaaaacccccccccccccccaccaccccccccaaccccccccbbbbbaaaaccccccccccccccccccccccbbbcccccccccbbbbbccccccaaaa9aaaaaacbcccbbbbbbbbbbbbbccccccccaaaaaaaaaaaaaaaaaaaaa
    ccccaaaaaacccccccccccccccacccccccccccaccccccccbbbbbbbaa9cccccccccccccccccccccc5bcccccccccabbbbccccccaaaaaaaaaaacbbccbbbbbbbbbbbbcc5cccccccaaaaaaaaaaaaaaaaaaaaaa
    cccaaaacccccccccccccccc9ccccccccccccccccccccbbbbbbbbaaaccccccccccccccccccccccbaccccccccaabbbccccccaaaaaaaaaabccbbccbbbbbbbbbbbbcccccccccc9aaaaaaaaaaaaaaaaaaaaaa
    ccaaaaccccccccccccccccccccccccccccccccccccbbb5bbbbbaaaccccccccccccbcdcbbcccccccccccccaabbbccccccaaaaaaaaaaabcdbbccdbbbbbbbbbcccccccccccaaaaaaaaaaaaaaaaaaaaaaaaa
    ccaaacccccccccccccacccaccccccccccccccccccbbbbbbbbaaacccccccccccccbbccbbcccccccccccccaabbbccccaaaaaaaaaaaccccdbbccdbbbbbbbccccccccccccaaaaaaaaaaaaaaaaaaaabaaaccc
    caaccccccccccccacccaacccccccccaccccccccbbbbbbbbaaaaccccccccccccccbbcbbcccccccccccccabbbbcccaaaaaaaaaaaacccccbbccbbbbbbbcccccccccccccaaaaaaaaaabcbccaaabbbbaacccc
    ccccccccccccccc5aaacccccccccaccccccccbbbbbbbbaaaaacccccccccccccccbcbbbccccccccccccbbbbbccaaaaaaaaaaaaacccdbbcbbbbbbbbcccccccccccccccaaaaaaaaabbbbaaabbbbbbcccccc
    cccccccccaccaaaaacccccccccaccccccccbbbbbbbbbaaaaacccccccccccccccbbbbbcccccccccccbbbbbbccaaaaaaaaaaaacccdbbbcbbbbbbccccccccccccccccccaaaaaaaccbbbaabbbacccccccccc
    ccccccccccaaaaccccccccccaccccccccbbbbbbbbbbaaaaccccccccccccccccabbbbcccccccccccbbbbbcc9aaaaaaaaaaaccccbbbbcbbbbccccccccccccccccccccccccccccccbaacbbacccccccccccc
    ccccccaaaaaccccccccccccccccccccbbbbbbbbbaaaaacccccccccccaccccccbbbbbcccccccccbbbbbdccaaaaaaaaaacccccbbbcccbbbcccccccccccccccccccccccccccccccaaaaabcccccccccccccc
    ccccaaaacccccccccccacccccccccbbbbbbbbbaaaaacccccccccccaaacccccabbbbcccccccccbbbbbacaaaaaaaaaccccbbbbbbcccbbcccccccccccccccccccccccccccccccaaaaaccccccccccccccccc
    cccaacccccccccccaccccccccccbbbbbbbbaaaaccccccccccccccaaacccccaabbbccccccccbbbbbaccaaaaaaaaccccbbbbdbccccbbcccccccccccccccccccccccccccccccaaaaaaaaccccccccccccccc
    ccaccccccccccccccccccccccbbbbbbbbaaadcccccccc99ccccaaaacccccaabbbbcccccccbbbbbaaccaaaaaccccbbbbbbaaaaaaabcccccccccccbbaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    ccccccccccccccccccccccbbbbbbbbaaaccccccccccc9cccccaaaaccccccaabbbcccccccbbbbaaccccaaaaccbbbbbbaaaaaaaaaaccccccccbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    cccccccccccccccccccbbbbbbbbbccccccccccccccccccccaaaaaccccccaabbbcccccccbbbbaccccccccccccbbbbbaaaaaaaaaaacccccbbbccccccaaaaaaaaaaaaaaaaaaaacaaaaaaccccccccccccccc
    ccccccccccccbbbbbbbbbbbccccccccccccccccccccccccaaaaacccccccaacbbcccccdbbbbaccccccccccbbbbbaaaaaaaaaaaccccbbbbbcccccccccccccccaaaaaaaaaaabccaaaaacccccccccccccccc
    cccccaaabbbbbbbbbbbbcccccccccccccccccccccccccaaaaaaaccccccaaccbcccccbbbabcccccccbcccbbbbaaaaaaaaaaaccccccbbbbcccccccccccccccccccccccccccccaaaaaccccccccccccccccc
    cccaaaabbbbbbbddccccccccccccccccccccccccccccaaaaaaacccccccacccccccdbbbbbccccccbbccbbbbaaaaaaaaaaaccccccbbbbcccccccccccccccccccccccccccccaaaaaacccccccccccccccccc
    ccaaaaabbbbdddcccccccccccccccccccccacccccccaaaaaaacccccccaccccccbbbbbbcccccccbbccbbbbbaaaaaaaacccccccccbcbcccccccccbbbbbbbbbbbbbbbbbbbbaaaaaaccccccccccccccccccc
    aaaaaaabbbcccccccccccccccccccccccaaccccccaaaaaaaaccccccccccccccbbbbbbccccccbbbccbbbaaaaaaaaaaccccbccccbbbccccccccbbbbbbbbbbbbaabbbbbbaaaaaaacccccccccccccccccccc
    aaaaaaacccccccccccccccccccccccaaaaccccccaaaaaaaacccccccccccccabbbbbcccccccbbbcbbbbaaaaaaaaaccccccccccbbcccccccbbbbbbbb9bbdaaaaabbbbaaaaaaaaccccccccccccccccccccc
    aaaaccccccccccccccccccccccccaaaacccccccaaaaaaaccccccccccccccdbbbbbcccccccbaccbbbbaaaaaaaaaccccccccccbbbccccccbbbbbbbbbbdaaaaaaaaabaaaaaaaaccccccccccccccccccaccc
    aacccccccccccccccccccccccaaaaaacccccccaaa5aaaccccccccccccccdbbbccccccccbaaacbbbbaaaaaaaacccccccccccbbbccccccbbbbbbbbcbaaaaaaabbaaaaaaaaaccccccccccccccccccaacccc
    cccccccccccccccccccccccaaaaaaccccccccaaaaaaaaccccccccccccabbbbccccccccbaaacbbbaaaaaaaaacccccccccccbbbccccccbbbbcccbbaaaaaaabbcaaaaaaaaacccccccccccccccccaaaacccc
    cccccccccccccccccccaaaaaacccccccccccaaaaaaacccccccccccccabbbcccccccbbbaaacbbbaaaaaaaaaccccccccaccbbbadccccbbbbbccbaaaaaaacbbaaaaaaaaaccccccccccccccccccaaaaccccc
    ccccccccccccccccaaaaaaccccccccccccaaaaaaacccccccccccccabbbcccccccbbbbaaabbbbaaaaaaaaacccccccaaccbbbccccbcbcbbbbcbaaaaabbbbbaaaaaaaaaccccccccccccccccccaaaaaccccc
    cccccccccccccccaaaaaaccccccccccccaaaaaacccccccccccccabbbccccccccbbbaababaabaaaaaaaaccccccccaaccbabcccccbbcbbbbbbaabaabbbbaaaaaaaaaccccccccccccccccccccaaaacccccc
    cccccccccccaaaaaccccccccccccccccaaaaaacccccccccccccaabbccccccccbbbaabcabaaaaaaaaaa9cccccaaaaccbcbcccccbbccbbbbbaabaabcbcaaaaaacaaccccccccccccccccccccaaaaacccccc
    ccccccccaaaaaaaccccccccccccccacaaaaaccccccccccccccadbcccccccbbbbdaacbadabaaaaaaaaaccccaaaaaacbbbcccccbbcccbbbabbcaaccccaaaaaacaacccccccccccccccccccaaaaaaccccccc
    ccccccaaaaaaccccccccccccccccaaaaacccccccccccccccccccccccccbbbbbbaacbaaaaaaaaaaaaacccccaaaaaccbbccccccbcccbdbaabbcccccaaaaaaacacccccccccccccccccccccaaaaadccccccc
    cccaaaaaaaaacccccccccccccaaaaacccccccccccccccccccccccccccbbbbbaaacbaaaaaaaaaaaacccccaaaaaacabbccccacbccbbabaaabbccccaaaaaaccaacc9cccccccccccccccccaaaabbcccccccc
    aaaaaaaaaaccccccccccccaaccccccccccccccccccccccccccccccbbbbbbbbacbbaaaaaaaaaaaacccccaaaaaaacbbccccaccbcbbabaacabccccaaaaaacccaacccccccccccccccccccaaaabbbcccccccc
    aaaaaaaaaccccccccccaacccccccccccccccccccccccccccccccbbbbbbbcbccbaaaaaaaaaaaaccccccaaaaaaabbbcccccccbbbbbbaaccbbcccaaaaaacccaaccccccccccccccccccaaaaabbbbcccccccc
    aaaaaaaacccccccccaacccccccccccccccccccccccccccccccbbbbbbbccccaaaaaaaaaaaaaaccccccaaaaaaabbcccccccccbbbbbaacccbbcaaaaaaacccaacccccccccccccacccccaaaabbbbbcccccccc
    aaaaaaaacccccaacccccccccccaaacccccccccccccccccccbbbbbbbbcbcba9aaaaaaaaaaaaccccccaaaaaaabbcccccbcccbbbbbaaccccccccaaaaacccaacccccccccccccccccccaaaabbbbbcccccccca
    aaaaaaaacccaacccccccccccaadcccccccccccccccccccbbbbbbbbbbbbaaaaaaaaaaaaaacccccaaaaaaaaaabcccccccccbbbbbaaccccccccaaaaaccccacccccccccccccccccccaaaabbbbbccccccccaa
    aaaaaaaaaaaccccccccccaaaaaccccccccccccccccccbbbbbbbbbcbbaaaaaaaaaaaaaaacccccaacaaaaaaabccccccccbbbbbaaacccccccccaaaaccccccccacccccccccccccccaaaabbbbbbcccccccaaa
    aaacaaaccccccccccaaaaaaacccccccccccccccccaabbbbbbbcccbbaaaaaaaaaaaaaaabccccaaaaaaaaaabccccccccbbbbbbaaccccccccccaaaaccc5aacacccccccccccccccaaaabbbbbbcccccccaaaa
    cccaaccccccccccaaaaaacccccccccccccccccccaaabbbbbccccbccaaaaaaaaaaaaaa5ccccaaaaaaaaaabccccccccbbbbbbaacccaacccccccccccccaacacccccccccccccccaaaabbbbbbbccccccaaaaa
    cccccccccccccddaaaaccccccccccccccccccccaabbbbbccccbbcaaaaaaaaaaaaaaaccccaaaaaaaaaabbbcccccccbbbbbbbaccaacccccccccccccccaccaccaccccccccccaaaaabbbbbbbcccccccaaaac
    cccccccccddaaaaaccccccccccccccccccccccaabbbccccccbbaaaaaaaaaaaaaaabccccaaaaaaaaaabbbccc9cccbbbbbbbaacacccccccaacccccccaccaccaccccccccccaaaaabbbbbcbbccccccaaaaac
    accccccaaaaaaaccccccccccccccccccccccaabbbccbcccbccaaaaaaaaaaaaaaabcccccaaaaaaaabbbccccccccbbbbbbbaacaaccccccaaaccccccaacacccacccccccccaaaaabbbbbbbbcccccccaaaccc
    acccaaacccccccccccccccc5cccccccccccabbbbcbbcbbcaaaaaaaaaaaaaaaaccccccaaaaaaaaaabbccccccccbbbb9bbaaaacccccccaaaaccccccacaaccacacccccccaaaaabbbbbbcbbccccccaaaaccc
    ddaaccccacccccccccccccccccccccccccabbbbccccccaaaaaaaaaaaaaaaacccccccaaaaaaaaabbcccccccccbbbbbbbaaaacccccccaaaaaccccccccacccaccccccccaaaaaabbbbbcbbbcccccaaaacccc
    aacccaaccccccccccccccccccccccccccbbbbbbcccaaaaaaaaaaaaaaaaabcccccccaaaaaaaabbbcccccccccbbbbbbbabaaaccccccaaaaacccccacaccccaccccccccaaaaaadbbbbbcbbccccccaaacccac
    ccaaaaccccccccccccccccccccccccccbbbbcccaaaaaaaaaaaaaaaaaacccccccccaaaaaaabbbccccccccccbbbbbbbbaacaccccccaaaaaaccccacccacccccacccccaaaaaabbbbbbbbbccccccaaacccaac
    caaacccccccccccccccccccccccccccbbbcccccaaaaaaaaaaaaaaaccccccccccaaaaaaaabbcccccccccccbcbbbbbbaaaacccccccaaaaacccccaccaacaccacccccaaaaaabbbbbbbbbcccccccaaccaacca
    aaacccccccccccccccccccccccccccbbcccbcccaaaaaaaaaaaccccccccccccaaaaaaaabbbccccccccccccbbbbbbbabaaacccccaaaaaaccccccadcaccacccccccaaaaaabbbbbbbbbbccccccaaccaaccaa
    aaccccccccccaccccccccccccccccbbbccccccccccccccccccccccccc5aaaaaaaaaabbbcccccccccccccbcbbbbbbaaacacccccaaaaacccccccacacacccacccccaaaaabbbbbbbbbbbccccccaacacccaac
    ccccccccaacccccccccccccccccbbbbcbccccccccccccccccccccaaaaaaaaaaaabbbbcccccccccacccccbbbbbbbaaaaacccccaaaaaaccccccccaccccacccccaaaaaabbbbbbbbbbbccccccaacacacaccc
    ccccccaaaccccccccccccccccdddccccccccccccccaaaaaaaaaaaaaaaaaaaaabbbcccccccccacccccccbcbbbbbaaaaacccccaaaaaacccccccccacccaccccccaaaaacbbbbbbbbbbccccccaacacacacccb
    ccccccaacccccccccccccccaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaabbcccccccccaaaccccacccbbbbbbaaaaaccccccaaaaacccccccccccacaccccccaaaaabbbbbbbbbbbccccccaacacccaccbbb
    cccaaaaacccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaabbbbbbbbcccccccaaaccccaaacccdcbbbbabaaaccccccaaaacccccccaccccccccccccaaaaaabbdbbbbbbbbbccccccaacccaacccbbb
    cccccaacccccccccccccccccccccccaaaaaaaaaaaaaaaaaabbbbbbbbbbbccccccccaaacccccaacc5cbcbcbbbaaaacccccccaaaaccccccaacccccccccccaaaaaabbbbbbbbbbbbcccccaaacacaacccbbbb
    ccccaaacccccccccccccccccccaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbcccccccccaaaacccaaaccccbbbbbbaaaaaaccccccaaaccccccccaccccccaccccaaaaaabbbbbbbbbbbbccccccaacacaacccbbbbb
    cccaaacccccccccccccccaaaaaaaaaaaadbbbbbbbbbbbbbbbbbbbbccccccccccaaaacccaaaccccccbcbcbbaaaaaacccccaaaacacccccacccccccccccaaaaabbbbbbbbbbbbbcccccaaaaccaacccbbbbbb
    ccccaccccccccccccaaaaaaddaaaaabbbbbbbbbbbbbbbbbbbbbcccccccccccaaaacccaaaccccccbbcdcbbaaaaaaccccccaaacccccccaacccacccccccaaaaabbbbbbbbbbbbcccccaaaccacccccbbbbbbb
    ccccccccccccccaaaaaaadaaaaabbbbbbbbbbbbbbbbbbbbccccccccccccaaaaaacaaaaacaccccbbcddbbaaaaaaccccccaaaccacccaaacacacccccccaaaaabbbbbbbbbbbccccccaaacaaccccccbbbbbbb
    ccccccccccccaaaaaaadaaaabbbbbbbbbbbbbbbbbccccccccccccccccaaaaaaccaaaacccccccbbcbccbbaaaaaccccccaaaccaccccaacacaccccccaaaaaaabbbbbbbbbccccccaaaacaacaccccbbbbbbbc
    cccccaccaaaaaaaaabaaaabbbbbbbbbbbbbbbbcccccccccccccccaaaaaaaaccaaaaccacccccbbbbbcbbaaaaaccccccaaaccaccccaacaccacccccaaaaaaabbbbbbbbbbcccccaaaaacacccccccbbbbbbcc
    ccccaacaaaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccccaaaaaaaaacccaaacccccccccccbbbbcbbaaaaacccccccaaccaccccaacaacaccccccaaaaaabbbbbbbbbbcccccaaaaacccccccccbbbbbbccc
    ccccaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccaaaaaaaaaaaaccaaaaccccccccccccbbbbbbbaaaaacccccccaaccaccccaacaaccccccccaaaaaabbbbbbbbbccccccaaaaacccccccccbbbbbbcccc
    ccccaaaaaaaaaaabbbbbbbbbbbbbbbbbccccc5ccaaaaaaaaaaaaaacccaaacccccccccccccbbcbcbbaaaaaaccccccaaccaacccaccaaacccccccaaaaaaabbbbbbbbcccccaaaaaccccccccccbbbbbbccccc
    cccccaaaaaaaaabbbbbbbbbbbbbbbbbccccccccaaaaaaaaaaaaaacaaacccccccccccccccbbbbbbbaaaaaaccccccaaccaacccaacaaacccccccaaaaaaaabbbbbbbcccccaaaaaccccccccccbbbbbccccccc
    ccccaaaaaaaaabbbbbbbbbbbbbbbbccccccccaaaaaaaaaaaaaaccccccc5ccccccccccccbbbbbbbbaaaacccccccaaccaccccaacaacccccccccaaaaaabbbbbbbbccccaaaaacccccccccccbbbcccccccccc
    cccaaaaaaaaabbbbbbbbbbbbbbbbcccccccaaaaaaaaaaaaaaaccacaaccccccccccccccbbbbbbbbbaaaccccccaaacccccccaaccaccccaccccaaaaaabbbbbbbcccccaaaaaccccccccccbbbcccccccccccc
    caaaaaaaaaabbbbbbbbbbbbbbbbcccccccaaaaaaaaaaaaaacccccacccccccccccccccbbcbbbbbbbacccccccaaacccccccccccaccccccccccaaaaabbbbbbbcccccaaaaacccccccccccccccccccccccccc
    aaaaaaaaaaabbbbbbbbbbbbbbcccccccaaaaaaaaaaaaaaacccacccccccccccccccccbbbbbbbbbbbbcccccacccccccccccccccccccccccccaaaaaabbbbbbbccccaaaaaccccccccccccccccccccccccccc
    aaaaaaaaaabbbbbcbbbbbbbbcccccccaaaaaaaaaaaaaaaccaccccccccccccccccccbbbbbbbbbbbcccccaccccccccccccccccccccccccccaaaaaabbbbbbbbcccaaaaaaccccccccccccccccccccccccccc
    aaaaaaaaadbbbbccbbbbbbbcccccccaaaaaaaaaaaaaaacaaaccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccccaaaaabbbbbbbbbcccaaaaacccccccccccccccccccccccccccc
    `)
scroller.scrollBackgroundWithSpeed(0, 10)
canon = sprites.create(img`
    .......55.......
    .......ff.......
    .......ff.......
    .......ff.......
    ......ffff......
    ......f2ef......
    .....f22eff.....
    ....ff2ffeff....
    ...ff2f69feff...
    ..f2246699e24f..
    ..f2246669e24f..
    ..f2246669e24f..
    .ff2446666e24ff.
    .f22446666e244f.
    ff2244f66fe224ff
    f22444ffffee244f
    f2244ee22cce224f
    f2244ec22ccee24f
    f244eecffccce22f
    f244ecf..fccee2f
    f24eccf..fccceef
    fefffff..fffffef
    fff5245..5245fff
    f...25....25...f
    `, SpriteKind.Player)
controller.moveSprite(canon)
canon.setStayInScreen(true)
canon.bottom = 120
list = [
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `
]
game.onUpdateInterval(1000, function () {
    if (info.score() <= 5) {
        projectile2 = sprites.createProjectileFromSide(list[randint(0, 3)], 0, 50)
        projectile2.setPosition(randint(5, 140), 0)
        projectile2.setKind(SpriteKind.Enemy)
    } else if (info.score() >= 6 && info.score() < 10) {
        projectile2 = sprites.createProjectileFromSide(list[randint(0, 3)], 0, 100)
        projectile2.setPosition(randint(5, 140), 0)
        projectile2.setKind(SpriteKind.Enemy)
    } else if (info.score() >= 10) {
        projectile2 = sprites.createProjectileFromSide(list[randint(0, 3)], 0, 200)
        projectile2.setPosition(randint(5, 140), 0)
        projectile2.setKind(SpriteKind.Enemy)
    } else if (info.score() >= 20) {
        Meteors()
    } else if (info.score() >= 30) {
        Meteors()
        Meteors()
    }
})
game.onUpdateInterval(1000, function () {
    timer += 1
    if (timer == 10) {
        info.changeLifeBy(1)
    } else if (timer == 20) {
        info.changeLifeBy(2)
    } else if (timer == 30) {
        info.changeLifeBy(3)
    } else if (timer == 60) {
        info.changeLifeBy(6)
    }
})
forever(function () {
    effects.starField.startScreenEffect(5000)
})
