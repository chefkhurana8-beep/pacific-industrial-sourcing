import designSystem from './design-system/tailwind.config.js'

/**
 * Root Tailwind config.
 *
 * The theme lives in design-system/tailwind.config.js and is the source of
 * truth for the PIS brand. This file only supplies the content paths for the
 * app — edit the theme there, not here.
 */
export default {
  ...designSystem,
  content: ['./index.html', './src/**/*.{js,jsx}'],
}
