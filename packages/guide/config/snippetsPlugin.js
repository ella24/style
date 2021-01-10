const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const glob = require('glob');
const Ajv = require('ajv').default;

const SNIPPETS_DIR = path.resolve(__dirname, '../content/snippets/');

const SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    categories: {
      type: 'array',
      items: { type: 'string' },
    },
  },
  required: ['title', 'description'],
};

const validMetadata = ({ data }) => {
  const ajv = new Ajv();
  return ajv.validate(SCHEMA, data);
};

const snippets = {};

const snippetsFiles = glob.sync('**/*.md', { cwd: SNIPPETS_DIR });

for (const file of snippetsFiles) {
  const filePath = path.resolve(SNIPPETS_DIR, file);
  const contents = fs.readFileSync(filePath);
  const data = matter(contents);
  if (!validMetadata(data)) continue;

  const relativePath = path.relative(SNIPPETS_DIR, filePath);
  const fileSlug = relativePath.replace('.md', '').replace('/', '-');
  snippets[fileSlug] = data;
}

const virtualModules = new VirtualModulesPlugin({
  'node_modules/Snippets.js': `module.exports = ${JSON.stringify(snippets)};`,
});

module.exports = virtualModules;
