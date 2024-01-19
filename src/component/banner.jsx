import React from 'react'

export default function Banner() {
  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 style={{fontWeight:"bold"}}>Article for <br></br><span style={{color:"#54B275", fontWeight:"bold"}}> front-end devs</span></h1>
                    <p style={{fontSize:"25px", color:"#889394"}}>Articles on web performence, <br></br>resposnsive web design and more.</p>
                </div>
                <div className='col-6'>
                    <img src="logo192.png" alt="banner picture" />
                </div>
            </div>
        </div>
    </>
  )
}
