const checkLeft = (
    offset: number,
    mouseX: number,
    mouseY: number,
    buttonX: number,
    buttonTopY: number,
    buttonBottomY: number
): boolean => {
    if (buttonTopY - offset < mouseY && mouseY < buttonBottomY + offset)
        return buttonX - offset < mouseX && mouseX < buttonX;
    return false;
};

const checkTop = (
    offset: number,
    mouseX: number,
    mouseY: number,
    buttonY: number,
    buttonLeftX: number,
    buttonRightX: number
): boolean => {
    if (buttonLeftX - offset < mouseX && mouseX < buttonRightX + offset)
        return buttonY - offset < mouseY && mouseY < buttonY;
    return false;
};

const checkRight = (
    offset: number,
    mouseX: number,
    mouseY: number,
    buttonX: number,
    buttonTopY: number,
    buttonBottomY: number
): boolean => {
    if (buttonTopY - offset < mouseY && mouseY < buttonBottomY + offset)
        return buttonX + offset < mouseX && mouseX < buttonX;
    return false;
};

const checkBottom = (
    offset: number,
    mouseX: number,
    mouseY: number,
    buttonY: number,
    buttonLeftX: number,
    buttonRightX: number
): boolean => {
    if (buttonLeftX - offset < mouseX && mouseX < buttonRightX + offset)
        return buttonY - offset < mouseY && mouseY < buttonY;
    return false;
};

export { checkLeft, checkTop, checkRight, checkBottom };
