import React from 'react';

const skillsText = [
  {
    title: 'HTML & CSS',
    text: [
      '웹 표준을 준수하여 마크업 작성에 주의합니다.',
      'styled-components, tailwindcss, 또는 module.css를 사용하여 CSS-in-JS나 utility-first 방식으로 스타일을 관리해본 경험이 있습니다.',
      '크로스 브라우징 이슈에 대응할 수 있습니다.',
      '반응형 웹사이트를 구현할 수 있습니다.',
      'Keyframe을 활용하여 부드러운 애니메이션 효과를 구현할 수 있습니다.',
    ],
  },
  {
    title: 'JavaScript',
    text: ['ES6+ 문법에 익숙합니다.', 'typescript를 사용할 수 있습니다.'],
  },
  {
    title: 'React',
    text: [
      'Redux, Redux Toolkit, 또는 Zustand와 같은 상태 관리 라이브러리를 사용하여 애플리케이션 상태를 관리한 경험이 있습니다.',
      '컴포넌트 기반 아키텍처를 적극 활용하여 재사용성 높은 코드를 작성합니다.',
      '프로젝트에 필요한 최적화 및 최신 React 트렌드에 대한 관심이 있습니다.',
    ],
  },
  {
    title: 'Deployment',
    text: [
      'AWS의 S3를 사용해 배포해본 경험이 있습니다.',
      'Vercel를 사용해 배포해본 경험이 있습니다.',
    ],
  },
  {
    title: 'ect',
    text: [
      '피그마를 사용해 프로젝트를 기획하고 프로토타입을 만들 수 있습니다.',
      '포스트맨 사용해 API 테스트를 할 수 있습니다.',
      '협업 문서 툴로 노션을 사용했습니다.',
    ],
  },
];

const Accordion = () => {
  const Skills = skillsText.map(({ title, text }) => (
    <div className="border-b border-black border-dashed rounded-none collapse collapse-arrow first:border-t">
      <input type="radio" name="my-accordion-4" />
      <div className="my-1 underline collapse-title blackItalic">{title}</div>
      <div className="collapse-content">
        <ul className="mx-4 list-disc">
          {text.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return <div className="flex-col w-full">{Skills}</div>;
};

export default Accordion;
