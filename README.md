# Tooltip-vue

> A simple and lightweight tooltip library for Vue

Vue wrapper for [@ionited/tooltip](https://github.com/ionited/tooltip). Compatible with Vue 3 and Ionic Vue

## Quick start

Choose your favorite option below:

### Install with NPM

```
npm i @ionited/tooltip-vue
```

### Get from UNPKG

[https://unpkg.com/@ionited/tooltip-vue@latest/dist/index.js](https://unpkg.com/@ionited/tooltip-vue@latest/dist/indext.js)

---

## Usage

To basic usage you can simply call:

```html
<template>
  <button v-tooltip title="Hello World!"></button>
</template>
```

Local import:

```ts
import { tooltip } from '@ionited/tooltip-vue';

export default {
  ...
  directives: { tooltip },
  ...
}
```

or global import:

```ts
import { tooltip } from '@ionited/tooltip-vue';

const app = createApp(App)
.directive('tooltip', tooltip);
```

See more [@ionited/tooltip](https://github.com/ionited/tooltip) 

## License

Copyright (c) 2021 Ion. Licensed under [Mit License](LICENSE).

[https://ionited.io](https://ionited.io)
