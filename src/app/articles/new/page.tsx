"use client";
import React from 'react'

const createbogupage = () => {
  return (
    <div>
    <h2>ブログ新規作成</h2>
    <form className="bg-slate-200 p-6 rounded shadow-lg">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">本文</label>
        <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>

      <button
          type="submit"
          className="py-2 px-4 border rounded-md bg-orange-300"
        >
          投稿
        </button>
    </form>
    </div>
  )
}

export default createbogupage
