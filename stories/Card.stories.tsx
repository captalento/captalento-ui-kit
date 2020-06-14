import React from "react";
import { storiesOf } from "@storybook/react";

import { Card } from "../src";

storiesOf("Components | Card", module).add("Default", () => (
  <Card
    level={0}
    duration={"2:00"}
    courseName="HTML5"
    buttonName="continuar"
    color="#e44e25"
  >
    <img src="https://bognarjunior.files.wordpress.com/2014/12/1417589451_html-256.png?w=256" alt="html5" />
  </Card>
));
