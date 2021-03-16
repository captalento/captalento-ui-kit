import React from "react";
import { storiesOf } from "@storybook/react";

import { Link } from "../src";

storiesOf("Elements | Link", module)
.add("Default", () => (
  <Link to="/forgot">
    Esqueci minha senha
  </Link>
))
  
