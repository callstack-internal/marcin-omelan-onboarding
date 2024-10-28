module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@api': './src/api',
        '@components': './src/components',
        '@schema': './src/schema',
        '@screens': './src/screens',
        '@utils': './src/utils',
        '@specs': './src/specs',
      },
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.ios.js',
        '.android.js',
        '.ios.ts',
        '.android.ts',
        '.ios.tsx',
        '.android.tsx',
      ],
    }],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
