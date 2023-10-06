"use strict";
module.exports = {
    env:{
        es6: true,
    },
    rules :{
        "strict" : ["error","global"],
        "multiline-comment-style":["error","starred-block"],
        "spaced-comment":["error","always"],
        "semi":["error","always"],
        "no-extra-semi":"error",
        "semi-spacing":"error",
        "indent":["error",4],
        "brace-style":"error",
        "keyword-spacing":"error",
        "arrow-spacing":"error",
        "space-infix-ops":"error",
        "space-before-blocks":"error",
        "space-before-function-paren":["error",{"anonymous":"always","named":"never", "asyncArrow":"always"}],
        "newline-per-chained-call":"error",
        "array-bracket-spacing":["error","never"],
        "comma-style":["error","last"],
        "comma-dangle":["error", "always-multiline"],
        "no-multiple-empty-lines":["error", {"max": 2, "maxEOF":2}],
    },
};