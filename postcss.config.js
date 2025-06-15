import postcssNesting from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssNesting(),
    postcssPresetEnv({
      stage: 1,
      features: {
        'nesting-rules': false,
      },
    }),
    autoprefixer(),
  ],
};
