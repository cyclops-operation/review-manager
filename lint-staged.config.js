module.exports = {
  "apps/web/**/*.+(ts|tsx)": [
    () => "pnpm tsc -p apps/web/tsconfig.json --noEmit",
  ],
  "**/*.+(ts|tsx|js|jsx)": ["eslint --fix --cache", "prettier --write"],
}
