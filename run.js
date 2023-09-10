const { Otsu } = require('./dist/otsu.js');
const otsu = new Otsu();

(async () => {

    const test = await otsu.userId('qavier');
    console.log(test);

})();