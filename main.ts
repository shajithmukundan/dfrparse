Andee.WidgetEvent(WidgetId.Widget_1, function () {
    Choose_Mode = Andee.getSlider()
    if (Andee.getSlider() == 1) {
        basic.showLeds(`
            # . . # .
            # . # . .
            # # # . .
            # . . # .
            # # # . .
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
let Choose_Mode = 0
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
WidgetColour.Red,
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
WidgetPosition.Row2_Column2,
WidgetLength.Half,
WidgetColour.Red,
"Walk",
"Walk",
"0",
1,
-1,
2
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
2
)
let Skate = Andee.createSliderWidget(
WidgetId.Widget_5,
WidgetTypeInput.Slider,
WidgetPosition.Row3_Column2,
WidgetLength.Half,
WidgetColour.Dark_Orange,
"Skate",
"Skate",
"0",
1,
-1,
2
)
basic.forever(function () {
	
})
