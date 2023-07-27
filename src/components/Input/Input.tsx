import { InputHTMLAttributes, useEffect, useState } from 'react';

const variants = ['filled', 'outline'];
const sizes = ['small', 'medium', 'large'];

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'filled' | 'outline';
}

const variantOpstions = {
  outline: '',
  filled: 'bg-stale-50',
};

const sizeOptions = {
  small: 'px-2 py-1',
  medium: 'px-2.5 py-1.5',
  large: 'px-3 py-2',
};

function Input(props: Props) {
  const { variant = 'outline', size = 'medium', ...rest } = props;
  const [customClasses, setCustomClasses] = useState('');

  useEffect(() => {
    const _variant = variants.includes(variant)
      ? variantOpstions[variant]
      : variantOpstions.outline;
    const _size = sizes.includes(size);
  }, []);

  return (
    <input
      {...rest}
      placeholder="Enter your email"
      className="bg-slate-50 transition-all outline-none border-0 ring-1 text-gray-600 ring-gray-200 rounded-md w-full hover:ring-gray-300 focus:ring-2 focus:ring-indigo-600"
    />
  );
}

export default Input;
