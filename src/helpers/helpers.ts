const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
    delay
}