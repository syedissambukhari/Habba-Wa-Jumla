import React from 'react'

const Tag = ({tag}) => {
  return (
    <div className='px-3 py-2 font-semibold text-[#191C1F] border-2 text-[14px] border-[#E4E7E9] inline-block items-center justify-center '>
      {tag}
    </div>
  )
}

export default Tag
