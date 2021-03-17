import React from "react";
import { Card } from "../../src";

export default { title: 'Components/Card' };

export function Default() {
  return (
    <Card
      level={0}
      duration="3:30"
      courseName="NodeJS"
      buttonName="continuar"
      color="#8fc84e"
      onClick={()=> console.log('ojbject')}
    >
      <img
        src="https://bognarjunior.files.wordpress.com/2014/12/1417589427_nodejs-256.png?w=256"
        alt="nodejs"
      />
    </Card>
  )
}