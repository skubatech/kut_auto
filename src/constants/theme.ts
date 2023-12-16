import { createTheme } from '@mui/material';
import { COLORS } from './color';

export const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.formField,

          ':before': {
            borderBottomColor: COLORS.formBorder,
          },
          ':after': {
            borderBottomColor: COLORS.formBorder,
          },
          ':hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottomColor: COLORS.formBorder
          }
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
                backgroundColor: COLORS.formField,
                color: COLORS.formPlaceholder,
                ':hover': {
                    backgroundColor: COLORS.formField
                },
                ':hover:not(.Mui-disabled, .Mui-error):before': {
                    borderBottomColor: COLORS.formBorder,
                    // backgroundColor: COLORS.formField
                },

                ':before': {
                    borderBottomColor: COLORS.formBorder
                }, 
                ':after': {
                    borderBottomColor: COLORS.formBorder
                }, 
                '&.Mui-focused': {
                    backgroundColor: COLORS.formField
                }
            }
        }
    }
  },
});
