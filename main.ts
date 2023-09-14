radio.onReceivedNumber(function (receivedNumber) {
    Signalstyrka = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
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
    basic.showIcon(IconNames.Heart)
    basic.pause((0 - (Signalstyrka - 40)) ** 2)
    basic.clearScreen()
    basic.pause((0 - (Signalstyrka - 40)) ** 2)
})
