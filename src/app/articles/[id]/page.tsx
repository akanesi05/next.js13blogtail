
// import React from 'react'
import Image from 'next/image'
// import {getDetailArticle} from "@/blogAPI"

// const Article = async ({params}: {params:{ id: string }})=> {
//   const detailArticle =await getDetailArticle(params.id)
//   console.log(detailArticle)
//   return (
//      <div className="max-w-3xl mx-auto p-5">
//         <Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
//         <h1 className="text-4xl text-center mb-10 mt-10">{detailArticle.title} </h1>
//         <div>
//          <p className="text-lg text-center leading-relaxed text-justify">
//          {detailArticle.content} 
//          </p>
//         </div>
//      </div>

//   )
// }

// export default Article

import React from 'react'

const Article=({params}: {params:{ id: string }})=> {
    console.log(params.id)
  return (
    <div className="max-w-3xl mx-auto p-5"><Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
    <h1 className="text-4xl text-center mb-10 mt-10">
      ここがタイトリです
    </h1>
    <div>
      <p className="text-lg text-center leading-relaxed text-justify">ここが本文です</p>  
    </div>
    </div>
  )
}

export default Article





