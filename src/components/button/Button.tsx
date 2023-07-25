import { ButtonHTMLAttributes, useEffect, useState } from 'react';

type color = 'indigo' | 'blue';
type size = 'large' | 'medium' | 'small';
type variant = 'solid' | 'outline';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: color;
  block?: boolean;
  size?: size;
  rounded?: boolean;
  variant?: variant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const colorOptions = {
  blue: 'text-white bg-blue-500 hover:bg-blue-600 hover:active:bg-blue-700',
  indigo:
    'text-white bg-indigo-500 hover:bg-indigo-600 hover:active:bg-indigo-700',
  outlineindigo:
    'text-indigo-500 border border-indigo-500 bg-white hover:bg-indigo-50 hover:active:bg-indigo-100',
  outlineblue:
    'text-blue-500 border border-blue-500 bg-white hover:bg-blue-50 hover:active:bg-blue-100',
};

const sizeOptions = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2',
  large: 'px-5 py-3 text-xl',
};

function Button(props: Props) {
  const [customClasses, setCustomClasses] = useState('');

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

  useEffect(() => {
    let _color = colorOptions.indigo;
    let _size = sizeOptions.medium;
    let _block = '';
    let _rounded = 'rounded-md';

    if (variant === 'outline') {
      if (['indigo', 'blue'].includes(color))
        _color = colorOptions[`outline${color}`];
    } else {
      if (['indigo', 'blue'].includes(color)) _color = colorOptions[color];
    }

    if (['large', 'medium', 'small'].includes(size)) _size = sizeOptions[size];
    if (block) _block = 'w-full';
    if (rounded) _rounded = 'rounded-full';

    const css = `box-border flex items-center gap-2 transition-all ${_color} ${_size} ${_block} ${_rounded}`;

    setCustomClasses(css);
  }, [color, size, block, rounded]);

  return (
    <button className={customClasses} {...rest}>
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
}

export default Button;
