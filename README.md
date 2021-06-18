## Kata Playground JS

A simple playground to create and test your Katas in Javascript.

> A code kata is an exercise in programming which helps programmers hone their skills through practice and repetition

You can find some katas on sites like [Codewars](https://www.codewars.com/).

### How to use

#### Install the deps

```sh
yarn
```

#### Write your code and tests

All katas are created under `src/<kata-name>` folder, there you'll find the following structure:

```sh
└── your-kata-exercise
    ├── README.md # Add the kata description here
    ├── index.js # Your code
    └── index.spec.js # Your tests
```

#### Test your kata

```sh
# run all tests
yarn test

# run only your kata
yarn test cool-exercise

# run and watch your kata
yarn test:tdd cool-exercise
```
