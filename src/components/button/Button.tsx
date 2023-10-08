import { ButtonHTMLAttributes, forwardRef } from 'react';
import { getButtonClasses } from '../../utils/helpers';
import { Color, Size, Variant } from '../../utils/types';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: Color;
  block?: boolean;
  size?: Size;
  rounded?: boolean;
  variant?: Variant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  props: Props,
  ref
) {
  const {
    title = 'Button',
    color = 'indigo',
    block = false,
    size = 'medium',
    rounded = false,
    variant = 'solid',
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      className={getButtonClasses(variant, size, color, block, rounded)}
      {...rest}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
});

export default Button;
