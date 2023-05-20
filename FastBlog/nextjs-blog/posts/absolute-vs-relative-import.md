---
title: 'Absolute vs Relative Imports'
date: '2023-05-20'
---

## What are Absolute and Relative import?


### Relative Import
```js
import Button from '../../../components/button';
```

### Absolute Import
```js
import Button from 'components/button';
```

### Module Aliases Import
```js
import Button from '@components/button';
```

### How to Absolute import?
`baseUrl` configuration option allows us to import directly from the root of the project.
Goto `tsconfig.json`(or create) at the root of the folder and add this:

```js
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```
This will allow us to absolute import object:
```js
import Button from 'components/button';
```

### How to Module Aliases import?
`baseUrl` configuration option allows us to import directly from the root of the project.
Goto `tsconfig.json`(or create) at the root of the folder and add this:

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    path:{
        "@/components/*": ["components/*"]
    }
  }
}
```
This will allow us to absolute import object:
```js
import Button from '@components/button';
```
