import React from 'react';
import { Gender, Genderless, GenderWrapper, Wrapper } from './style';

type Props = {
  ratio: number;
};

export default function GenderRatio({ ratio }: Props) {
  const BASE_RATIO = 8;
  let genderRate: Array<'f' | 'm'> = Array(BASE_RATIO);
  const genderless = ratio === -1;

  if (!genderless) {
    genderRate = genderRate.fill('f', 0, ratio);
    genderRate = genderRate.fill('m', ratio, BASE_RATIO);
  }

  return (
    <Wrapper>
      {genderless && <Genderless />}
      {!genderless && (
        <GenderWrapper>
          {genderRate.map((gender, index) => (
            <Gender key={`${gender}-${index}`} gender={gender} />
          ))}
        </GenderWrapper>
      )}
    </Wrapper>
  );
}
