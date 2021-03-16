import React from "react";
import { storiesOf } from "@storybook/react";
import { SectionStyles } from '../src/elements/Title/styles';

import { Title } from "../src";

storiesOf("Elements | Title", module)
.add("Default", () => (
  <Title>
    Title h1
  </Title>
))

.add("Default h2", () => (
  <SectionStyles>
    <Title tag="h2" size="medium" variant="blue">
      Title h2
    </Title>
  </SectionStyles>
))
  
