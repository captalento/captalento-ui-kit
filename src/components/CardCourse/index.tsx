import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { BiMovie } from 'react-icons/bi';
import { LineProgress, Text, Title, Avatar } from '../../elements';

export interface CardCourseProps extends HTMLAttributes<HTMLDivElement> {
  image: {
    src: string | undefined;
    alt: string;
  };
  teacher?: {
    id?: string;
    name: string;
    initial?: string;
    image: {
      src: string | undefined;
      alt: string;
    };
  };
  name?: string;
  level?: 'Básico' | 'Intermediario' | 'Avanzado';
  duration?: number;
  isRegistered?: boolean;
  progress?: number;
}

export function CardCourse({
  className,
  image,
  teacher,
  name,
  level,
  duration,
  isRegistered,
  progress,
  children,
  ...rest
}: CardCourseProps): JSX.Element {
  const classes = classNames('cardCourse', className);

  return (
    <div className={classes} {...rest}>
      <div className="video absolute relative">
        {image ? <img src={image.src} alt={image.alt} /> : null}
        <div className="containerMask">
          <div className="mask" />
        </div>
      </div>

      <div className="px-5 pb-5 bg-black-100 rounded-b-2xl">
        {teacher && !isRegistered ? (
          <div className="flex items-start">
            <div className="teacherAvatar -mt-8 z-20">
              {teacher ? (
                <Avatar
                  size={60}
                  borderDecoration
                  img={{ src: teacher.image.src, alt: teacher.image.alt }}
                />
              ) : null}
            </div>
            <Text size="3xs" variant="gray" className="ml-2 mt-1">
              Um curso de {teacher.name}
            </Text>
          </div>
        ) : null}

        <div>
          {name ? (
            <Title tag="h3" size="small" className="text-left mt-2.5">
              {name}
            </Title>
          ) : null}

          {!isRegistered ? (
            <>
              <div className="flex items-center mt-2.5">
                <BiMovie
                  size={28}
                  className="mr-4 fill-current text-black-300"
                />
                <Text size="2xs">
                  <strong>Nível: </strong>
                  {level}
                </Text>
              </div>
              <div className="flex items-center">
                <BiMovie
                  size={28}
                  className="mr-4 fill-current text-black-300"
                />
                <Text size="2xs">
                  <strong>Tempo: </strong>
                  {duration} hrs
                </Text>
              </div>
            </>
          ) : null}

          {isRegistered ? (
            <>
              <Text size="2xs" className="font-semibold text-left mt-2.5">
                Progresso
              </Text>
              <LineProgress completionPercentage={progress ? progress : 0} />
            </>
          ) : null}

          {children}
        </div>
      </div>
    </div>
  );
}
