import React from 'react'
import Cardsection from './Cardsection'

function Bodythird() {
  let arr=[];
  for( let i=0;i<8;i++){
    arr.push(<Cardsection/>);
    
  }
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center lg:mx-20 my-20 gap-5'>
     {arr}
    </div>
  )
}

export default Bodythird