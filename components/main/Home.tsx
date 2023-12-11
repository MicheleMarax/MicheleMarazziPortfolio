import React from "react"
import HomeContent from "../sub/HomeContent"

const Home = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover ">
        <source src="/static/blackhole.webm" type="video/webm" />
      </video>
      <HomeContent />
    </div>
    )
}

export default Home