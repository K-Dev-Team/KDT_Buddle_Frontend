import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  width?: string | number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexBasis?: number | string;
  flexGrow?: number;
  gap?: number;
  border?: boolean;
};

const ColStyle = styled.button<Props>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};
  background-color: inherit;
  border: 0px;
`;

export default function Col({
  children,
  flexBasis,
  width,
  alignItems,
  justifyContent,
  gap = 5,
  flexGrow,
  border = false,
  style,
}: Props) {
  return (
    <ColStyle className="col" style={{ flexBasis, gap, justifyContent, alignItems, ...style }}>
      {children}
    </ColStyle>
  );
}
