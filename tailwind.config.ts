module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#B000E3',
          ".fill-logo-primary": {
            fill: '#B000E3'
          },
          ".fill-logo-secondary": {
            fill: '#FFFFFF'
          },
          ".bg-logo": {
            'background-color': '#020323'
          }
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#B000E3',
          ".fill-logo-primary": {
            fill: '#B000E3'
          },
          ".fill-logo-secondary": {
            fill: '#020323'
          },
          ".bg-logo": {
            'background-color': '#FFFFFF'
          }
        },
        cyberpunk: {
          ...require('daisyui/src/colors/themes')['[data-theme=cyberpunk]'],
          ".fill-logo-primary": {
            fill: '#B000E3'
          },
          ".fill-logo-secondary": {
            fill: '#020323'
          },
          ".bg-logo": {
            'background-color': '#FFFFFF'
          }
        },
        synthwave: {
          ...require('daisyui/src/colors/themes')['[data-theme=synthwave]'],
          ".fill-logo-primary": {
            fill: '#B000E3'
          },
          ".fill-logo-secondary": {
            fill: '#020323'
          },
          ".bg-logo": {
            'background-color': '#FFFFFF'
          }
        },
        retro: {
          ...require('daisyui/src/colors/themes')['[data-theme=retro]'],
          ".fill-logo-primary": {
            fill: '#B000E3'
          },
          ".fill-logo-secondary": {
            fill: '#020323'
          },
          ".bg-logo": {
            'background-color': '#FFFFFF'
          }
        }
      },
    ]
  },
  plugins: [require('daisyui')],
};
