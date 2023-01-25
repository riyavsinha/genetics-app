import { default as MuiButton } from '@mui/material/Button';

const Button = ({ children, color, variant, ...rest }) => (
  <MuiButton
    color={color ? color : 'primary'}
    variant={variant ? variant : 'contained'}
    {...rest}
  >
    {children}
  </MuiButton>
);

export default Button;
