/* eslint-disable react/prop-types */
import './content.css'
import {data} from '../../json/shoes'
/* import { useState } from 'react' */
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import { CardItem } from '../CardItem/CardItem'

export default function Content({category}) {

  const items = data[category]

/* 
  const [visibleItems, setVisibleItems] = useState(9)
  const [showButton, setShowButton] = useState(true)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => {
      const newVisibleItems = prevVisibleItems + 3
      if (newVisibleItems >= shoes.length) {
        setShowButton(false)
      }
      return newVisibleItems
    })
  }; */
  return (
    <main className="content-container">
       
      <div className="product-container">
        {items.map((item, index)=>(
          <div className="card-container" key={index}>
            <CardItem item={item}/>
      
          </div>
        ))}
        
      </div>
      
     {/*  {showButton && (
        <button onClick={loadMoreItems} className='btn-content'> Ver más</button>
      )} */}
    </main>
  )
}
