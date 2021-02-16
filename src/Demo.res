@genType.import("polished")
external lighten: (float, string) => string = "lighten"

Js.log2("Hello, World!", lighten(0.5, "#CCCD64"))
