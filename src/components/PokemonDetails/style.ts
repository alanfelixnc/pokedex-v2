import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 24px;
  margin: 24px;
  color: ${({ theme }) => theme.color.text.onPrimary};
  padding-top: 48px;
  margin-bottom: 64px;

  @media only screen and (max-width: 1366px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.font.size.title3};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: capitalize;
`;

export const DexNumber = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-left: 8px;
`;

export const Genus = styled.span`
  font-size: ${({ theme }) => theme.font.size.title1};
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Artwork = styled.img`
  width: 400px;
  margin: 24px;

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
  font-size: ${({ theme }) => theme.font.size.title1};
  margin-top: 24px;
`;

export const DimensionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Dimension = styled.span`
  font-size: ${({ theme }) => theme.font.size.body1};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-transform: capitalize;
`;

export const AbilitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Ability = styled(Dimension)`
  text-transform: capitalize;
  ::before {
    content: '•';
    margin-right: 12px;
  }
`;

export const HiddenBadge = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.light};
  background-color: ${({ theme }) => theme.color.gray.default};
  color: ${({ theme }) => theme.color.text.onSecondary};
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 8px;
`;

export const VarietiesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 18px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto auto;
  }
`;

export const Variety = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VarietyImage = styled.img`
  width: 100px;
`;

export const VarietyName = styled(Dimension)`
  margin-top: 12px;
  text-align: center;
`;
