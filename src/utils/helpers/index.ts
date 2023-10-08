import clsx from 'clsx';
import { bool, oneOf, string } from 'prop-types';
import { Color, InputVariant, Size, Variant } from '../types';

export const props = {
  color: oneOf([
    'black',
    'white',
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
  ]),
  title: string,
  block: bool,
};

type TailwindColor =
  | 'black'
  | 'white'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

const buttonColorOptions = {
  solid: {
    blue: 'text-white bg-blue-500 hover:bg-blue-600 hover:active:bg-blue-700',
    indigo:
      'text-white bg-indigo-500 hover:bg-indigo-600 hover:active:bg-indigo-700',
  },
  outline: {
    blue: 'text-blue-500 outline-none ring-1 ring-blue-500 bg-white hover:bg-blue-50 hover:active:bg-blue-100',
    indigo:
      'text-indigo-500 outline-none ring-1 ring-indigo-500 bg-white hover:bg-indigo-50 hover:active:bg-indigo-100',
  },
  soft: {
    blue: 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:active:bg-blue-200',
    indigo:
      'text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:active:bg-indigo-200',
  },
};

const buttonSizeOptions = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2',
  large: 'px-5 py-2 text-xl',
};

const defaultButtonClasses =
  'box-border flex font-semibold justify-center items-center gap-2 transition-all';

export function getButtonClasses(
  variant: Variant,
  size: Size,
  color: Color,
  block: boolean,
  rounded: boolean
) {
  const classVariant = buttonColorOptions[variant] ?? buttonColorOptions.solid;
  const classColor = classVariant[color] ?? classVariant.indigo;
  const classSize = buttonSizeOptions[size] ?? buttonSizeOptions.medium;
  const classBlock = block && 'w-full';
  const classRounded = rounded ? 'rounded-full' : 'rounded-md';

  return [
    defaultButtonClasses,
    classVariant,
    classColor,
    classSize,
    classBlock,
    classRounded,
  ].join(' ');
}

const defaultInputClasses =
  'shadow transition-all outline-none border-0 ring-1 text-gray-600 ring-gray-200 rounded-md w-full hover:ring-gray-300 focus:ring-2 focus:ring-indigo-600';

const inputVariantOptions = {
  outline: 'ring-1 ring-gray-200',
  filled: 'bg-slate-100',
};

const inputSizeOptions = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-2.5 py-1.5',
  large: 'px-3 py-2 text-xl',
};

export function getInputClasses(
  variant: InputVariant,
  size: Size,
  disabled: boolean
) {
  const classVariant =
    inputVariantOptions[variant] ?? inputVariantOptions.outline;
  const classSize = inputSizeOptions[size] ?? inputSizeOptions.medium;
  const classDisabled =
    disabled && 'cursor-not-allowed placeholder:text-gray-300';

  return [classVariant, classSize, classDisabled, defaultInputClasses].join(
    ' '
  );
}

const chipSizeOptions = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-md',
};

const colorOptions = {
  solid: {
    blue: 'text-white bg-blue-500',
    indigo: 'text-white bg-indigo-500',
  },
  outline: {
    blue: 'text-blue-500 outline-none ring-1 ring-blue-500 bg-white',
    indigo: 'text-indigo-500 outline-none ring-1 ring-indigo-500 bg-white',
  },
  soft: {
    blue: 'text-blue-600 bg-blue-50',
    indigo: 'text-indigo-600 bg-indigo-50',
  },
};

const defaultChipClasses = 'font-bold px-2';

export function getChipClasses(
  variant: Variant,
  size: Size,
  color: Color,
  rounded: boolean
) {
  // debugger;
  const classVariant = colorOptions[variant] ?? colorOptions.solid;
  const classColor = classVariant[color] ?? classVariant.indigo;
  const classRounded = rounded ? 'rounded-full' : 'rounded-sm';
  const classSize = chipSizeOptions[size] ?? chipSizeOptions.medium;

  return [defaultChipClasses, classColor, classRounded, classSize].join(' ');
}
