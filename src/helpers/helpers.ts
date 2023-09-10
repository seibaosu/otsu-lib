const func_delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
    func_delay
}