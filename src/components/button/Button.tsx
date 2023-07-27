import { ButtonHTMLAttributes, useEffect, useState } from 'react';

const variants = ['solid', 'outline', 'soft'];
const sizes = ['large', 'medium', 'small'];
const colors = ['indigo', 'blue'];

type color = 'indigo' | 'blue';
type size = 'large' | 'medium' | 'small';
type variant = 'solid' | 'outline' | 'soft';

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
  solidblue:
    'text-white bg-blue-500 hover:bg-blue-600 hover:active:bg-blue-700',
  solidindigo:
    'text-white bg-indigo-500 hover:bg-indigo-600 hover:active:bg-indigo-700',
  outlineindigo:
    'text-indigo-500 border border-indigo-500 bg-white hover:bg-indigo-50 hover:active:bg-indigo-100',
  outlineblue:
    'text-blue-500 border border-blue-500 bg-white hover:bg-blue-50 hover:active:bg-blue-100',
  softindigo:
    'text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:active:bg-indigo-200',
  softblue:
    'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:active:bg-blue-200',
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
    const _variant = variants.includes(variant) ? variant : 'solid';
    const _color = colors.includes(color)
      ? colorOptions[`${_variant}${color}`]
      : colorOptions[`${_variant}indigo`];
    const _size = sizes.includes(size) ? sizeOptions[size] : sizeOptions.medium;
    const _block = block ? 'w-full' : '';
    const _rounded = rounded ? 'rounded-full' : 'rounded-md';

    const css = `box-border flex font-semibold justify-center items-center gap-2 transition-all ${_color} ${_size} ${_block} ${_rounded}`;

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
