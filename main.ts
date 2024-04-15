Andee.WidgetEvent(WidgetId.Widget_5, function () {
    NinjaBot.rollMode()
    if (Andee.getSlider() == 0) {
        NinjaBot.stopRoll()
    }
    if (Andee.getSlider() == 1) {
        NinjaBot.rollForward()
    }
    if (Andee.getSlider() == -1) {
        NinjaBot.rollBackward()
    }
})
Andee.WidgetEvent(WidgetId.Widget_4, function () {
    NinjaBot.rollMode()
})
Andee.WidgetEvent(WidgetId.Widget_1, function () {
    NinjaBot.leftKick()
})
Andee.WidgetEvent(WidgetId.Widget_3, function () {
    NinjaBot.stand()
})
Andee.WidgetEvent(WidgetId.Widget_2, function () {
    NinjaBot.rightKick()
})
Andee.begin()
let Left_Kick = Andee.createWidget(
WidgetId.Widget_1,
WidgetType.Button,
WidgetPosition.Row0_Column0,
WidgetLength.Half,
WidgetColour.Red,
"Left Kick",
"LK",
"Units"
)
let Right_Kick = Andee.createWidget(
WidgetId.Widget_2,
WidgetType.Button,
WidgetPosition.Row0_Column2,
WidgetLength.Half,
WidgetColour.Red,
"Right Kick",
"RK",
"Units"
)
let Stand = Andee.createWidget(
WidgetId.Widget_3,
WidgetType.Button,
WidgetPosition.Row2_Column0,
WidgetLength.Half,
WidgetColour.Green,
"Stand",
"Stand",
"Units"
)
let RollMode = Andee.createWidget(
WidgetId.Widget_4,
WidgetType.Button,
WidgetPosition.Row2_Column2,
WidgetLength.Half,
WidgetColour.Green,
"RollMode",
"RollMode",
"Units"
)
let RollSpeed = Andee.createSliderWidget(
WidgetId.Widget_5,
WidgetTypeInput.Slider,
WidgetPosition.Row3_Column1,
WidgetLength.Half,
WidgetColour.Indigo,
"RollSpeed",
"Units",
"0",
1,
-1,
2
)
basic.forever(function () {
    Left_Kick.update()
    Right_Kick.update()
    RollMode.update()
    Stand.update()
    RollSpeed.update()
})
