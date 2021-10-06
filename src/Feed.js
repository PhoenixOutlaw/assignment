import { Avatar } from '@mui/material'
import React from 'react'
import './feed.css'
import { Items } from './Items'

export const Feed = () => {

  function News({hori}){
      return (
          <div className={hori?("horiz"):("newsart")}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2JlQ80GwM5g4A8zrsdvz-Tq936FV-pbefINKUDotB_YsVO9FPvi6FuD5ExQCQAh12Lk&usqp=CAU" alt="" />
              <div>

              <h6>March 35,3002</h6>
              <h4>Best in Quality</h4>
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
              <button>Read More</button> 

              </div>
          </div>
      )
  }


    return (
        <div>
            <div className="feed1" style={{backgroundImage:"url(/assign.jpg)"}}>
              <div>
                  <h5> 100% Healthy & Affordable</h5>
                  <h1>Organic Vegetables</h1>
                  <h4>Small Changes Big Difference</h4>
                  <button>Shop Now</button>
              </div>
            </div>

            <div className="ext">
                <div className="d1" style={{borderTopLeftRadius:"100px",borderBottomLeftRadius:"100px"}}>
                    <img style={{borderTopLeftRadius:"100px",borderBottomLeftRadius:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDQJY8hGRDz23FHc9R6G2OHQ16lHP0_XvDg&usqp=CAU" alt="" />
                    <div>                
                       <h5>Veggies</h5>
                       <span><h4>100% &nbsp;</h4><h5 style={{fontSize:"11px",fontWeight:"500"}}>Organic</h5></span>
                       <h5 style={{fontSize:"11px",fontWeight:"500"}}>Products</h5>
                       <button style={{marginTop:"10px",fontSize:"11px",fontWeight:"500",borderRadius:"5px",border:"rgba(0, 0, 0, 0.78)",padding:"3px",backgroundColor:"white"}}>Shop Now</button>
                    </div>
                </div>
                <div className="d1" style={{borderTopRightRadius:"100px",borderBottomRightRadius:"100px"}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL20DXNFk7v8Dxf_FJJVw6WI3mTwYzsbYmfHHIwl6LLZ_zbQN9JyLrYhQvcV6Iviir1WM&usqp=CAU" alt="" />
                    <div style={{borderTopRightRadius:"100px",borderBottomRightRadius:"100px"}}>
                       <h5>Fruits</h5>
                       <span ><h4>100% &nbsp;</h4><h5 style={{fontSize:"11px",fontWeight:"500"}}>Organic</h5></span>
                       <h5 style={{fontSize:"11px",fontWeight:"500"}}>Products</h5>
                       <button style={{marginTop:"10px",fontSize:"11px",fontWeight:"500",borderRadius:"5px",border:"rgba(0, 0, 0, 0.178)",padding:"3px",backgroundColor:"white"}}>Shop Now</button>
                    </div>
                </div>
                
            </div>
            <div className="feed2">
                <h3>Our Products</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta maiores est error officiis aliquid</p>
                <div className="items">
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>

                <div className="spdisc">
                    <div>
                        <h2>Special Discounters</h2>
                        <h2>for all Grocery products</h2>
                        <p>Lorem ipsum dolor sit  voluptas ullam nisi nulla labore molestias quo possimus cumque!</p>
                        <div id="tym">
                            <span>
                            <h1>171</h1>
                            <h5>Days</h5>
                            </span>
                            <h1>:</h1>
                            <span>
                            <h1>11</h1>
                            <h5>Hours</h5>
                            </span>
                            <h1>:</h1>
                            <span>
                            <h1>15</h1>
                            <h5>Minutes</h5>
                            </span>
                            <h1>:</h1>
                            <span>
                            <h1>25</h1>
                            <h5>Seconds</h5>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="feed3">
                <div>
                    <h2>Our Client Say!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore vel est?  mollitia omnis, aliquid molestias ex placeat rerum aspernatur doloribus error.</p>
                    <div className="story">
                        <div>
                        <Avatar style={{height:"26px",width:"26px",marginRight:"10px"}}/>
                            <span><h4 style={{margin:"0",fontSize:"13px"}}>name</h4><h6 style={{margin:"0",fontSize:"8px"}}>something</h6></span>
                        </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ratione magni incidunt repellat, dicta veniam itaque nisi officia earum distinctio nihil doloribus, sunt ut vero voluptatum omnis sed dolore eos?
                            </p>
                    </div>
                </div>                
            </div>
            <div className="feed4">
            <h2 style={{color:"rgba(111, 189, 75, 0.842)"}}>Our Latest News</h2>
            <p>Lorem ipsum dolor sit amet rerum aspernatur doloribus error.</p>
             <div className="newsgrid">
                 <div className="dlft">
                     <News hori={false}/>
                 </div>
                 <div className="drht">
                     <News hori={false}/>
                     <News hori={false}/>
                     
                 </div>
              </div>

              <div className="sub">
                 <div>
                     <h2>Subscribe to Our Newsletter</h2>
                     <div>
                         <input type="text" />
                         <button>Read More</button>
                     </div>
                     </div> 
            </div> 
            </div>
        </div>
    )
}
