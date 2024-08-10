# unzip
> unzip tools based on zip-lib.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/unzip
```

## usage
```js
import unzip from '@jswork/unzip';

await unzip({
  source: '__tests__/dist.zip',
  target: '__tests__/test123'
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/unzip/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/unzip
[version-url]: https://npmjs.org/package/@jswork/unzip

[license-image]: https://img.shields.io/npm/l/@jswork/unzip
[license-url]: https://github.com/afeiship/unzip/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/unzip
[size-url]: https://github.com/afeiship/unzip/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/unzip
[download-url]: https://www.npmjs.com/package/@jswork/unzip
