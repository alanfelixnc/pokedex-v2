import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: ${({ theme }) => theme.font.size.body1};
`;

export const Genderless = styled.span`
  padding: 12px;
  background-color: ${({ theme }) => theme.color.gray.light};
  color: ${({ theme }) => theme.color.text.onSecondary};
  font-weight: ${({ theme }) => theme.font.weight.light};
  border-radius: 50%;
`;

export const Gender = styled(Genderless)<{ gender: 'm' | 'f' }>`
  background-color: ${({ gender }) => (gender === 'f' ? '#ff49b6' : '#498eff')};
`;
