import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  background-color: var(--white);
  width: 300px;
  color: var(--c-2);
  font-weight: 500;
  border: 1px solid var(--white);
  transition: var(--t-1);

  &:hover {
    border-color: var(--peru);
  }
`;

export const CardPicture = styled.picture`
  display: block;
  width: 100%;
  height: 300px;
  padding: 2px;

  img {
    background-color: #e9ecef;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardSummary = styled.div`
  padding: 16px;
`;

export const CardName = styled.h2`
  font-family: var(--font-roboto-c);
  font-size: 18px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardInfo = styled.div`
  font-size: 14px;

  strong {
    color: var(--peru);
  }
`;
