import { readFile } from 'node:fs/promises'
import type { Plugin } from 'esbuild'

const filter = /react-virtualized[/\\]dist[/\\]es[/\\]WindowScroller[/\\]utils[/\\]onScroll\.js$/
const broken = /import { bpfrpt_proptype_WindowScroller } from ['"]\.\.\/WindowScroller\.js['"];/

const reactVirtualized: Plugin = {
  name: 'esbuild-plugin-react-virtualized',
  setup({ onLoad }) {
    onLoad({ filter }, async ({ path }) => {
      const code = await readFile(path, 'utf8')
      return { contents: code.replace(broken, '') }
    })
  },
}

export default reactVirtualized
