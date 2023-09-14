radio.onReceivedNumber(function (receivedNumber) {
    Signalstyrka = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
function Toggleheart () {
    led.toggle(1, 0)
    led.toggle(3, 0)
    led.toggle(0, 1)
    led.toggle(1, 1)
    led.toggle(2, 1)
    led.toggle(3, 1)
    led.toggle(4, 1)
    led.toggle(0, 2)
    led.toggle(1, 2)
    led.toggle(2, 2)
    led.toggle(3, 2)
    led.toggle(4, 2)
    led.toggle(1, 3)
    led.toggle(2, 3)
    led.toggle(3, 3)
    led.toggle(2, 4)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(Score)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128)
})
let Score = 0
let Signalstyrka = 0
radio.setGroup(115)
Signalstyrka = 0
Score = 0
basic.forever(function () {
    Toggleheart()
    basic.pause((0 - (Signalstyrka - 40)) ** 2)
    basic.clearScreen()
    basic.pause((0 - (Signalstyrka - 40)) ** 2)
})
