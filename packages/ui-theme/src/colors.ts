type Color = string;

interface Colors {
    background: Color,
    primary: Color;
    lightPrimary: Color;
    darkPrimary: Color;
    secondary: Color;
    lightSecondary: Color;
    darkSecondary: Color;
    backgroundColor: Color;
    textPrimary: Color;
    textSecondary: Color;
    textMuted: Color;
    white: 'white';
    black: 'black';
}

const colors: Colors = {
    background: "rgba(245, 255, 234 , 1)",
    primary: "rgba(255, 99, 71, 1)",
    lightPrimary: "rgba(255, 182, 193, 1)",
    darkPrimary: "rgba(139, 0, 0, 1)",
    secondary: "rgba(30, 144, 255, 1)",
    lightSecondary: "rgba(173, 216, 230, 1)",
    darkSecondary: "rgba(0, 0, 139, 1)",
    backgroundColor: "rgba(245, 245, 245, 1)",
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.6)",
    textMuted: "rgba(0, 0, 0, 0.38)",
    white: "white",
    black: "black"
};

export default colors;