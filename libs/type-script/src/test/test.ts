// Intentionally bad code to test linting rules
const badVariable = 123; // Should trigger @stylistic/line-comment-position

// Should trigger @typescript-eslint/no-unused-vars
// @ts-ignore
const unusedVar = 'unused';

// Should trigger @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type
function badFunction(param1: any, param2: number) {
    // Should trigger @typescript-eslint/no-unsafe-assignment
    const result = param1 + param2;
    return result;
}

// Should trigger @stylistic/key-spacing @stylistic/object-curly-spacing @typescript-eslint/no-magic-numbers
const badObject = { a:1, b: 3};

const badArray = [
    1,
    // Should trigger @stylistic/comma-spacing @typescript-eslint/no-magic-numbers
    1,3,
// Should trigger @stylistic/array-element-newline @stylistic/semi
]

// Should trigger @stylistic/max-len
const veryLongLine = 'This is a very long line that should trigger the max-len rule because it exceeds the maximum allowed length of 140 characters and should cause a linting error';

const list: Array<string> = [];
const value = list[0] as string;

export { badFunction, badObject, badArray, veryLongLine, badVariable, value };
