import React from "react";
import { storiesOf } from "@storybook/react";

import { Link } from "../src";

storiesOf("Elements | Link", module)
.add("Default", () => (
  <div style={{ width: '300px' }}>
    <Link to="/forgot">
      Esqueci minha senha
    </Link>
  </div>
))
  
