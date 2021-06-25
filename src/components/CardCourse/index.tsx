import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { BiMovie } from 'react-icons/bi';
import { Button, LineProgress, Text, Title } from '../../elements';

export interface CardCourseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  video: JSX.Element | HTMLCollection;
  teacherImg: string;
  teacherName: string;
  courseName: string;
  courseLevel: 'Básico' | 'Intermediario' | 'Avanzado';
  courseDuration: number;
  courseStart?: boolean;
  hasStart?: boolean;
  completionPercentage?: number;
}

export function CardCourse({
  className,
  video,
  teacherImg,
  teacherName,
  courseName,
  courseLevel,
  courseDuration,
  courseStart,
  hasStart,
  completionPercentage,
  ...rest
}: CardCourseProps): JSX.Element {
  const classes = classNames('cardCourse', className);

  return (
    <button className={classes} {...rest}>
      <div className="video absolute relative">
        {video}
        <div className="containerMask">
          <div className="mask" />
        </div>
      </div>

      <div className="px-5 pb-5 bg-black-100 rounded-b-2xl">
        {!courseStart && !hasStart ? (
          <div className="flex items-start">
            <div className="teacherAvatar z-20">
              <img src={teacherImg} alt="Professor" />
            </div>
            <Text size="3xs" variant="gray" className="ml-2 mt-1">
              Um curso de {teacherName}
            </Text>
          </div>
        ) : null}

        {hasStart ? (
          <>
            <Text size="2xs" className="font-semibold text-left mt-4">
              Progresso
            </Text>
            <LineProgress
              completionPercentage={
                completionPercentage ? completionPercentage : 0
              }
              className="mb-8"
            />
          </>
        ) : null}

        <div>
          {!courseStart && !hasStart ? (
            <Title tag="h3" size="small" className="text-left mt-2.5 mb-2">
              {courseName}
            </Title>
          ) : null}

          {!hasStart ? (
            <>
              <div
                className={`flex items-center ${courseStart ? 'mt-4' : null}`}
              >
                <BiMovie
                  size={28}
                  className="mr-4 fill-current text-black-300"
                />
                <Text size="2xs">
                  <strong>Nível: </strong>
                  {courseLevel}
                </Text>
              </div>
              <div className="flex items-center">
                <BiMovie
                  size={28}
                  className="mr-4 fill-current text-black-300"
                />
                <Text size="2xs">
                  <strong>Tempo: </strong>
                  {courseDuration} hrs
                </Text>
              </div>
            </>
          ) : null}
          <Button size="small" variant="black" className="w-full mt-4">
            {hasStart ? 'Continuar' : null}
            {courseStart ? 'Começar curso' : null}
            {!courseStart && !hasStart ? 'Ver mais' : null}
          </Button>
        </div>
      </div>
    </button>
  );
}
