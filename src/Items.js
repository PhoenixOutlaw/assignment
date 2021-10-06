import React from 'react'
import './item.css'

export const Items = () => {
    return (
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYLOaI0YiD34YeBKSafTMqAEDOI_J8dJKeg&usqp=CAU" alt="" />
            <div className="iteminfo">
                <div className="qty"></div>
                <h4>Orange</h4>
                <h6>* * * * * </h6>
                <h5>$100.00</h5>
                <button>Add To Cart</button>
            </div>
            
            
        </div>
    )
}
