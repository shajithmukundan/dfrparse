Andee.WidgetEvent(WidgetId.Widget_2, function () {
    if (Andee.getSlider() == 1) {
        NinjaBot.rollForward()
    } else if (Andee.getSlider() == 0) {
        NinjaBot.stopRoll()
    } else if (Andee.getSlider() == -1) {
        NinjaBot.rollBackward()
    }
})
Andee.WidgetEvent(WidgetId.Widget_4, function () {
    if (Andee.getSlider() == 1) {
        NinjaBot.rightKick()
    } else if (Andee.getSlider() == 0) {
        NinjaBot.stand()
    } else if (Andee.getSlider() == -1) {
        NinjaBot.leftKick()
    }
})
Andee.WidgetEvent(WidgetId.Widget_1, function () {
    Choose_Mode = Andee.getSlider()
    if (Andee.getSlider() == 1) {
        basic.showLeds(`
            # . . # .
            . # . # .
            # # # # .
            # . . # .
            . # # # .
            `)
        NinjaBot.rollMode()
    } else if (Andee.getSlider() == 2) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        NinjaBot.stand()
    } else if (Andee.getSlider() == 3) {
        basic.showLeds(`
            # . . # .
            . # . # .
            . . # # .
            . # . # .
            # . . # .
            `)
        NinjaBot.stand()
    } else if (Andee.getSlider() == 4) {
        basic.showLeds(`
            . . # # #
            . # . . .
            . . # # .
            . . . . #
            . # # # .
            `)
        NinjaBot.stand()
    }
})
Andee.WidgetEvent(WidgetId.Widget_5, function () {
    if (Andee.getSlider() == 1) {
        NinjaBot.Skateforward()
    } else if (Andee.getSlider() == 0) {
        NinjaBot.stand()
    } else if (Andee.getSlider() == -1) {
        NinjaBot.Skatebackward()
    }
})
Andee.WidgetEvent(WidgetId.Widget_3, function () {
    if (Andee.getSlider() <= 0) {
        for (let index = 0; index < Math.abs(Andee.getSlider()); index++) {
            NinjaBot.walkBackward()
        }
    } else if (Andee.getSlider() > 0) {
        for (let index = 0; index < Andee.getSlider(); index++) {
            NinjaBot.walkForward()
        }
    }
})
let Choose_Mode = 0
NinjaBot.biasDriving(30)
Andee.begin()
let Mode = Andee.createSliderWidget(
WidgetId.Widget_1,
WidgetTypeInput.Slider,
WidgetPosition.Row0_Column0,
WidgetLength.Full,
WidgetColour.Red,
"Select Mode",
"Mode",
"1",
4,
1,
3
)
let Roll = Andee.createSliderWidget(
WidgetId.Widget_2,
WidgetTypeInput.Slider,
WidgetPosition.Row1_Column1,
WidgetLength.Half,
WidgetColour.Orange,
"Roll",
"Roll",
"0",
1,
-1,
2
)
let Walk = Andee.createSliderWidget(
WidgetId.Widget_3,
WidgetTypeInput.Slider,
WidgetPosition.Row2_Column0,
WidgetLength.Full,
WidgetColour.Green,
"Walk",
"Walk",
"0",
20,
-20,
40
)
let Kick = Andee.createSliderWidget(
WidgetId.Widget_4,
WidgetTypeInput.Slider,
WidgetPosition.Row3_Column0,
WidgetLength.Half,
WidgetColour.Yellow,
"Kick",
"Kick",
"0",
1,
-1,
1
)
let Skate = Andee.createSliderWidget(
WidgetId.Widget_5,
WidgetTypeInput.Slider,
WidgetPosition.Row3_Column2,
WidgetLength.Half,
WidgetColour.Magenta,
"Skate",
"Skate",
"0",
1,
-1,
2
)
basic.forever(function () {
    Mode.update()
    Roll.update()
    Walk.update()
    Kick.update()
    Skate.update()
})
