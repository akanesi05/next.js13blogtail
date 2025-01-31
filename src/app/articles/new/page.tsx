"use client";
//import React from 'react'
import React, { useState } from 'react';
import { createArticle } from "@/blogAPI";
import {useRouter} from 'react';
const CreateBlogPage = () => {
  const router =useRouter
  const [id,setId] =useState<string>("");
  const [title,setTitle] =useState<string>("");
  const [content,setContent] =useState<string>("");
  const [loading,setLoading] =useState<string>("");
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault
    //console.log(id,title,content)
    setLoading(true)
    await createArticle(id,title,content)
    setLoading(false)
    router.push("/")
    router.refresh()
  }
  return (
    <div>
    <h2>ブログ新規作成</h2>
    <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e)=>setId(e.target.value)}/>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">本文</label>
        <textarea  onChange={(e)=>setContent(e.target.value)} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>

      <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${loading?"bg-orange-300 cursor-not-allowed"
            :"bg-orange-400 hover:bg-orange-500 "}`
          } disabled={loading}>
          投稿
        </button>
    </form>
    </div>
  )
}

export default CreateBlogPage
