import GenderRatio from 'components/GenderRatio';
import TypeTag from 'components/TypeTag';
import React from 'react';
import { PokemonDetailsType } from 'types';
import {
  AbilitiesWrapper,
  Ability,
  Artwork,
  DetailsWrapper,
  DexNumber,
  Dimension,
  DimensionsWrapper,
  Genus,
  HiddenBadge,
  Name,
  NameWrapper,
  SectionWrapper,
  Title,
  TypesWrapper,
  VarietiesWrapper,
  Variety,
  VarietyImage,
  VarietyName,
} from './style';

type PokemonDetailsProps = {
  pokemon: PokemonDetailsType | undefined;
};

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <DetailsWrapper>
      {pokemon && (
        <>
          <SectionWrapper>
            <NameWrapper>
              <Name>{pokemon.name}</Name>
              <DexNumber>{`#${pokemon.id}`}</DexNumber>
            </NameWrapper>
            <Genus>{pokemon.genus}</Genus>
            <Artwork alt={pokemon.name} src={pokemon.artwork_url} />
            <TypesWrapper>
              {pokemon.types.map((type) => (
                <TypeTag key={type} type={type} badge>
                  {type}
                </TypeTag>
              ))}
            </TypesWrapper>
          </SectionWrapper>
          <SectionWrapper>
            <Title>Dimensions</Title>
            <DimensionsWrapper>
              <Dimension>Height: {(pokemon.height / 10).toFixed(2)}m</Dimension>
              <Dimension>
                Weight: {(pokemon.weight / 10).toFixed(1)}kg
              </Dimension>
            </DimensionsWrapper>
            <Title>Gender Ratio</Title>
            <GenderRatio ratio={pokemon.gender_ratio} />
            <Title>Abilities</Title>
            <AbilitiesWrapper>
              {pokemon.abilities.map((ability) => (
                <Ability key={ability.name}>
                  {ability.name}
                  {ability.is_hidden && <HiddenBadge>hidden</HiddenBadge>}
                </Ability>
              ))}
            </AbilitiesWrapper>
          </SectionWrapper>
          {pokemon.varieties && (
            <SectionWrapper>
              <Title>Varieties</Title>
              <VarietiesWrapper>
                {pokemon.varieties.map((variety) => (
                  <Variety key={variety.name}>
                    <VarietyImage
                      src={variety.artwork_url || ''}
                      alt={variety.name}
                    />
                    <VarietyName>{variety.name}</VarietyName>
                  </Variety>
                ))}
              </VarietiesWrapper>
            </SectionWrapper>
          )}
          {pokemon.forms && (
            <SectionWrapper>
              <Title>Forms</Title>
              <VarietiesWrapper>
                {pokemon.forms.map((form) => (
                  <Variety key={form.name}>
                    <VarietyImage
                      src={form.artwork_url || ''}
                      alt={form.name}
                    />
                    <VarietyName>{form.name}</VarietyName>
                  </Variety>
                ))}
              </VarietiesWrapper>
            </SectionWrapper>
          )}
        </>
      )}
    </DetailsWrapper>
  );
}
