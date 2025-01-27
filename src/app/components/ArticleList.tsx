import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";

type ArticleListProps ={
  articles:Article[]
}
const ArticleList = ({articles}:ArticleListProps) => {
  return (
    <div>
      {articles.map((article)=>(<article className="shadow my-4" key={article.id}>
         <Link href={`articles/${article.id}`} className="hover:opacity-75">
         <Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
         </Link>   
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">technology</Link>
          <Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">{article.title}</Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on {article.createdAt}
          </p>
          <a href={`articles/${article.id}`} className="text-slate-900 pb-6">
            {article.content}
          </a>
          {/* <a href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a> */}
          <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
        </article>
))}
        <article className="shadow my-4">
         <Link href="#" className="hover:opacity-75">
         <Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
         </Link>   
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">next.jsを勉強中</Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          <a href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          {/* <a href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a> */}
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
        </article>

        <article className="shadow my-4">
         <Link href="#" className="hover:opacity-75">
         <Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
         </Link>   
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">next.jsを勉強中</Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          <a href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          {/* <a href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a> */}
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
        </article>

        <article className="shadow my-4">
         <Link href="#" className="hover:opacity-75">
         <Image src="https://picsum.photos/1280/300" alt="" width={1280} height={300}/>
         </Link>   
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">next.jsを勉強中</Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          <a href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          {/* <a href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a> */}
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
        </article>
    </div>
    
  )
}

export default ArticleList
