import styled from 'styled-components';

export const Outer = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
`;
export const Inner = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
`;
export const Subject = styled.div`
  overflow: hidden;
  color: #101010;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
`;
export const Contents = styled.div`
  display: -webkit-box;
  width: 240px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #777;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
`;
export const Comment = styled.div`
  width: 13px;
  height: 13px;
`;
export const CommentCount = styled.div`
  color: #999;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

export const CommentIcon = {
  name: '말풍선',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.50016 1.08331C9.49168 1.08331 11.9168 3.50844 11.9168 6.49998C11.9168 9.4915 9.49168 11.9166 6.50016 11.9166C5.62358 11.9166 4.77648 11.7079 4.01546 11.3143L1.94314 11.8924C1.58298 11.993 1.20948 11.7826 1.10891 11.4224C1.07562 11.3033 1.07564 11.1772 1.10893 11.0582L1.68724 8.98742C1.29278 8.22573 1.0835 7.37764 1.0835 6.49998C1.0835 3.50844 3.50862 1.08331 6.50016 1.08331ZM6.50016 1.89581C3.95735 1.89581 1.896 3.95717 1.896 6.49998C1.896 7.29601 2.09791 8.06182 2.47722 8.74113L2.55882 8.88721L1.9561 11.0453L4.1155 10.4429L4.2615 10.5243C4.9402 10.9027 5.7051 11.1041 6.50016 11.1041C9.04296 11.1041 11.1043 9.04278 11.1043 6.49998C11.1043 3.95717 9.04296 1.89581 6.50016 1.89581ZM4.73975 7.04165H7.17632C7.40068 7.04165 7.58257 7.22354 7.58257 7.4479C7.58257 7.65357 7.42972 7.82354 7.23141 7.85046L7.17632 7.85415H4.73975C4.51538 7.85415 4.3335 7.67226 4.3335 7.4479C4.3335 7.24223 4.48633 7.07225 4.68462 7.04533L4.73975 7.04165ZM4.73975 5.14581H8.26302C8.48737 5.14581 8.66927 5.3277 8.66927 5.55206C8.66927 5.75773 8.51641 5.92771 8.31816 5.95463L8.26302 5.95831H4.73975C4.51538 5.95831 4.3335 5.77642 4.3335 5.55206C4.3335 5.34639 4.48633 5.17642 4.68462 5.14952L4.73975 5.14581Z"
        fill="#999999"
      />
    </svg>
  ),
};
export const BookmarkIcon = {
  name: '북마크',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M3.35347 11.838C3.08472 12.0313 2.70996 11.8393 2.70996 11.5082V3.38542C2.70996 2.41316 3.49812 1.625 4.47038 1.625H8.53199C9.50423 1.625 10.2924 2.41316 10.2924 3.38542V11.5082C10.2924 11.8393 9.91763 12.0313 9.64891 11.838L6.50118 9.57331L3.35347 11.838ZM9.47991 3.38542C9.47991 2.8619 9.05552 2.4375 8.53199 2.4375H4.47038C3.94686 2.4375 3.52246 2.8619 3.52246 3.38542V10.7155L6.26393 8.74304C6.40568 8.6411 6.59673 8.6411 6.73843 8.74304L9.47991 10.7155V3.38542Z"
        fill="#999999"
      />
    </svg>
  ),
};

export const PrePic = styled.div`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  background-color: yellow;
`;
