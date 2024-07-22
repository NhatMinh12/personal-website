"use client";

import Link from "next/link";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/minhpham161204/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/NhatMinh12",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
