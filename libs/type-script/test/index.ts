/**
 * a sample function to lint
 *
 * @param value
 */
function testEslintConfig(value: { someValue: number }): number {
    return value.someValue;
}

enum MagicNumbers {
    NotFound = 404,
    InternalError = 500,
}

const magicNumber = 10;

testEslintConfig({ someValue: magicNumber });
testEslintConfig({ someValue: MagicNumbers.NotFound });

export class Test {
    private readonly _valueTest = 0;

    public get test(): number {
        return this._valueTest;
    }
}

let a: unknown = new Test().test;

console.error(a);

a = {
    magicNumberInObjectIsAllowed: 2,
};
