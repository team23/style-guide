/**
    * jsdoc/no-types
 * @param {string} value
 */
function yoda(value) {
    return 2 === value;
}

const value = 'value';

const preferTemplate = "Hello, " + name + "!";
const validTypeof = typeof value == "undefimed";
const magicNumber = {'value': 100};
const useIsnan = value === NaN;
const spaceInParens = ( 1 + 2 );

function spaceBeforeFunctionParen (callback) {

};

const radix = parseInt("071");
const preferObjectSpread = Object.assign({}, magicNumber);
var noVar = 1;
let preferConst = 1;

function preferArrowCallback(callback) {}(function(a) { return a; });

function paddingLineBetweenStatements() {
    const a = 1;
    return a;
}

var oneVar, twoVar = 1;
const objectShorthand = {
        oneVar: oneVar
}


var noUnneededTernary = twoVar === 1 ? true : false;

(function(){
    return void 0;
})();

const templateCurlySpacing = `${noVar}`

([]).filter(a => a).map(a => a);

export class MaxClass1 {
}

export class MaxClass2 {
}

const arrayBracketSpacing = [ 'a', 'b' ];
