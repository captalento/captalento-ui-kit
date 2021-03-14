import React from "react";
import { storiesOf } from "@storybook/react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from "../src";


function ButtonComponent() {
  const [actived, setActived] = React.useState<boolean>(true);
  setTimeout(() => {
    setActived(!actived)
  }, 2000)
  
	
	return (
    <div style={{ width: '300px' }}>
      <Button disabled={actived}>Disabled</Button>
    </div>
  );
}


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
  .add('Disabled transition', () => (
    <ButtonComponent />
  ))
  .add('Outlined', () => (
    <div style={{ width: '300px' }}>
      <Button outlined>Outlined</Button>
    </div>
  ))
  .add('with icon', () => (
    <div style={{ width: '300px' }}>
      <Button icon={RiArrowRightLine}>Logar</Button>
    </div>
  ))
  .add('link', () => (
    <div style={{ width: '300px' }}>
      <Button outlined icon={RiArrowRightLine}>Saiba mais</Button>
    </div>
  ))