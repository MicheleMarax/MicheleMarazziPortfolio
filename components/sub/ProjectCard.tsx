import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ src, title, description, tags }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-[1] z-[21]">
      <Image
        src={src}
        alt={title}
        width={1080}
        height={1080}
        className="w-full object-contain"
      />

      <div className="w-full flex flex-row items-center">
        {tags.map((tag) => (
          <div className="Tag-box py-[5px] px-[10px] border border-[#7042f88b] opacity-[0.9] ">
            <h1 className="welcome-text text-[13px] text-[#b49bff]">{tag}</h1>
          </div>
        ))}
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
