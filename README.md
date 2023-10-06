# JavaScript Guide
- Airnb guide
[Airnb](https://airbnb.io/projects/javascript/)
- Google JavaScript Guide
[Google](https://google.github.io/styleguide/jsguide.html)

# Common Rules
```js
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
```
# Comments 
- Multiline Comments
bare-block, start block
1. bare-block
```js
/*
Bare Block 
Multi Line Statement
*/

```
eslintrc.js config
```js
'use strict'
module.exports = {
    env:{
        es6: true
    },
    rules :{
        strict : ['error','global'],
        'multiline-comment-style':['error','bare-block']
    }
}
```
2. starred-block
Example
```js
/*
 *Starred Block 
 *Multi Line Statement
 */
```

eslintrc.js configuration
```js
'use strict'
module.exports = {
    env:{
        es6: true
    },
    rules :{
        strict : ['error','global'],
        'multiline-comment-style':['error','starred-block']
    }
}
```
3. spaced-comments
Example
```js
// Hello there!
```
eslintrc.js
```js
module.exports = {
    env:{
        es6:true
    },
    rule :{
        "spaced-comments":["error","always"]
    }
}
```

# Semicolon

1. semi - (semicolon)
Example
```js
`use strict`;
console.log("Hello World");
console.log("Some Data") //<It will throw error>
console.log("Some Data");; // <It will throw error>
```
.eslintrc.js
```js
module.exports = {
    env:{
        es6:true
    },
    rule:{
        "strict":["error","global"]
        "multi-line-comment":["error","bare-block"],
        "semi":["error","always"],
        "semi-spacing":"error",
        "no-extra-semi":"error"
    }
}
```

# Indentation
Example
```js
console.log("Hello there !!!") // <This line will give error as per rule>
    console.log("Hello there 2!!!") 
```
.eslintrc.js
```js
module.exports = {
    "env":{
        "es6":true,
    },
    "rule":{
        "indent":["error",4],
        "semi":["error","always"]
    }
}
```
# Keyword Spacing : keyword-spacing
Example 
```js
//<It will throw error as per rule>
if(a === 2){
    console.log("Keyword Spacing")
}

// <It will not throw error>
if (a === 2){
     console.log("Keyword Spacing")
}
```