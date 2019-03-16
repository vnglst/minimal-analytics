# Minimal Google Analytics

Minimal analytics is a Google Analytics replacement created by [David Künnen](https://davidkunnen.com/). This is an npm package of that code snippet.

I created this package for use in my personal projects. Feel free to do the same, PR's with improvements are welcome.

Description, see project page: https://minimalanalytics.com/

## Usage

Add the npm module using either yarn or npm:

`yarn add minimal-analytics`

And somewhere in your JavaScript entry point:

```js

import { initialize } from 'minimal-analytics'

// other imports and code

initialize(window, 'UA-XXXXXXXXX-X', {
  anonymizeIp: true,
  colorDepth: true,
  characterSet: true,
  screenSize: true,
  language: true
})
 ```
 
 That's it, you're all set. 🎉
 
