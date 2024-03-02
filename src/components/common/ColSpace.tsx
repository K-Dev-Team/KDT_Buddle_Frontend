import { CSSProperties } from 'styled-components';

type Props = {
  children?: React.ReactNode;
  marginTop: string;
  style?: React.CSSProperties;
};
function ColSpace({ children, marginTop, style }: Props) {
  return <div style={{ marginTop: marginTop ? marginTop + 'px' : '', ...style }}>{children}</div>;
}

export default ColSpace;
