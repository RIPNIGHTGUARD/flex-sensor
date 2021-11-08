let Flex_Sensor = 0
basic.forever(function () {
    Flex_Sensor = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber(Flex_Sensor)
    if (Flex_Sensor > 965) {
        basic.showIcon(IconNames.Happy)
    } else if (Flex_Sensor > 955 && Flex_Sensor == 965) {
        basic.showIcon(IconNames.No)
    } else if (Flex_Sensor < 955) {
        basic.showIcon(IconNames.Sad)
    }
})
