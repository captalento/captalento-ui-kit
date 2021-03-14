import React from "react";
import { storiesOf } from "@storybook/react";
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from "../src";

storiesOf("Elements | Button", module)
.add("Default", () => (
  <div style={{ width: '300px' }}>
    <Button>Default</Button>
  </div>
  ))
  .add('Disabled', () => (
  <div style={{ width: '300px' }}>
    <Button disabled>Disabled</Button>
  </div>
))
.add('Outlined', () => (
  <div style={{ width: '300px' }}>
    <Button outlined>Outlined</Button>
  </div>
))
.add('with icon', () => (
  <div style={{ width: '300px' }}>
    <Button icon={AiOutlineArrowRight}>Logar</Button>
  </div>
))