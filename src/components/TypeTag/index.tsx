import React, { ReactNode } from 'react';
import { Badge, Tag, Wrapper, TagBadge } from './style';

type TypeTagProps = {
  type: string;
  children?: ReactNode;
  badge?: boolean;
};

function getBackgroundColor(type: string): string {
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

function getIconPath(type: string): string {
  return require(`assets/images/type-icons/${type.toLowerCase()}.png`);
}

export default function TypeTag({
  type,
  children,
  badge = false,
}: TypeTagProps) {
  return (
    <Wrapper>
      {children && (
        <Tag badge={badge} color={getBackgroundColor(type)}>
          {badge && <TagBadge alt={type} src={getIconPath(type)} />}
          {children}
        </Tag>
      )}
      {!children && <Badge alt={type} src={getIconPath(type)} />}
    </Wrapper>
  );
}
