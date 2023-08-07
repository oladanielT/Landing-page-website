import React from 'react';
import CardData from '../cardData';
import Card from '../common/Card';

function SelectionCard(){
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
             {CardData.map(data=>( 
              <Card data={data}/>
            ))}
      

        </div>
    </div>
  )
}

export default SelectionCard;