import React from 'react';
import { TypeBadge, TypeTag, TypeWrapper } from './style';

type TypeProps = {
  type: string;
};

export function Tag({ type }: TypeProps) {
  function getBackgroundColor() {
    switch (type.toLowerCase()) {
      case 'bug':
        return '#84c400';
      case 'dark':
        return '#5c5266';
      case 'dragon':
        return '#006fc9';
      case 'electric':
        return '#fbd200';
      case 'fairy':
        return '#fb8aec';
      case 'fighting':
        return '#e12c6a';
      case 'fire':
        return '#ff983f';
      case 'flying':
        return '#8aace4';
      case 'ghost':
        return '#4c6ab3';
      case 'grass':
        return '#35bf4b';
      case 'ground':
        return '#e97333';
      case 'ice':
        return '#4cd2c1';
      case 'normal':
        return '#929ba3';
      case 'poison':
        return '#b667cf';
      case 'psychic':
        return '#ff6676';
      case 'rock':
        return '#c9b786';
      case 'steel':
        return '#5b8fa3';
      case 'water':
        return '#3393dd';
      default:
        return 'transparent';
    }
  }

  return (
    <TypeWrapper>
      <TypeTag color={getBackgroundColor()}>{type}</TypeTag>
    </TypeWrapper>
  );
}

export function Badge({ type }: TypeProps) {
  function getIconPath(): string {
    return require(`assets/images/type-icons/${type.toLowerCase()}.png`);
  }

  return (
    <TypeWrapper>
      <TypeBadge alt={type} src={getIconPath()} />
    </TypeWrapper>
  );
}
