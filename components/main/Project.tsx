import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-100">
        <ProjectCard
          src="/static/MeshGenerator.png"
          title="Procedural mesh generation in Unity"
          description="This bachelor thesis project explores procedural mesh generation in Unity using C#.
          The focus is on implementing advanced algorithms for dynamic 3D mesh creation to enhance visual appeal and gameplay experiences in video games.
          The project covers algorithmic exploration, optimization, integration with game mechanics, user interaction, and visual aesthetics.
          The goal is to showcase practical applications and demonstrate the impact of procedural techniques on game development and interactive applications."
        />        
       <ProjectCard
          src="/static/SaveThePlanet.png"
          title="Project save the planet"
          description="This software engineering test project involves developing an Android game in Unity, focusing on implementing SOLID principles.
          The game showcases single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion principles for a robust and maintainable codebase. 
          Through this project, the student demonstrates proficiency in Unity, Android game development, and mastery of SOLID principles in software engineering."
        />    
        <ProjectCard
          src="/static/CryptoWallet.png"
          title="Crypto wallet tracker"
          description="For a university test, this Android app, developed in Java using Android Studio, functions as a Crypto Wallet tracker. 
          It fetches real-time cryptocurrency values from a third-party server via REST API. 
          With a user-friendly interface, the app enables users to manage their crypto assets and stay updated on market trends."
        />    
      </div>
      <div className="h-[300] w-[300] flex flex-col md:flex-row gap-10 px-10 py-10">
        <ProjectCard
          src="/static/PortfolioSite.png"
          title="My portfolio site"
          description="My portfolio website, developed in visual code to learn react js."
        />     
        
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-[1] z-[21] opacity-0">
        <Image
          src="/PortfolioSite.png"
          alt=""
          width={1080}
          height={1080}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white"></h1>
          <p className="mt-2 text-gray-300"></p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-[1] z-[21] opacity-0">
        <Image
          src="/PortfolioSite.png"
          alt=""
          width={1080}
          height={1080}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white"></h1>
          <p className="mt-2 text-gray-300"></p>
        </div>
      </div>
        
      </div>
      
    </div>
  );
};

export default Projects;