# @etpinard/lint

My personal linter, _not for you_.

## Usage

No. Don't use this. Use [`standard`](https://github.com/feross/standard).

## Why

For some reason, I really like code that looks like:

```js
for(var i = 0; i < N; i++) {

  if(i % 2) {
    // something
  }
  else if(i % 3) {
    // some other thing
  }
  else {
    // or that
  }
}
```

and I enjoy playing around with various eslint
[rules](http://eslint.org/docs/rules/) from time to time.

## But really, why?

I (still) sometimes write ES5 in some projects, and I want my linting tool
to fail immediately on ES6 (or even ES7) tokens and sugar. For some reason,
`standard` assumes that everybody writes bleeding edge JS, unfortunately.

Luckily, the [`standard-engine`](https://github.com/flet/standard-engine) module
makes is very easy to write custom linters like this thing here. :beers:

## Possible new rules down the road

- http://eslint.org/docs/rules/camelcase
- http://eslint.org/docs/rules/array-bracket-spacing
- http://eslint.org/docs/rules/object-curly-spacing
