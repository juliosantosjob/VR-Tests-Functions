export function getRandomNumber(max, min) {
    const value = Math.floor(Math.random() * (max - min) + min);
    return value;
}