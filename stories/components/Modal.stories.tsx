import React from 'react';
import { Modal } from '../../src';
import { Title, Text } from '../../src';

import { RiMedalLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

export default { title: 'Components/Modal' };

export function Default() {
  return (
    <>
      <div>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
      </div>

      <Modal isOpen={false} className="px-5 py-8 w-64	text-center">
        <Text variant="blue-dark">
          Ao terminar as lições você receberá medalhas como prémio
        </Text>
      </Modal>
    </>
  );
}

export function withTitle() {
  return (
    <>
      <div>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
      </div>

      <Modal
        isOpen={false}
        className="px-5 py-8 w-64	text-center flex flex-col items-center"
      >
        <Title size="small" variant="blue-dark" className="mb-4" tag="h3">
          Recompensas
        </Title>
        <Text variant="blue-dark">
          Ao terminar as lições você receberá medalhas como prémio
        </Text>
      </Modal>
    </>
  );
}

export function Icon() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis velit iure voluptas officia voluptatum repellendus,
          nesciunt modi nemo, accusamus, exercitationem minus distinctio
          reprehenderit autem ducimus cum veniam quisquam assumenda!
        </p>
        <button onClick={() => setIsOpen(true)}>reenviar</button>
      </div>

      <Modal
        isOpen={isOpen}
        className="px-5 py-8 w-64	text-center flex flex-col items-center"
      >
        <div className="w-full text-blue-dark flex justify-end">
          <IoMdClose size={16} onClick={() => setIsOpen(false)} />
        </div>
        <RiMedalLine size={40} className="mb-4 text-blue-dark" />
        <Title size="small" variant="blue-dark" className="mb-4" tag="h3">
          Recompensas
        </Title>
        <Text variant="blue-dark">
          Ao terminar as lições você receberá medalhas como prémio
        </Text>
      </Modal>
    </>
  );
}
