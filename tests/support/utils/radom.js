export function getRandomNumber(min = 0, max) {
    const value = Math.floor(Math.random() * (max - min) + min);
    return value;
}