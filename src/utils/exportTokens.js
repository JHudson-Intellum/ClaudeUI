/* ==========================================================================
   Token JSON Export — ID.s Design System
   Builds a structured JSON object from all foundational tokens.
   ========================================================================== */

const tokens = {
  $schema: 'https://design-tokens.org',
  name: 'ID.s Design System',
  version: '1.0.0',

  color: {
    grey: {
      0: '#000000', 10: '#141516', 20: '#212529', 30: '#343a40',
      40: '#495057', 50: '#6c757d', 60: '#adb5bd', 70: '#ced4da',
      80: '#dee2e6', 90: '#e9ecef', 100: '#f8f9fa', 120: '#fcfcfc', 200: '#ffffff',
    },
    blue: {
      10: '#0d172b', 20: '#102860', 30: '#113692', 40: '#1244ce',
      50: '#3168f6', 60: '#4783fa', 70: '#70a9ff', 80: '#add3ff',
      90: '#d6ebff', 100: '#f5faff',
    },
    red: {
      10: '#310c0d', 20: '#541214', 30: '#82171b', 40: '#b91d22',
      50: '#e5484d', 60: '#f06a71', 70: '#f9949b', 80: '#ffbdc2',
      90: '#ffdbdf', 100: '#fff0f2',
    },
    green: {
      10: '#113619', 20: '#1c5427', 30: '#276d35', 40: '#368746',
      50: '#46a758', 60: '#75cc85', 70: '#a6e3b1', 80: '#cbf1d2',
      90: '#e2f8e6', 100: '#f2fcf4',
    },
    amber: {
      10: '#442404', 20: '#693a07', 30: '#96540d', 40: '#d17710',
      50: '#f5892b', 60: '#f6a64c', 70: '#fcc179', 80: '#ffdaad',
      90: '#ffedd6', 100: '#fff9f0',
    },
    ai: {
      5: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.05) 12.94%, rgba(255, 123, 202, 0.05) 95.36%)',
      10: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.1) 12.94%, rgba(255, 123, 202, 0.1) 95.36%)',
      20: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.2) 12.94%, rgba(255, 123, 202, 0.2) 95.36%)',
      40: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.4) 12.94%, rgba(255, 123, 202, 0.4) 95.36%)',
      50: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.5) 12.94%, rgba(255, 123, 202, 0.5) 95.36%)',
      60: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.6) 12.94%, rgba(255, 123, 202, 0.6) 95.36%)',
      70: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.7) 12.94%, rgba(255, 123, 202, 0.7) 95.36%)',
      80: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.8) 12.94%, rgba(255, 123, 202, 0.8) 95.36%)',
      90: 'linear-gradient(39.34deg, rgba(49, 104, 246, 0.9) 12.94%, rgba(255, 123, 202, 0.9) 95.36%)',
      100: 'linear-gradient(39.34deg, rgb(49, 104, 246) 12.94%, rgb(255, 123, 202) 95.36%)',
    },
    whiteAlpha: {
      0: '#ffffff00', 1: '#ffffff00', 3: '#ffffff08', 5: '#ffffff0d',
      10: '#ffffff1a', 15: '#ffffff26', 20: '#ffffff33', 30: '#ffffff4d',
      40: '#ffffff66', 50: '#ffffff80', 60: '#ffffff99', 70: '#ffffffb2',
      80: '#ffffffcc', 90: '#ffffffe5', 95: '#fffffff2', 100: '#ffffff',
    },
    blackAlpha: {
      0: '#00000000', 1: '#00000000', 3: '#00000008', 5: '#0000000d',
      10: '#0000001a', 15: '#00000026', 20: '#00000033', 30: '#0000004d',
      40: '#00000066', 50: '#00000080', 60: '#00000099', 70: '#000000b2',
      80: '#000000cc', 90: '#000000e5', 95: '#000000f2', 100: '#000000',
    },
  },

  colorDark: {
    grey: {
      0: '#ffffff', 10: '#f8f9fa', 20: '#f8f9fa', 30: '#e9ecef',
      40: '#dee2e6', 50: '#ced4da', 60: '#adb5bd', 70: '#6c757d',
      80: '#495057', 90: '#343a40', 100: '#212529', 120: '#141516', 200: '#000000',
    },
    blue: {
      10: '#f5faff', 20: '#cce2ff', 30: '#9ac2fe', 40: '#669afa',
      50: '#3168f6', 60: '#1244ce', 70: '#113692', 80: '#102860',
      90: '#0f1e3e', 100: '#0d172b',
    },
    red: {
      10: '#ffe5e9', 20: '#ffadb6', 30: '#fc838d', 40: '#f76469',
      50: '#e5484d', 60: '#b91d22', 70: '#82171b', 80: '#5e1214',
      90: '#3f0d0f', 100: '#290a0b',
    },
    green: {
      10: '#eafbed', 20: '#a8e6b3', 30: '#7dd48d', 40: '#5fc471',
      50: '#46a758', 60: '#368746', 70: '#266432', 80: '#194822',
      90: '#113619', 100: '#0b2811',
    },
    amber: {
      10: '#fff2e0', 20: '#ffdeb3', 30: '#ffc885', 40: '#f8b262',
      50: '#f5892b', 60: '#b4660e', 70: '#7f470b', 80: '#5b3206',
      90: '#3f2103', 100: '#2d1701',
    },
  },

  typography: {
    fontFamily: {
      display: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
      mono: "'Sometype Mono', monospace",
      support: "'Inter', sans-serif",
      copy: "'Source Serif Pro', serif",
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      bold: 700,
    },
    display: {
      40: { fontSize: '40px', lineHeight: '56px', letterSpacing: '-1.6px' },
      32: { fontSize: '32px', lineHeight: '40px', letterSpacing: '-1.28px' },
      24: { fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.72px' },
      20: { fontSize: '20px', lineHeight: '24px', letterSpacing: '-0.4px' },
      18: { fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.36px' },
      16: { fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.32px' },
      14: { fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.28px' },
    },
    body: {
      18: { fontSize: '18px', lineHeight: '28px' },
      16: { fontSize: '16px', lineHeight: '24px' },
      14: { fontSize: '14px', lineHeight: '20px' },
      12: { fontSize: '12px', lineHeight: '18px' },
    },
    mono: {
      14: { fontSize: '14px', lineHeight: '18px' },
      12: { fontSize: '12px', lineHeight: '16px' },
      10: { fontSize: '10px', lineHeight: '12px' },
    },
    support: {
      16: { fontSize: '16px', lineHeight: '20px' },
      14: { fontSize: '14px', lineHeight: '18px' },
      12: { fontSize: '12px', lineHeight: '16px' },
      10: { fontSize: '10px', lineHeight: '12px' },
    },
    copy: {
      18: { fontSize: '18px', lineHeight: '28px' },
    },
  },

  sizing: {
    tshirt: {
      '4xs': '1px', '3xs': '2px',
      '2xs-border': '3px', '2xs': '4px',
      'xs-border': '7px', xs: '8px',
      'sm-border': '11px', sm: '12px',
      'md-border': '15px', md: '16px',
      'lg-border': '19px', lg: '20px',
      'xl-border': '23px', xl: '24px',
      '2xl': '32px', '3xl': '36px', '4xl': '40px',
      '5xl': '44px', '6xl': '48px', '7xl': '64px', '8xl': '96px',
    },
    raw: {
      0: '0px', 0.25: '1px', 0.5: '2px', 0.75: '3px',
      1: '4px', 1.25: '5px', 1.5: '6px', 1.75: '7px',
      2: '8px', 2.5: '10px', 3: '12px', 3.5: '14px', 3.75: '15px',
      4: '16px', 4.75: '19px', 5: '20px', 5.75: '23px',
      6: '24px', 7: '28px', 8: '32px', 9: '36px',
      10: '40px', 11: '44px', 12: '48px', 14: '56px',
      16: '64px', 20: '80px', 24: '96px', 28: '112px',
      32: '128px', 36: '144px', 40: '160px', 44: '176px',
      48: '192px', 52: '208px', 56: '224px', 60: '240px',
      64: '256px', 72: '288px', 80: '320px', 96: '384px',
      infinite: '9999px',
    },
  },

  borderRadius: {
    none: '0px', xs: '2px', sm: '4px', md: '6px', lg: '8px',
    default: '10px', xl: '12px', '2xl': '16px', '3xl': '24px', full: '9999px',
  },

  elevation: {
    '2xs': '0 1px 0 0 #00000000',
    xs: '0 1px 0 0 #00000000',
    sm: '0 1px 2px -1px #0000001a, 0 1px 3px 0 #0000001a',
    md: '0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a',
    lg: '0 4px 6px -4px #0000001a, 0 10px 15px -3px #0000001a',
    xl: '0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a',
    '2xl': '0 25px 50px -12px #0000001a',
  },

  borderWidth: {
    xs: '1px', sm: '2px', md: '3px', lg: '4px',
  },

  breakpoint: {
    sm: '0px', md: '768px', lg: '992px', xl: '1280px',
  },

  semantic: {
    surface: {
      primary: 'grey-200', secondary: 'grey-120', tertiary: 'grey-100',
      inversePrimary: 'grey-0', inverseSecondary: 'grey-10',
    },
    border: {
      primary: 'grey-90',
    },
    card: {
      background: 'surface-primary', primaryText: 'grey-10',
      secondaryText: 'grey-40', border: 'border-primary',
    },
    button: {
      brand: { background: 'blue-50', hover: 'blue-40', text: 'grey-100' },
      default: { background: 'grey-20', hover: 'grey-40', text: 'grey-100' },
      secondary: { background: 'grey-80', hover: 'grey-70', text: 'grey-10' },
      disabled: { background: 'grey-90', text: 'grey-60' },
      border: { background: 'white-alpha-001', hover: 'grey-80', text: 'grey-20', border: 'grey-60' },
      ghost: { text: 'grey-10', hover: 'grey-90' },
    },
    messaging: {
      default: {
        max: { background: 'grey-10', foreground: 'grey-100', border: 'grey-100' },
        mid: { background: 'grey-90', foreground: 'grey-10', border: 'grey-90' },
        min: { background: 'white-alpha-0', foreground: 'grey-10', border: 'grey-90' },
      },
      success: {
        max: { background: 'green-30', foreground: 'green-100', border: 'green-30' },
        min: { background: 'green-90', foreground: 'green-30', border: 'green-50' },
      },
      destructive: {
        max: { background: 'red-40', foreground: 'red-100', border: 'red-40' },
        min: { background: 'red-100', foreground: 'red-40', border: 'red-50' },
      },
      alert: {
        max: { background: 'amber-30', foreground: 'amber-100', border: 'amber-30' },
        min: { background: 'amber-100', foreground: 'amber-20', border: 'amber-50' },
      },
      brand: {
        max: { background: 'blue-50', foreground: 'white-alpha-100', border: 'blue-50' },
        min: { background: 'white-alpha-0', foreground: 'blue-50', border: 'blue-50' },
      },
    },
  },
}

export function downloadTokensJSON() {
  const json = JSON.stringify(tokens, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'ids-design-tokens.json'
  a.click()
  URL.revokeObjectURL(url)
}

export default tokens
