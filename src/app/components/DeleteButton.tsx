"use client";
import { deleteArticle } from "@/blogAPI";
import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"
type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router =useRouter();
  const handleDelete = async () => {

    await deleteArticle(id);
    router.push("/")
    router.refresh();
  }
  return (
    <div className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer "onClick={handleDelete}>DeleteButton</div>
  )
}

export default DeleteButton;
