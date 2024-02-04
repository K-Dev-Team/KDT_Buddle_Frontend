type Props = {
  children?: React.ReactNode;
  marginLeft: string;
};

function RowSpace({ children, marginLeft }: Props) {
  return <div style={{ marginLeft: marginLeft ? marginLeft + 'px' : '' }}>{children}</div>;
}

export default RowSpace;
