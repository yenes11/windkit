import { getChipClasses } from '../../utils/helpers';
import { Color, Size, Variant } from '../../utils/types';

interface Props {
  label: string;
  size?: Size;
  color?: Color;
  variant?: Variant;
  rounded?: boolean;
}

function Chip(props: Props) {
  const {
    label,
    variant = 'solid',
    size = 'medium',
    color = 'indigo',
    rounded = false,
  } = props;

  console.log(color);

  return (
    <span className={getChipClasses(variant, size, color, rounded)}>
      {label}
    </span>
  );
}

export default Chip;
