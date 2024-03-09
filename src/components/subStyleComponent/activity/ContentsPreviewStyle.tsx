import styled from 'styled-components';

export const OutLinContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: scroll;
`;

export const ContentsContainer = styled.div`
  padding: 5px 5px;
  border-radius: 5px;
  width: 40%;
  flex-grow: 1;
  height: 200px;
  cursor: pointer;
`;

export const CoverContainer = styled.div`
  height: 130px;
  background-color: green;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusContainer = styled.div`
  height: auto;
  width: auto;
  background-color: red;
  position: absolute;
  background-color: #101010;
  color: white;
  padding: 5px 5px;
  font-size: 14px;
  text-align: center;
  margin: 5px 0 0 5px;
  border-radius: 5px;
`;
export const BookmarkContainer = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  color: black;
  font-size: 14px;
  text-align: center;
  right: 7px;
  top: 7px;
  border-radius: 5px;
`;
export const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DateContainer = styled.div`
  font-size: 14px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LocationContainer = styled.div`
  font-size: 14px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #838383;
`;
