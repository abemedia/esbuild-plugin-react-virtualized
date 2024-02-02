import { readFile } from 'node:fs/promises'
import { normalize } from 'node:path'
import type { Plugin } from 'esbuild'

const file = 'react-virtualized/dist/es/WindowScroller/utils/onScroll.js'

const filter = new RegExp(normalize(file) + '$')

const reactVirtualized: Plugin = {
  name: 'esbuild-plugin-react-virtualized',
  setup({ onLoad }) {
    onLoad({ filter }, async ({ path }) => {
      const code = await readFile(path, 'utf8')
      const broken = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`
      return { contents: code.replace(broken, '') }
    })
  },
}

export default reactVirtualized
