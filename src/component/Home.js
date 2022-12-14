import React from "react";
import './Home.css'
import web3mb from '../../src/assets/images/image-web-3-mobile.jpg'
import top from '../../src/assets/images/image-top-laptops.jpg'
import retro from '../../src/assets/images/image-retro-pcs.jpg'
import gaming from '../../src/assets/images/image-gaming-growth.jpg'
import web3bg from '../../src/assets/images/image-web-3-desktop.jpg'
export default function Home() {
    return(
        <div className="home-con">
        <div className="home">
            <div className="box1">
                <div>
                <img src={web3bg} alt="pic" className="pic" title="web" width="1460px" height="600px"/>
                <img src={web3mb} alt="pic" className="pic2" width="686"  height="600px" title="web"/>
               </div>
                <div className="box2">
<h1 className="web">The Bright <br/> Future of <br/> Web 3.0?</h1>
<div>
<p>We dive into the next evolution of the web that 
 claims to put the power of the platforms back <br/>
  into the hands of the people. But is it really 
fulfilling its promise? </p>
<button className="btn">Read More</button>
 </div>
        </div>
        </div>   
            
            <div className="box3-con">
            <div className="box3">
<h2>NEW</h2>
<h3>New Hydrogen VS Electric Cars</h3>
<p>Will hydrogen-fueled cars ever catch <br/> up to EVs? </p>
<hr/>
<h3>The Downsides of AI Artistry</h3>
<p> What are the possible adverse effects of <br/> on-demand AI image generation?</p>
<hr/>
<h3>Is VC Funding Drying Up? </h3>
<p> Private funding by VC firms is down 50% <br/> YOY. We take a look at what that means. </p>
        </div>
        </div>
        </div>
        <section className="box4">
            <div className="box">
                <img src={retro} alt="retro" title="retro" className="retro" width="200px"  height="254px"/>
                <div>
                    <h2>01</h2>
                <h3> Reviving Retro PCs </h3>
                <p> What happens when old PCs are given modern upgrades?</p>
                 </div>
            </div >
            <div className="box">
            <img src={top} alt="top" title="top" className="top" width="200px" height="254px" />
            <div>
                <h2>02</h2>
            <h3>Top 10 Laptops of 2022 </h3>
            <p> Our best picks for various needs and budgets.</p>
             </div>
            </div>
            <div className="box">
                <img src={gaming} alt="gaming" className="gaming" width="200px" title="gaming " height="254px"/>
                <div>
                    <h2>03</h2>
                <h3>The Growth of Gaming </h3>
                <p> How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
       

        </section>
        </div>
    )
}