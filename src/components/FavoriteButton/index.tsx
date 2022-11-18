import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
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
      {active ? <AiFillHeart /> : <AiOutlineHeart />}
    </Button>
  );
}
