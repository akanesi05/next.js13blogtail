import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
        <article>
         <Link href="#">
         <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="" width={1280} height={300}/>
         </Link>   
        </article>
    </div>
    
  )
}

export default ArticleList
