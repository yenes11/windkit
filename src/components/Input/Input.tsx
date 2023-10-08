import { InputHTMLAttributes, forwardRef } from 'react';
import { getInputClasses } from '../../utils/helpers';

const variants = ['filled', 'outline'];
const sizes = ['small', 'medium', 'large'];

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'filled' | 'outline';
  size?: 'small' | 'medium' | 'large';
  htmlSize?: number | undefined;
}

const variantOpstions = {
  outline: 'ring-1 ring-gray-200',
  filled: 'bg-slate-100',
};

const defaultClasses =
  'shadow transition-all outline-none border-0 text-gray-600 rounded-md w-full hover:ring-gray-300 focus:ring-2 focus:ring-indigo-600';

const sizeOptions = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-2.5 py-1.5',
  large: 'px-3 py-2 text-xl',
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  props: Props,
  ref
) {
  const {
    variant = 'outline',
    disabled = false,
    size = 'medium',
    htmlSize,
    ...rest
  } = props;

  return (
    <input
      ref={ref}
      disabled={disabled}
      size={htmlSize}
      placeholder="Enter your email"
      className={getInputClasses(variant, size, disabled)}
      {...rest}
    />
  );
});

export default Input;
