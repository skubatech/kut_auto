import { createTheme } from '@mui/material';
import { COLORS } from './color';

export const THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          height: '70px',
          backgroundColor: COLORS.formField,
          borderRadius: '5px',

          ':before': {
            borderRadius: '5px',
            borderBottomColor: COLORS.formBorder,
          },
          ':after': {
            borderBottomColor: COLORS.formBorder,
          },
          ':hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottomColor: COLORS.formBorder,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Epilogue, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '19px',
          color: COLORS.radioText,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: COLORS.formHover,
          },
          '&.Mui-selected': {
            backgroundColor: COLORS.formHover,
          },
          '&.Mui-selected:hover': {
            backgroundColor: COLORS.formHover,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.formField,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLORS.formPlaceholder,
          zIndex: 1,

          '&.Mui-focused': {
            color: COLORS.formPlaceholder,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: COLORS.formPlaceholder,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          height: '70px',
          backgroundColor: COLORS.formField,
          borderRadius: '5px',
          color: COLORS.formPlaceholder,
          ':hover': {
            backgroundColor: COLORS.formField,
          },
          ':hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottomColor: COLORS.formBorder,
          },
          ':before': {
            borderRadius: '5px',
            borderBottomColor: COLORS.formBorder,
          },
          ':after': {
            borderBottomColor: COLORS.formBorder,
          },
          '&.Mui-focused': {
            backgroundColor: COLORS.formField,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          background: 'rgba(49, 49, 49, 0.30)',
          backdropFilter: 'blur(8.5px)',

          '& .MuiDialog-paper': {
            backgroundColor: COLORS.backgroundDialog,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          paddingRight: 0
        }
      }
    }
  },
});
