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

const RowStyle = styled.button<Props>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};
  :has(.col) {
    flex-grow: 1;
  }
  background-color: inherit;
  border: 0px;
`;

export default function Row({
  children,
  flexBasis,
  alignItems = 'center',
  justifyContent,
  gap = 5,
  flexGrow,
  border = false,
  style,
}: Props) {
  return (
    <RowStyle className="row" style={{ flexBasis, gap, alignItems, justifyContent, ...style }}>
      {children}
    </RowStyle>
  );
}
