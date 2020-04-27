export const generateNumber = () => {
    const code = [];

    for (let index = 0; index < 4; index++) {
        code.push(Math.floor(Math.random() * 9)+1);
    }

    return parseInt(code.join(""));
};