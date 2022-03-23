pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) != 0) {
        serial.writeValue("x", 1)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        serial.writeValue("x", 0)
    }
})
