# Color Log

Helps you to colorize you logs

<img width="446" alt="Screenshot 2022-06-06 at 22 24 32" src="https://user-images.githubusercontent.com/10683971/172180636-e63ad174-3d81-4d60-924c-2ef060ed1a73.png">

## Installation and usage

In terminal/console type:

```
yarn install simple-string-extensions
```

Somewhere early in code use:

```typescript
import 'simple-string-extensions';
```

Finally in code:

```typescript
console.log('Hello World'.white())
console.log('Hello World'.yellow())
console.log('Hello World'.red())
console.log('Hello World'.green())
console.log('Hello World'.blue())
console.log('Hello World'.cyan())

console.log('Hello World'.redBg())
console.log('Hello World'.greenBg())
console.log('Hello World'.yellowBg())
console.log('Hello World'.blueBg())
console.log('Hello World'.purpleBg())
console.log('Hello World'.cyanBg())
```