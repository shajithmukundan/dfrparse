/**
 * Blocks for driving the Kitronik Servo:Lite Board
 */

//% weight=100 color=#805e03 icon="\uf21b" block="NinjaBot"

/* icon images from https://fontawesome.com/v4/cheatsheet/  */

namespace NinjaBot {

    /**
     * **********************************************************************************************************************************************
     * micro:bit Servo:Lite / :MOVE mini blocks
     ************************************************************************************************************************************************/

    /* Some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    
    const milliSecInASecond = 1000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200
    let biasToApply = 50 //in the middle is the place to start

    /**
     * Apply a bias to the wheels. 0 to 50 for left, 50 to 100 for right.
     * @param bias eg: 50
     */

    //% blockId=kitronik_servolite_servos_bias
    //% block="bias %biasDriving"
    //% bias.min=0 bias.max=100

    export function biasDriving(bias: number): void {
        if (bias > 100) {
            bias = 100;
        } else if (bias < 0) {
            bias = 0;
        }
        biasToApply = bias;
    }

    /**
     * Rolls forwards. Call stop to stop
     */

    //% blockId=kitronik_servolite_servos_forward
    //% block="drive forward"

    export function forward(): void {
        let P1Output = 0;
        let P2Output = 180;

        if (biasToApply < 50) {
            // Want to move 180 towards 90
            P2Output -= 50 - biasToApply;
        } else if (biasToApply > 50) {
            // Want to move 0 towards 90
            P1Output += biasToApply - 50;
        }

        pins.servoWritePin(AnalogPin.P1, P1Output);
        pins.servoWritePin(AnalogPin.P2, P2Output);
    }

    /**
     * Drives backwards. Call stop to stop
     */

    //% blockId=kitronik_servolite_servos_backward
    //% block="drive backward"

    export function backward(): void {
        let P1Output = 180;
        let P2Output = 0;

        if (biasToApply < 50) {
            // Want to move 0 towards 90
            P2Output += 50 - biasToApply;
        } else if (biasToApply > 50) {
            // Want to move 180 towards 90
            P1Output -= biasToApply - 50;
        }

        pins.servoWritePin(AnalogPin.P1, P1Output);
        pins.servoWritePin(AnalogPin.P2, P2Output);
    }

    /**
    * Turns left. Call stop to stop
    */

    //% blockId=kitronik_servolite_servos_left
    //% block="turn left"

