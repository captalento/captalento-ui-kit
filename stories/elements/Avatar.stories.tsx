import React from 'react';
import { HiPencil } from 'react-icons/hi';

import { Avatar } from '../../src';

import Perfil from '../../src/assets/perfil.jpeg';

export default { title: 'Elements/Avatar' };

export function WhiteImg() {
  return <Avatar img={{ src: Perfil, alt: 'Imagem do usuário' }} />;
}

export function WithInitial() {
  return <Avatar img={{ src: '', alt: 'Imagem do usuário' }} initial="Y" />;
}

export function WithIcon() {
  return <Avatar img={{ src: '', alt: 'Imagem do usuário' }} />;
}

export function OtherSize() {
  return (
    <>
      <Avatar img={{ src: Perfil, alt: 'Imagem do usuário' }} size={120} />
      <Avatar
        img={{ src: '', alt: 'Imagem do usuário' }}
        initial="Y"
        sizeIcon={56}
        sizeText="4xl"
        className="w-48 h-48"
      />
    </>
  );
}

export function WithBorderStyle() {
  return (
    <>
      <Avatar
        img={{ src: Perfil, alt: 'Imagem do usuário' }}
        borderDecoration
        size={80}
      />
    </>
  );
}

export function WhiteImgAndEvent() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <Avatar
        img={{ src: Perfil, alt: 'Imagem do usuário' }}
        className="cursor-pointer"
        onClick={() => setActive(!active)}
      />

      {active ? <div className="bg-purple-100 w-92 h-92">asdasd</div> : null}
    </>
  );
}

export function SelectFile() {
  const inputRef = React.useRef<any>();
  const [{ alt, src }, setImg] = React.useState({
    src: '',
    alt: 'Upload an Image',
  });

  const handleChangeImage = (e: any) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  return (
    <>
      <span
        onClick={() => inputRef.current.click()}
        className="
                  cursor-pointer
                  opacity-60 transform duration-600
                  hover:opacity-100
                  fill-current bg-blue-100 p-2 flex items-center justify-center rounded-full
                  absolute bottom-11 right-0	
                "
      >
        <HiPencil size={24} className="current text-black-200" />
      </span>
      <Avatar
        img={{ src: Perfil, alt: 'Imagem do usuário' }}
        className="cursor-pointer"
      />
      <img width={80} src={src} alt={alt} />
      <Avatar
        img={{ src: src, alt: 'Imagem do usuário' }}
        className="cursor-pointer"
      />

      <input
        className="hidden"
        type="file"
        name="image"
        ref={inputRef}
        id="image"
        onChange={handleChangeImage}
      />
    </>
  );
}
