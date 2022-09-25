import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 8px;
`;

export const Tag = styled.span<{ color: string; badge: boolean }>`
  color: ${({ theme }) => theme.color.text.onPrimary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${(props) => props.color};
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin: 0 8px;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    padding: 0;
    background-color: transparent;
    > span {
      display: none;
    }
  }
`;

export const Badge = styled.img`
  height: 32px;
`;

export const TagBadge = styled(Badge)`
  margin-right: 4px;
`;
