input.onButtonPressed(Button.A, function () {
    countDown()
})
function countDown () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y + 1)
            basic.pause(1000)
        }
    }
}
