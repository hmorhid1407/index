basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
    }
})
