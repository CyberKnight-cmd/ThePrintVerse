// *********************
// Role of the component: Simple H2 heading component
// Name of the component: Heading.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Heading title={title} />
// Input parameters: { title: string }
// Output: h2 heading title with some styles 
// *********************

import React from 'react'

const Heading = ({ title } : { title: string }) => {
  return (
    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-center px-4">{ title }</h2>
  )
}

export default Heading