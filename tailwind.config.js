/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
]
export const prefix = ''
export const theme = {
  container: {
    padding: '2rem',
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
  },
  extend: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    fontSize: {
      lg: '18px',
      '5xl': 'px',
      '6xl': '64px',
      '7xl': '70px',
      '8xl': '112px',
      '10xl': '140px',
    },
    backgroundImage: {
      rain: "url('/img/rain.png')",
      partial: "url('/img/partial.png')",
      storm: "url('/img/storm.png')",
      sunny: "url('/img/sunny.png')",
    },
    spacing: {
      22: '88px',
      54: '212px',
      100: '440px',
    },
    colors: {
      lightDefault: '#3F3F46',
      lightEmphasis: '#252422',
      lightSubtle: '#6B6169',
      lightAccentPink: '#DFA1A1',
      lightAccentBlue: '#6D97CA',
      darkDefault: '#E7E4E6',
      darkEmphasis: '#F5F4F5',
      darkSubtle: '#D3CFD2',
      darkAccentPink: '#FEE6E8',
      darkAccentBlue: '#C8CFE7',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
}
export const plugins = [require('tailwindcss-animate')]
