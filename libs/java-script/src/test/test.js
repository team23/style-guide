// Intentionally bad code to test linting rules
const badVariable = 123; // Should trigger @stylistic/line-comment-position

// Should trigger no-unused-vars
const unusedVar = 'unused';

// Should trigger jsdoc/require-param-description, jsdoc/require-returns-description, jsdoc/require-returns-typ
/**
 * @param param1
 * @returns
 */
function badFunction(param1, param2) {
    return param1 + param2;
}

// Should trigger @stylistic/key-spacing @stylistic/object-curly-spacing
const badObject = { a:1, b: 3};

const badArray = [
    // Should trigger @stylistic/comma-spacing @stylistic/array-element-newline no-magic-numbers
    1,3,
// Should trigger @stylistic/semi
]

// Should trigger @stylistic/max-len
const veryLongLine = 'This is a very long line that should trigger the max-len rule because it exceeds the maximum allowed length of 140 characters and should cause a linting error';

const values =
    1
    + 1;

const condition = values > 1
    ? 0
    : 1;

export {
    badFunction,
    badObject,
    badArray,
    veryLongLine,
    badVariable,
    values,
    condition,
};
