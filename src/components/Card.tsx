import React, { FC } from 'react';
import { Link } from 'react-scroll';

interface CardProps {
  title: string;
  project: string;
  introduction: string;
  skills: string[];
  setProject: () => void;
}

const Card: FC<CardProps> = ({ title, project, introduction, skills, setProject }) => {
  return (
    <div className="shadow-xl card w-96 bg-base-100 h-[550px]">
      <figure>
        <div className="bg-center bg-no-repeat bg-contain w-96 h-96 bg-map" />
      </figure>
      <div className="text-white bg-black after:w-96 card-body after:bg-black after:h-[50px] after:absolute after:-bottom-[30px] after:right-0 after:skew-y-6">
        <h2 className="italic underline card-title">
          {title}
          <div className="not-italic badge">{project}</div>
        </h2>
        <p>{introduction}</p>
        <div className="justify-end card-actions">
          {skills.map((skill) => (
            <div className="badge badge-outline">{skill}</div>
          ))}
        </div>
      </div>
      <Link
        onClick={setProject}
        to="projectDetail"
        smooth={true}
        duration={500}
        className="absolute z-40 flex items-center justify-center bg-white rounded-full cursor-pointer w-14 h-14 -bottom-10 left-6 hover:scale-105"
      >
        <span className="text-2xl font-semibold material-icons">add</span>
      </Link>
    </div>
  );
};

export default Card;
