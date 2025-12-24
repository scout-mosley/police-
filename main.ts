/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley 
 * Created on: Dec 2025
 * This program turns lights on and off
*/


input.onButtonPressed(Button.A, function () {
basic.showString("CHRISTMAS LIGHTS!")

//setup 
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P13, 1) 
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
//start of show 
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)




    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)



})

