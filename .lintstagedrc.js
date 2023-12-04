module.exports = {
  // Lint and Pretify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `yarn lint --fix . ${filenames.join('--file')}`
  ]
}
