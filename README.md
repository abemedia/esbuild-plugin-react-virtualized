# esbuild-plugin-react-virtualized [![npm](https://img.shields.io/npm/v/esbuild-plugin-react-virtualized.svg)](https://npmjs.com/package/esbuild-plugin-react-virtualized)

This ESBuild plugin fixes the following issue in [react-virtualized](https://github.com/bvaughn/react-virtualized):

> ERROR: No matching export in "node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js" for import "bpfrpt_proptype_WindowScroller"

## Install

```sh
yarn add -D esbuild-plugin-react-virtualized
```

## Usage

### ESBuild

```js
import * as esbuild from 'esbuild'
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'

await esbuild.build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [fixReactVirtualized],
})
```

### Vite

```js
// vite.config.js
import { defineConfig } from 'vite'
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
})
```
