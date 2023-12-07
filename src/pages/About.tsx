import React, { FC, useMemo } from 'react';
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
  const HrefLists = 
      hrefLists.map(({ href, title }, idx) => (
        <a id={title} key={title} href={href} target="_blank" rel="noreferrer" ref={(el) => {if(el !== null) {targetRef.current[idx] = el}}} className={isVisible[title] ? 'show' : ''}>
          <Title title={title} isTransition={true}/>
        </a>
      ))
    
  
  console.log(isVisible)
  return (
    <section id="aboutMe" className="h-screen">
      <h1 className='visuallyhidden'>자기소개</h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-around py-40">
          <div className="bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3] rounded-full w-80 h-80 overflow-hidden">
            <img src={profile} alt="profile" className="h-full"></img>
          </div>
          <div className="flex flex-col justify-around">{HrefLists}</div>
        </div>
        <div className=''>
          <p>React를 중심으로 웹 개발이 가능한 프론트엔드 개발자입니다.</p>
          <p>
            매일 사용하는 웹 사이트를 만들어 볼 수 있다는 점에 개발자에 흥미를
            느끼게 되었고, 화면을 직접 구현한다는 점에서 프론트엔드에 관심을
            두게 되었습니다. 여러 사람이 봤을 때도 매력적인 웹 서비스를 실제로
            만든다면 굉장한 성취감을 느낄 것 같아 개발자에 도전하게 되었습니다.
            그 후 빠른 학습과 실전 프로젝트 경험을 위해 코드스테이츠에서 6개월
            동안 프론트엔드 부트캠프에 참여하였습니다. 부트캠프를 진행하면서
            학습한 내용을 블로그에 요약했었습니다.{' '}
          </p>
          <p>
            부트캠프에서 빠르게 많은 내용을 학습하다 보니 깊게는 학습하지는
            못해서 현재는 놓친 부분을 채우고, 배우지 못했던 typeScript와 Next.js
            학습하여 더 나은 개발자로 성장하고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
