import React from "react";

import { SectionStyles } from '../../src/elements/Title/styles';
import { Title } from "../../src";

export default { title: 'Elements/Link' };

export function Default() {
  return (
    <Title>
      Title h1
    </Title>
  )
}

export function DefaultH2() {
  return (
    <SectionStyles>
      <Title tag="h2" size="medium" variant="blue">
        Title h2
      </Title>
    </SectionStyles>
  )
}
  
