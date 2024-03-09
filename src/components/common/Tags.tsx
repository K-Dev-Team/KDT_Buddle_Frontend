import styled from 'styled-components';

type Props = {
  tagList?: string[];
};

function Tags({ tagList }: Props) {
  return (
    <Container>
      {tagList?.map((tag: string) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Container>
  );
}

export default Tags;

const Container = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
  gap: 8px;
  margin: 10px 0;
  &&::-webkit-scrollbar {
    display: none;
  }
`;
const Tag = styled.div`
  margin-right: 10;
  padding: '5px 10px';
  border-radius: 5;
  border: 1px solid #502b9d;
  border-radius: 15px;
  font-size: 14px;
  line-height: 170%;
  font-weight: 400;
  padding: 0 10px;
`;
