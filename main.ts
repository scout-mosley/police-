/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley 
 * Created on: Dec 2025
 * This program turns lights on and off
*/

//setup 

input.onButtonPressed(Button.B, function () {

pins.digitalWritePin(DigitalPin.P5, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P9, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P9, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P5, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P5, 0)
basic.pause(550)

//all on 
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P9, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.pause(550)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(550)

//cool 
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.pause(300)
pins.digitalWritePin(DigitalPin.P5, 1)
basic.pause(300)
pins.digitalWritePin(DigitalPin.P5, 0)
basic.pause(300)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(300)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.pause(300)
pins.digitalWritePin(DigitalPin.P9, 1)
basic.pause(250)
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P5, 0)


basic.showString("CHRISTMAS!")
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
