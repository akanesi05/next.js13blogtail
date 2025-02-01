
//import React from 'react'
import Image from 'next/image'
import {getDetailArticle} from "@/blogAPI"
//import DeleteButton from './components/DeleteButton.tsx';
//import DeleteButton from '../components/DeleteButton';
import DeleteButton from "@/app/components/DeleteButton";

import React from 'react'

const Article= async({params}: {params:{ id: string }})=> {
  //const detailArticle =await getDetailArticle(params.id)
  
  const API_URL=process.env.NEXT_PUBLIC_API_URL;
  const res =await fetch(`${API_URL}/api/${params.id}`,{next:{
    revalidate:10,
  }})
  const detailArticle = await res.json();
  return (
    <div className="max-w-3xl mx-auto p-5"><Image src={"https://picsum.photos/1280/300?random=${article.id}"} alt="" width={1280} height={300}/>
    <h1 className="text-4xl text-center mb-10 mt-10">
    {detailArticle.title}
    </h1>
    <div>
      <p className="text-lg text-center leading-relaxed text-justify">{detailArticle.content} </p>  
    </div>
    <div>
        <DeleteButton id={detailArticle.id}/>
    </div>
    </div>
  )
}

export default Article





