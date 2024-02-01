import React, {FC, useRef, useState} from 'react';
import styles from './customSelect.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

interface Options {
  text: string;
  value: string;
}

interface Props {
  id: string;
  value: string;
  title: string;
  error: boolean;
  options: Options[];
  onChange: (fieldId: string, value: string) => void;
}

export const CustomSelect: FC<Props> = ({
  id,
  title,
  error,
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>
      <FormControl variant='standard' fullWidth error={error}>
        <InputLabel
          id={`${id}-label`}
          onClick={handleOpen}
          onBlur={handleClose}
          sx={{
            marginTop: '19px',
            marginLeft: '29px',
            zIndex: 2,
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={(event) => {
            onChange(id, event.target.value);
          }}
          label={title}
          onOpen={handleOpen}
          onClose={handleClose}
          open={open}
          IconComponent={() => (
            <img
              src='assets/icons/arrowUp.svg'
              alt='Arrow icon'
              style={{ transform: open ? '' : 'rotate(180deg)', position: "absolute", right: 16, zIndex: -1 }}
            />
          )}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {options.map((item) => (
            <MenuItem value={item.value} key={item.text}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
        {
          error && <FormHelperText>Выберите значение</FormHelperText>
        }
      </FormControl>
    </div>
  );
};
