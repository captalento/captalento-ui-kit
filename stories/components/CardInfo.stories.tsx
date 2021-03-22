import React from 'react';
import { CardInfo } from '../../src';
import { Title } from '../../src';
import { SectionStyles } from '../../src/elements/Title/styles';

import { RiMedalLine } from 'react-icons/ri'

export default { title: 'Components/CardInfo' };

export function Default() {
  return (
    <div style={{width: '235px'}}>
      <CardInfo>
        <p>Ao terminar as lições você receberá medalhas como prémio</p>
      </CardInfo>
    </div>
  )
}

export function withColorEffect() {
  return (
    <div style={{width: '235px'}}>
      <CardInfo color="green">
        <p>Ao terminar as lições você receberá medalhas como prémio</p>
      </CardInfo>
    </div>
  )
}

export function withTitle() {
  return (
    <div style={{width: '235px'}}>
      <CardInfo>
      <SectionStyles>
        <Title tag="h3">Recomprensas</Title>
      </SectionStyles>
        <p>Ao terminar as lições você receberá medalhas como prémio</p>
      </CardInfo>
    </div>
  )
}

export function Icon() {
  return (
    <div style={{width: '235px'}}>
      <CardInfo icon={ RiMedalLine }>
        <p>Ao terminar as lições você receberá medalhas como prémio</p>
      </CardInfo>
    </div>
  )
}

export function withIconTitle() {
  return (
    <div style={{width: '235px'}}>
      <CardInfo icon={ RiMedalLine }>
        <SectionStyles>
          <Title tag="h3">Recompensas</Title>
        </SectionStyles>
        <p>Ao terminar as lições você receberá medalhas como prémio</p>
      </CardInfo>
    </div>
  )
}