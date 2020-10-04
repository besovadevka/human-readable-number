const ones=['','one','two','three','four','five','six','seven','eight','nine'];
const tens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function toOneHundredValue(number) {
    if (number < 10)  {
        let result = ones[number];
        if (result[result.length - 1] === ' ') return result.trim();
        return result;
    } else if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else {
        let result = `${tens[Math.floor(number / 10) - 2]} ${ones[number % 10]}`;
        if (result[result.length - 1] === ' ') return result.trim();
        return result;
    }
};

module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    if (number > 99) {
        let result = `${ones[Math.floor(number / 100)]} hundred ${toOneHundredValue(number % 100)}`;
        if (result[result.length -1] === ' ') return result.trim();
        return result;
    } 
    return toOneHundredValue(number);
}
