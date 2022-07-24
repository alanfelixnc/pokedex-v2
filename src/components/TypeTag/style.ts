import styled from 'styled-components';

export const TypeWrapper = styled.div`
  margin: 0 8px;
`;

export const TypeTag = styled.span<{ color: string }>`
  color: ${({ theme }) => theme.color.text.onPrimary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${(props) => props.color};
  padding: 4px;
  border-radius: 4px;
`;

export const TypeBadge = styled.img`
  height: 32px;
`;
