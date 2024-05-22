/**
 * jsdoc/no-types
 *
 * @param v
 */
function yoda(v) {
    return v === 1;
}

const value = 'value';

yoda(value);

const preferTemplate = `Hello, ${ name }!`;
const validTypeof = typeof value === 'undefined';
const num = 100;
const magicNumber = { value: num };
const useIsnan = isNaN(value);
const spaceInParens = (1 + 1);

function spaceBeforeFunctionParen(callback) {
    return callback;
}

spaceBeforeFunctionParen(preferTemplate);
spaceBeforeFunctionParen(validTypeof);
spaceBeforeFunctionParen(useIsnan);
spaceBeforeFunctionParen(spaceInParens);

const radix = parseInt('071', 10);
const preferObjectSpread = { magicNumber };
const noVar = 1;
const preferConst = 1;

function preferArrowCallback(callback) {
    return callback;
}

preferArrowCallback(radix);
preferArrowCallback(preferObjectSpread);
preferArrowCallback(preferConst);

function paddingLineBetweenStatements() {
    const a = 1;

    return a;
}

paddingLineBetweenStatements();

const oneVar = 1;
const twoVar = 1;
const objectShorthand = {
    oneVar,
};


const noUnneededTernary = twoVar === 1;

preferArrowCallback(objectShorthand);
preferArrowCallback(noUnneededTernary);

(() => undefined)();

const templateCurlySpacing = `${ noVar }`;

preferArrowCallback(templateCurlySpacing);

([]).filter(a => a)
    .map(a => a);

export class MaxClass {
    getClass() {
        return class MaxClass2 {

        };
    }
}

const arrayBracketSpacing = ['a', 'b'];

preferArrowCallback(arrayBracketSpacing);
