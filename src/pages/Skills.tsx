import React, { FC } from 'react';
import Accordion from '../components/Accordion';

const skills = [
  'Javascript',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'Styled Components',
  'TailWind',
  'Git',
  'Vercel',
  'S3',
  'Figm',
  'Postman',
  'Notion',
];

const skillsImg = [
  ['html5', '#E34F26'],
  ['css3', '#1572B6'],
  ['javascript', '#F7DF1E'],
  ['typescript', '#3178C6'],
  ['react', '#61DAFB'],
  ['redux', '#764ABC'],
  ['styledcomponents', '#DB7093'],
  ['tailwindcss', '#06B6D4'],
  ['cssmodules', '#000000'],
  ['git', '#F05032'],
  ['github', '#181717'],
  ['amazons3', '#569A31'],
  ['vercel', '#000000'],
  ['postman', '#FF6C37'],
  ['figma', '#F24E1E'],
  ['notion', '#000000'],
];

const usedImg = [
  ['nextdotjs', '#000000'],
  ['graphql', '#E10098'],
  ['nodedotjs', '#339933'],
  ['php', '#777BB4'],
  ['mysql', '#4479A1'],
  ['amazonec2', '#FF9900'],
];

const Skills: FC = () => {
  return (
    <section id="skills" className="h-screen bg-[#A6C8EF] pb-9 pt-[100px] px-5">
      <h1 className="visuallyhidden">사용 기술</h1>
      <div className="flex justify-between w-5/6 h-full px-24 py-12 mx-auto bg-white rounded gap-28">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-3 mb-4">
            {skills.map((skill) => (
              <span className="px-1 font-semibold rounded bg-sky-200">{skill}</span>
            ))}
          </div>
          <Accordion />
        </div>
        <div className="flex flex-col justify-center max-w-md gap-24">
          <div>
            <div className="mb-5 text-3xl font-extrabold">Skills</div>
            <div className="flex flex-wrap gap-3">
              {skillsImg.map((skill) => (
                <div className="relative">
                  <img
                    height="60"
                    width="60"
                    src={`https://cdn.simpleicons.org/${skill[0]}/${skill[1]}`}
                    alt={skill[0]}
                  />
                  <div className="absolute top-0 flex items-center justify-center w-full h-full text-xs text-center break-all rounded hover:text-white hover:bg-black/70 text-white/0">
                    {skill[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-3xl font-extrabold">used</div>
            <div className="flex flex-wrap gap-3">
              {usedImg.map((skill) => (
                <div className="relative">
                  <img
                    height="60"
                    width="60"
                    src={`https://cdn.simpleicons.org/${skill[0]}/${skill[1]}`}
                    alt={skill[0]}
                  />
                  <div className="absolute top-0 flex items-center justify-center w-full h-full text-xs text-center break-all rounded hover:text-white hover:bg-black/70 text-white/0">
                    {skill[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
