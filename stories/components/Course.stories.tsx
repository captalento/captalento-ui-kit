import React from 'react';
import { Course } from '../../src';

export default { title: 'Components/Course' };

export function Default() {
  const [course, setCourse] = React.useState<any>({
    name: 'HTML 5',
    place: 'Basiccamp',
    idCourse: '1',
    modules: [
      {
        idModule: '1',
        name: 'Introdução',
        lessons: [
          { idLesson: '1-1', title: '1 - option', done: true },
          { idLesson: '1-2', title: '2 - option', done: true },
          { idLesson: '1-3', title: '3 - option', done: false },
        ],
      },
      {
        idModule: '2',
        name: 'Links',
        lessons: [
          { idLesson: '2-1', title: '1 - option', done: false },
          { idLesson: '2-2', title: '2 - option', done: true },
          { idLesson: '2-3', title: '3 - option', done: false },
          { idLesson: '2-4', title: '4 - option', done: true },
          { idLesson: '2-5', title: '5 - option', done: true },
        ],
      },
      {
        idModule: '3',
        name: 'Tabelas',
        lessons: [
          { idLesson: '3-1', title: '1 - option', done: true },
          { idLesson: '3-2', title: '2 - option', done: true },
          { idLesson: '3-3', title: '3 - option', done: false },
          { idLesson: '3-4', title: '4 - option', done: false },
        ],
      },
    ],
  });
  const [isActivedModule, setIsActivedModule] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<string>('');
  const [selectedLesson, setSelectedlesson] = React.useState<string>('');

  const totalLessons = [];
  const totalLessonsDone = [];

  const changeIndex = (id: string) => {
    if (index === id) {
      setIndex(null);
      setIsActivedModule(!isActivedModule);
      return;
    }

    if (index !== id) {
      setIndex(id);
      setIsActivedModule(true);
    }
  };

  const changeSelectedLesson = (id: string) => {
    setSelectedlesson(id);
  };

  React.useEffect(() => {
    changeIndex('1');
    changeSelectedLesson('1-1');
  }, []);

  course.modules.forEach(({ lessons }) => {
    lessons.forEach((lesson) => {
      totalLessons.push('1');

      if (lesson.done) {
        totalLessonsDone.push('1');
      }
    });
  });

  const barrPercentaje = (100 / totalLessons.length) * totalLessonsDone.length;

  return (
    <Course
      className="absolute top-0 left-0"
      name={course.name}
      place={course.place}
      percentageCourse={Math.ceil(barrPercentaje)}
    >
      {course.modules.map(({ name, lessons, idModule }) => {
        return (
          <>
            <Course.Module
              key={idModule}
              id={idModule}
              actived={index}
              name={name}
              moduleNumber={idModule}
              onActive={(actived) => changeIndex(actived)}
            >
              {lessons.map(({ idLesson, title, done }) => {
                return (
                  <Course.Module.Lesson
                    key={idLesson}
                    id={idLesson}
                    selected={selectedLesson}
                    done={done}
                    title={title}
                    onActive={() => {
                      changeSelectedLesson(idLesson);
                      console.log(selectedLesson === idLesson);
                    }}
                    onFinish={(idLesson) => {
                      function getIndex(lesson) {
                        return lesson.idLesson === idLesson;
                      }
                      const index = lessons.findIndex(getIndex);

                      const modulesUpdated = course.modules.map((m) => {
                        if (m.lessons[index]?.idLesson === idLesson) {
                          m.lessons[index].done = !m.lessons[index].done;
                        }
                        return m;
                      });

                      setCourse({ ...course, modules: modulesUpdated });
                    }}
                  />
                );
              })}
            </Course.Module>
          </>
        );
      })}
    </Course>
  );
}
