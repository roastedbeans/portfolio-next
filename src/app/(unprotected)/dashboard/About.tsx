import React from 'react'

const AboutScreen = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cod-gray-800 to-cod-gray-500 bg-clip-text text-transparent">
          Vincent Abella
        </h1>
        <p className="text-xl text-cod-gray-600 font-light max-w-2xl mx-auto">
          Full Stack Developer passionate about creating innovative digital experiences
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-cod-gray-700 to-cod-gray-950"></div>
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen