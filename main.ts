input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
    basic.showNumber(hours)
})
input.onGesture(Gesture.Shake, function () {
    adjust = hours
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + minutes / 10
    time = "" + time + minutes % 10
    basic.showString(time)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
let minutes = 0
let hours = 0
let time = ""
let adjust = 0
adjust = 0
let ampm = false
time = ""
hours = 0
minutes = 0
basic.forever(function () {
    basic.pause(6000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
