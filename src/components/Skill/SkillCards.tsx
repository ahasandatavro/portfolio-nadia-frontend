import React from 'react'
import { Skill } from '@/types/skill'

type Props = {
  skill: Skill
}

function SkillCards({ skill }: Props) {
  const { title, desc, icon } = skill

  return (
    <div
      className="rounded-2xl p-6 border border-gray-700 
                 bg-black/30 backdrop-blur-md  text-white 
                 transition-all duration-300 
                 hover:border-lime-600 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]
                 hover:scale-[1.02]"
    >
      <div className="w-16 h-16 grid place-items-center rounded-2xl mb-5 bg-lime-600/10">
        {React.cloneElement(icon as React.ReactElement, { size: 38, color: '#a3e635' })}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 ">{desc}</p>
    </div>
  )
}

export default SkillCards
