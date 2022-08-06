// stitches.config.ts
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      'neutral-darkest': '#212121',
      'neutral-medium': '#777777',
      'label-input': '#cccccc',
      'border-input': '#E7E7E7',
      'placeholder-input': '#E0E7EE',
      'border-input-focus': '#a43287',
      'border-input-error': '#f30f30',
      'label-input-error': '#f30f30',
      'background-button': '#FF6C00',
      'background-hover-button': '#D45A00',
      'shadow-button': '#D45A00',
      'white-color': '#ffffff'
    }
  },
  media: {
    desktop: '(min-width: 1200px)',
    tablet: '(min-width: 768px)'
  },
  utils: {}
})
