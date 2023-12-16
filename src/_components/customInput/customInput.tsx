import React, {FC} from "react";
import styles from "./customInput.module.scss";
import { TextField } from "@mui/material";

export const CustomInput:FC = () => {
    return <TextField id="filled-basic" label="Filled" variant="filled" fullWidth/>
}