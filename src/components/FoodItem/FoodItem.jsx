import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

export default function FoodItem({id , name ,price, description,category,image}) {
    const {cartItem , addToCard , removeFromCard} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItem[id] ? 
                        <img className='add' onClick={()=> addToCard(id)} src={assets.add_icon_white} alt="" srcset="" />
                        :<div className='food-item-counter'>
                            <img onClick={()=> removeFromCard(id)} src={assets.remove_icon_red} alt="" srcset="" />
                                <p>{cartItem[id]}</p>
                            <img onClick={()=> addToCard(id)} src={assets.add_icon_green} alt="" srcset="" />
                        </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}
