module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // 之前使用的defineOptions插件
  globals: {
    defineOptions: true
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // 2. 开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    // 组件命名规则
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': ['off']
  }
};