    export function left(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    /**
     * Turns right. Call ``stop`` to stop
     */

    //% blockId=kitronik_servolite_servos_right
    //% block="turn right"

    export function right(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

    /**
     * Stop for 360 servos.
     * rather than write 90, which may not stop the servo moving if it is out of trim
     * this stops sending servo pulses, which has the same effect.
     * On a normal servo this will stop the servo where it is, rather than return it to neutral position.
     * It will also not provide any holding force.
     */

    //% blockId=kitronik_servolite_servos_stop
    //% block="Stop Roll"

    export function stopRoll(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
    }

    /**
     * Sends servos to 'neutral' position.
     * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.
     */

    //% blockId=kitronik_servolite_servos_neutral
    //% block="goto neutral position"

    export function neutral(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }

    /**
     * Drives forwards the requested distance and then stops
     * @param howFar distance to move
     */

    //% blockId=kitronik_servolite_drive_forwards
    //% block="Rolls forwards %howFar|distance" 
    export function driveForwards(howFar: number): void {
        let timeToWait = (howFar * milliSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        forward();
        basic.pause(timeToWait);
        stopRoll();
    }

    /**
     * Drives backwards the requested distance and then stops
     * @param howFar distance to move
     */

    //% blockId=kitronik_servolite_drive_backwards
    //% block="Rolls backwards %howFar|distance" 

    export function driveBackwards(howFar: number): void {
        let timeToWait = (howFar * milliSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        backward();
        basic.pause(timeToWait);
        stopRoll();
    }

    /**
     * Turns right through the requested degrees and then stops
     * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
     * a simple turn, wait, stop method.
     * Runs the servos at slower than the right function to reduce wheel slip
     * @param deg how far to turn, eg: 90
     */

    //% blockId=kitronik_servolite_turn_right
    //% block="turn right %deg|degrees"

    export function turnRight(deg: number): void {
        let timeToWait = (deg * milliSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 130);
        pins.servoWritePin(AnalogPin.P2, 130);
        basic.pause(timeToWait);
        stopRoll();
    }

    /**
    * Turns left through the requested degrees and then stops
    * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
    * a simple turn, wait, stop method.
    * Runs the servos at slower than the right function to reduce wheel slip
    * @param deg how far to turn, eg: 90
    */

    //% blockId=kitronik_servolite_turn_left
    //% block="turn left %deg|degrees"

    export function turnLeft(deg: number): void {
        let timeToWait = (deg * milliSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 50);
        pins.servoWritePin(AnalogPin.P2, 50);
        basic.pause(timeToWait);
        stopRoll()
    }

    /**
     * Allows the setting of the :MOVE mini turn amount.
     * This allows tuning for the turn x degrees commands
     * @param degPerSec : How many degrees per second the mini does.
     */

    //% blockId=kitronik_servolite_set_turn_speed_param
    //% block="calibrate turn amount to %degPerSec|degrees per second" 

    export function setDegreesPerSecond(degPerSec: number): void {
        numberOfDegreesPerSec = degPerSec
    }

    /**
     * Allows the setting of the :MOVE mini forward / reverse distance.
     * This allows tuning for the move x distance commands
     * @param distPerSec : How many mm per second the mini does.
     */

    //% blockId=kitronik_servolite_set_movement_speed_param 
    //% block="calibrate drive amount to %distPerSec|mm per second"

    export function setDistancePerSecond(distPerSec: number): void {
        distancePerSec = distPerSec
    }

    //% blockId=ninjaBotStand
    //% block="Ninja Stand"

    export function stand(): void {
        basic.pause(400);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.servoWritePin(AnalogPin.P8, 120);
        pins.servoWritePin(AnalogPin.P12, 60);
    }

    //% blockId=ninjaBotRollMode
    //% block="roll mode"

    export function rollMode(): void {
        basic.pause(400);
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.servoWritePin(AnalogPin.P8, 20);
        pins.servoWritePin(AnalogPin.P12, 160);
    }

    //% blockId=ninjaBotLeftKick
    //% block="Ninja left kick"

    export function leftKick(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        basic.pause(1000);
        pins.servoWritePin(AnalogPin.P12, 0); /* left foot */ 
        basic.pause(500);
        pins.servoWritePin(AnalogPin.P8, 70); /* right foot */
        basic.pause(500);
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        pins.servoWritePin(AnalogPin.P1, 135);
        basic.pause(1500);
        pins.analogWritePin(AnalogPin.P1, 0);             
        
    }

    //% blockId=ninjaBotRightKick
    //% block="Ninja right kick"

    export function rightKick(): void {
        pins.analogWritePin(AnalogPin.P1, 90);
        pins.analogWritePin(AnalogPin.P2, 90);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P8, 180);
        basic.pause(200);
        pins.servoWritePin(AnalogPin.P12, 110);
        basic.pause(500);
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground) 
        pins.servoWritePin(AnalogPin.P2, 135);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P2, 0);

    }

    //% blockId=ninjaBotWalkForward
    //% block="Ninja walk forward"

    export function walkForward(): void {
        
        pins.servoWritePin(AnalogPin.P12, 30);
        pins.servoWritePin(AnalogPin.P8, 30);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P1, 60);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P1, 0);
        basic.pause(100);
        pins.servoWritePin(AnalogPin.P12, 150);
        pins.servoWritePin(AnalogPin.P8, 150);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P2, 120);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P2, 0);
        basic.pause(100);

    }


    //% blockId=ninjaBotWalkBackward
    //% block="Ninja walk balkward"

    export function walkBackward(): void {

        pins.servoWritePin(AnalogPin.P12, 30);
        pins.servoWritePin(AnalogPin.P8, 30);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P1, 120);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P1, 0);
        basic.pause(100);
        pins.servoWritePin(AnalogPin.P12, 150);
        pins.servoWritePin(AnalogPin.P8, 150);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P2, 60);
        basic.pause(300);
        pins.analogWritePin(AnalogPin.P2, 0);
        basic.pause(100);
    }

}
