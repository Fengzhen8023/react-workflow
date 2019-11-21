module.exports = {
  presets: [
    ['@babel/preset-env', 
      { exclude: ["@babel/plugin-transform-classes"] }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: "css"
    }],
    ['@babel/plugin-transform-typescript', { legacy: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import'
  ]
}