/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',
  // prettier-ignore
  importOrder: [
    '^(\w|@\w)', // node_modules
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 10 deep
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 9 deep
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 8 deep
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 7 deep
    '^(\.\./\.\./\.\./\.\./\.\./\.\./)', // 6 deep
    '^(\.\./\.\./\.\./\.\./\.\./)', // 5 deep
    '^(\.\./\.\./\.\./\.\./)', // 4 deep
    '^(\.\./\.\./\.\./)', // 3 deep [../../../]
    '^(\.\./\.\./)', // 2 deep [../../]
    '^(\.\./)', // 1 deep [../]
    '^(\./)', // 0 deep [./]
    '^(\.\/|\.\.\/|@\/|/)', // fallback [./ OR ../ OR @/ OR /]
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
