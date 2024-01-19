import React from 'react'
import postlist from '../utills'
import { Link } from 'react-router-dom'

export default function Listing() {

    const post = postlist.map((value)=> (
        <div key={value.id} className='mt-5'>
            <Link sty to={`/${value.id}`}>
                <div className='container list-body'>
                    <h1>{value.title}</h1>
                    <p>{value.body}</p>  
                </div>          
            </Link>
        </div>
    ))

  return (
    <>
        {post}
    </>
  )
}
