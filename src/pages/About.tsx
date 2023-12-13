import React, { FC } from 'react';
import Title from '../components/Title';
import profile from '../image/profile.png';
import useScrollObserver from '../hook/useScrollObserver';

const hrefLists = [
  { href: 'https://github.com/lulu242', title: 'GitHub' },
  { href: 'https://velog.io/@lulu', title: 'BLOG' },
  {
    href: 'https://cuddly-brace-b7d.notion.site/8e28eee1b7da449a8d483a2108aaaa7b',
    title: 'RESUME',
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=woneun10@gmail.com',
    title: 'woneun10@gmail.com',
  },
];

export const About: FC = () => {
  const [targetRef, isVisible] = useScrollObserver();
  const HrefLists = hrefLists.map(({ href, title }, idx) => (
    <div>
      <a
        id={title}
        key={title}
        href={href}
        target="_blank"
        rel="noreferrer"
        ref={(el) => {
          if (el !== null) {
            targetRef.current[idx] = el;
          }
        }}
        className={`${isVisible[title] ? 'show' : ''}`}
      >
        <Title title={title} isTransition={true} />
      </a>
    </div>
  ));

  return (
    <section id="aboutMe" className="h-screen min-h-[800px]">
      <h1 className="visuallyhidden">자기소개</h1>
      <div className="flex flex-col justify-center h-full max-w-[1240px] m-auto overflow-hidden">
        <div className="flex justify-around pb-20">
          <div className="bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3] rounded-full decoration-4 h-full overflow-hidden">
            <img src={profile} alt="profile" className="h-full"></img>
          </div>
          <div className="flex flex-col justify-around">{HrefLists}</div>
        </div>
        <div
          className={`text-xl leading-10 ${
            isVisible.aboutText ? 'translate-y-0' : 'translate-y-1/2'
          } `}
          ref={(el) => {
            if (el !== null) {
              targetRef.current.push(el);
            }
          }}
          id="aboutText"
        >
          <p className="text-2xl font-semibold">
            안녕하세요, 프론트엔드 주니어 개발자 원영은입니다!
          </p>
          <p>
            많은 사람이 매력을 느낄 수 있는 웹 서비스를 구현하고,{' '}
            <span>
              배운 기술을 적용하며 직접 구현해가는 과정이 저에게는 큰 즐거움
            </span>
            입니다. 일상에서 마주치는 불편함에 대한 생각해 보며,{' '}
            <span>더 나은 사용자 경험</span>에 대해 고민합니다.
          </p>
          <p>
            <span>끊임없는 도전과 학습</span>을 통해 발전해가는 개발자로
            성장하고자 합니다. 지속적인 열정과 노력으로 목표를 달성하는데
            기여하고, 함께 성장할 수 있는 기회를 찾고 있습니다. 감사합니다!
          </p>
        </div>
      </div>
    </section>
  );
};
