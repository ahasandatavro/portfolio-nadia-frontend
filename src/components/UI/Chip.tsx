import React from 'react'

function Chip({label}:{label:String}) {
  return (
     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80">
      {label}
    </span>
  )
}

export default Chip
