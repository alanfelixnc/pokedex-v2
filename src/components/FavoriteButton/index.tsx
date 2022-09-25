import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { Button } from './style';

type FavoriteButtonProps = {
  active: boolean;
  onClick: () => void;
};

export default function FavoriteButton({
  active,
  onClick,
}: FavoriteButtonProps) {
  return (
    <Button active={active} onClick={onClick}>
      <FiHeart />
    </Button>
  );
}
