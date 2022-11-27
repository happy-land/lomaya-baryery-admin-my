import { CSSProperties, FC } from 'react';

interface IStackProps {
  numberOfChildren?: number;
  spacing?: number;
  direction: 'row' | 'column';
  wrap?: boolean;
}

export const Stack: FC<IStackProps> = ({
  children,
  numberOfChildren = 4,
  spacing = 2,
  direction = 'row',
  wrap = false,
}) => {

  const style: CSSProperties = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
};
