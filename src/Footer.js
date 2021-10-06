import React from 'react'
import './footer.css'
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';

export const Footer = () => {
    return (
        <div className="footer">
           <div className="fh">
               <div>
                   <DeliveryDiningRoundedIcon/>     
                   <span>
                       <h4>Free Shipping</h4>
                       <h6>World Wide</h6>
                       </span>              

               </div>
               <div>
                   <PhoneEnabledRoundedIcon/>
                   <span>
                       <h4>Help line</h4>
                       <h6>(00) 00 00 0</h6>
                       </span> 
               </div>
               <div>
                   <HeadsetMicRoundedIcon/> <span>
                       <h4>24 X 7</h4>
                       <h6>Customer service</h6>
                       </span> 
               </div>
            </div>           
            
        </div>
    )
}
