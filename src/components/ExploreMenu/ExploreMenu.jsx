import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
export default function ExploreMenu({catagry , setCatagry}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Expore Our Menu</h2>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestiae animi dolorem quidem distinctio perferendis repellat inventore! Hic recusandae animi facere! Earum assumenda nihil perspiciatis inventore quas alias iure vero?</p>
        <div className="expore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCatagry(prev => prev === item.menu_name ?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={catagry === item.menu_name?"active":""} src={item.menu_image} alt="" srcset="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            } )}
        </div>
        <hr/>
    </div>
  )
}
