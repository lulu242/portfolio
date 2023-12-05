import React, { FC } from 'react';
import { Link } from 'react-scroll';

interface NavListProps {
  isNavActive: boolean;
  setIsNavActive: React.Dispatch<React.SetStateAction<boolean>>
}

const NavList :FC<NavListProps> = React.memo(({isNavActive, setIsNavActive}) => {
  return (
    <>
      <li className="cursor-pointer hover:text-gray-600">
        <Link
          onClick={() => setIsNavActive(!isNavActive)}
          activeClass="underline decoration-solid"
          spy={true}
          to="aboutMe"
          smooth={true}
          duration={500}
        >
          ABOUT ME
        </Link>
      </li>
      <li className="cursor-pointer hover:text-gray-600">
        <Link
          onClick={() => setIsNavActive(!isNavActive)}
          activeClass="underline decoration-solid"
          spy={true}
          to="skills"
          smooth={true}
          duration={500}
        >
          SKILLS
        </Link>
      </li>
      <li className="cursor-pointer hover:text-gray-600">
        <Link
          onClick={() => setIsNavActive(!isNavActive)}
          activeClass="underline decoration-solid"
          spy={true}
          to="project"
          smooth={true}
          duration={500}
        >
          PROJECT
        </Link>
      </li>
    </>
  );
});

export default NavList;
