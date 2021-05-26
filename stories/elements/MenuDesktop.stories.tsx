import React from 'react';

import { MenuDesktop } from '../../src/elements/MenuDesktop';

export default { title: 'Elements/MenuDesktop' };

export function Default() {
  return <MenuDesktop />;
}

export function IsLogued() {
  return <MenuDesktop isLogued />;
}
