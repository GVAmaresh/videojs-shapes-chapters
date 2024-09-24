import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#A0AAB4"
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E"
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC"
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
      boxShadow: "0px 1px 2px 0px rgba(255, 255, 255, 0.8)",
    }
  },

  "& .MuiInputBase-root": {
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "0px 1px 2px 0px rgba(255, 255, 255, 0.5)",

    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: "0px 1px 2px 0px rgba(255, 255, 255, 0.3)"
    },

    "&:before": {
      border: "none"
    },
    "&:after": {
      border: "none"
    },

    "&.Mui-error": {
      boxShadow: "0px 1px 2px 0px rgba(220,20,60, 0.5)"
    }
  },

  "& .MuiInputLabel-root": {
    color: "white",

    "&.Mui-focused": {
      color: "white"
    },
    "&.Mui-error": {
      color: "white"
    }
  },

  "& .MuiInputBase-input": {
    backgroundColor: "transparent",
    border: "0px"
  }
}));
