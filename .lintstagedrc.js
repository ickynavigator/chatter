const path = require('path');

/** @param {string[] | undefined} filenames */
const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.+(js|json|ts|tsx|css|scss|md)': ['prettier --write'],
};
