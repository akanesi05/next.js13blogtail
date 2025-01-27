"use client";
import React from 'react'

const Error = ({reset}: {reset:()=>void}) => {
  return (
    <div className="bg-red-100 p-2 shadow-md"><h3>エラーが発生しました</h3>
    <button onClick={()=>reset()} className="hover:bg-pink-400">もう一度試す</button>
    </div>
  )
}

export default Error
