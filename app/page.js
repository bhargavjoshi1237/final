

export default function Home() {
  return (
   < >
   
   <div  className='columns-3 top-0 right-0 grid grid-cols-11 gap-4'  >
          
    
                    <h3 style={{color:"white", fontSize:"27px",marginLeft:"100px", paddingTop:"30px", fontFamily:'Open',width:"200px"}}>Anime Alley</h3>
                    <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"white", fontSize:"19px",marginLeft:"180px", paddingTop:"37px", fontFamily:'Openr',width:"100px"}}>YouTube</h2>
                    <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"white", fontSize:"19px",marginLeft:"120px", paddingTop:"37px", fontFamily:'Openr',width:"100px"}}>Games</h2>
                    <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"white", fontSize:"19px",marginLeft:"50px", paddingTop:"37px", fontFamily:'Openr',width:"100px"}}>Space</h2>
                    <h2 className='right-0 transform transition duration-300 hover:scale-105' style={{color:"white", fontSize:"19px",marginLeft:"-25px", paddingTop:"37px", fontFamily:'Openr',width:"100px"}}>Blogs</h2>
          
                 <img className='absolute top-0 right-0' style={{width:"42px",paddingTop:"28px",marginRight:"1.5%"}} src="https://img.icons8.com/windows/64/FFFFFF/user-male-circle.png" alt="" />
                   </div> <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
               
                   <nav style={{marginLeft:"3.5%"}} className="flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">News</a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">YouTube News</span>
                      </div>
                    </li>
                  </ol>
                </nav>     
          
          <div className='columns-2' style={{paddingLeft:"1.6%",}}>
          <div className='columns'> 
            <span style={{marginLeft:"3.5%",marginTop:"30px"}} class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
              <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
            </svg>
            <span class="sr-only">Icon description</span>
          </span>
            
            YouTube  NEWS
          </span>
          <p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%", marginTop:"13px"}}> min read
          </p>
          
          <h1 style={{paddingTop:"5px",fontFamily:'Open',fontSize:"35px",paddingLeft:"3.5%",width:"100%"}}>Dillon Danis Denies Pulling Out of Logan Paul Fight After Tweeting About It.</h1></div>
          <div className='column-2 top-0 right-0 grid grid-cols-6 gap-4 auto-cols-auto ' style={{ width:"45%",marginTop:"15px", paddingLeft:"3.5%", }}>
            <img className='float-start' src="https://animealley.online/dp.jpg" alt="" style={{borderRadius:"50px", height:"50px", width:"50px"}} />
            <div className='row-2 col-span-3 ' style={{width:"100%",}}>
              <div className='columns-2'>
            <p className='' style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"5px", }}>Jack</p>
            <span class=" bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">PRO</span>
          
            </div>
          
            
            <p className='float-start' style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"2%",marginTop:"0px", }}>Published: </p>
            </div>
            </div>
          
          <p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px"}}>Over the years, MMA athlete Dillon Danis has built himself a reputation for never showing up to any of his fights. It happens every time, this strange self-sabotaging that always ends with him pulling out of a fight for one reason or another. During the most recent FLAGRANT podcast episode, comedian Andrew Schulz and his crew kept telling Danis he would probably pull out. But Dillon kept on telling them he was 100% committed to the fight. Thursday's tweet outburst after watching Logan Paul brag about the many lawsuits against Danis made him explode.</p>
          <p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px"}}>In his own words, he did say "I'm out!" But he backtracked after Mike Perry said he was officially taking Dillon Danis' spot. As expected, almost all of sports media had to write up a piece like this one to clarify the situation.
          In his own words, he did say "I'm out!" But he backtracked after Mike Perry said he was officially taking Dillon Danis' spot. As expected, almost all of sports media had to write up a and once lost, it's hard to recover.</p>
          
          <div className='columns-4 float-left' style={{width:"100%",paddingLeft:"3%"}}>
            <svg className='transform transition duration-300 hover:scale-110 float-left' style={{width:"50px", paddingLeft:"5px" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
          </svg>
          <svg className='transform transition duration-300 hover:scale-110 float-left' style={{width:"50px", paddingLeft:"5px" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4b4b4b"></stop><stop offset=".247" stop-color="#3e3e3e"></stop><stop offset=".686" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#252525"></stop></linearGradient><path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
          </svg>
          <svg className='transform transition duration-300 hover:scale-110 float-left' style={{width:"50px", paddingLeft:"5px" }}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          
          </div>
          <br />
          <br />
          <br />
          <br />
          <img className='shadow-inner' style={{maxWidth:"80%",marginLeft:"150px", borderRadius:"0px"}} src="https://cdn.vox-cdn.com/thumbor/0y-hyENf_E1C61JydjRSpTjS0TA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16346203/064_Dillon_Danis_x_Max_Humphrey.jpg" alt="" />
          
          </div>          
     
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600"></hr>
{/* <h1 style={{paddingTop:"25px",fontFamily:'Open',fontSize:"35px",paddingLeft:"3.5%",width:"100%"}}>Dillon Danis Denies Pulling Out of Logan Paul Fight After Tweeting About It.</h1></div> */}


<h1 style={{fontFamily:'Open',fontSize:"35px",paddingLeft:"3.5%",width:"100%",paddingRight:"3%"}}>Who is fed up with Dillon Danis? Pulling Out OF Influencer the Boxing? This Will be his third time! in last 2 years!</h1>

<p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"30px"}}>One thing is for sure: Dillon Danis is a polarizing figure in combat sports. His reputation as an athlete who doesn't show up to fights and consistently engages in despicable behavior outside the cage has made him the ultimate heel. He's cried wolf so many times that people have grown weary of his antics. This time, when he declared his intention to pull out of the fight was a joke, it left many in the fight industry questioning his credibility.

Danis has become the proverbial boy who cried wolf in combat sports. He's made it increasingly difficult for fans, fighters, and the media to take him seriously. Some within the industry are now urging him to make good on his words and actually pull out of the fight. Perhaps, they suggest, the best course of action is to stop giving him the attention he craves and let him fade into obscurity. As long as people continue to indulge his theatrics, Dillon Danis will remain in the news cycle, much to the chagrin of many, including us at Marca.</p>
  <p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px"}}>After the circus that unfolded on social media, it's safe to say that hardly anyone within the fight game believes that Dillon Danis will actually show up for the fight. The consensus is that we should all be prepared for his inevitable withdrawal, accompanied by some creative excuse. If this scenario plays out, Logan Paul will have the last laugh, and his skepticism about Danis will be justified.

There's a reason why nobody in the industry takes Dillon Danis seriously anymore. His antics have overshadowed his skills and made him a figure of mockery. It's almost become a sport in itself to predict when Danis will pull out of a fight. It's a spectacle that captures the attention of fans and pundits alike, but it's a sad reflection of how far he's fallen in the eyes of many.
</p>


<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600"></hr>



<center>

<h3 style={{fontFamily:'Open',fontSize:"35px",paddingLeft:"3.5%",width:"100%",paddingRight:"3%", paddingTop:"30px"}}>Card For This Fight Week!</h3>
<hr class="h-px my-8 bg-gray-200 border-0" style={{width:"66%", color:"gold"}}></hr>
<div style={{paddingTop:"20px", width:"70%", marginBottom:"50px"}} className='columns-4'>
  <div className='transform transition duration-300 hover:scale-105' style={{height:"780px", width:"280px", backgroundImage:`url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070-4070ti/geforce-ada-4070-family-og-1200x630.jpg')`, backgroundPosition:"center"}}></div>
  <div className='transform transition duration-300 hover:scale-105' style={{height:"780px", width:"280px", backgroundImage:`url('https://i.pinimg.com/736x/9f/4f/e5/9f4fe5839008ffa0fa2660896cee9ae0.jpg')`, backgroundPosition:"center"}}></div>
  <div className='transform transition duration-300 hover:scale-105' style={{height:"780px", width:"280px", backgroundImage:`url('https://talksport.com/wp-content/uploads/sites/5/2023/08/Logan-Paul-1.png')`, backgroundPosition:"center"}}></div>
  <div className='transform transition duration-300 hover:scale-105' style={{height:"780px", width:"280px", backgroundImage:`url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070-4070ti/geforce-ada-4070-family-og-1200x630.jpg')`, backgroundPosition:"center"}}></div>

</div>

</center>

{/* <center> */}
  
  {/* <h3 style={{fontFamily:'Open',fontSize:"30px",paddingLeft:"3.5%",width:"100%",paddingRight:"3%", paddingBottom:"10px"}} >Tweet Releted To Dillon Danis </h3> */}
  
  {/* <Tweet id="1712090684671340967" /></center> */}

<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600"></hr>

<h3 style={{fontFamily:'Open',fontSize:"35px",paddingLeft:"3.5%",width:"100%",paddingRight:"3%", paddingBottom:"10px"}} >Conclusion </h3>
<p style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px"}}>
In the world of combat sports, credibility is everything. Fighters are judged not just by their skills inside the cage but also by their actions andcommitments outside of it. Dillon Danis, once a rising star, now finds himself drowning in a sea of doubt and skepticism. Whether he shows up for the fight or not, the damage to his reputation has been done.
<br />
As we watch this drama unfold, one can't help but wonder if Dillon Danis will ever regain the respect and trust of the fight community. Until then, fans and observers will continue to place bets on the exact day he decides to pull out of another high-profile bout. In the end, it's a story that leaves us shaking our heads in disbelief and serves as a cautionary tale for aspiring fighters: credibility is fragile, and once lost, it's hard to recover.
<br />
Stay tuned as the Logan Paul vs. Dillon Danis saga continues, with Dillon Danis once again leaving us guessing and questioning his every move.


</p>

<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600"></hr>



<div className='columns-4' style={{marginTop:"30px"}} id='galary'>

<img className='   transform transition duration-300 hover:scale-105' style={{paddingBottom:"10px"}} src="https://phantom-marca.unidadeditorial.es/fae5ffe6522c1fb5e485d683f48111f1/resize/828/f/jpg/assets/multimedia/imagenes/2023/10/05/16965367769281.jpg" alt="" />
<img  className='   transform transition duration-300 hover:scale-105' style={{paddingBottom:"10px"}} src="https://dotesports.com/wp-content/uploads/2023/09/Logan-Paul-vs-Dillon-Danis.jpg" alt="" />
<img  className='   transform transition duration-300 hover:scale-105' style={{paddingBottom:"10px"}} src="https://talksport.com/wp-content/uploads/sites/5/2023/08/Logan-Paul-1.png" alt="" />
<img  className='   transform transition duration-300 hover:scale-105' style={{paddingBottom:"10px"}} src="https://s.yimg.com/ny/api/res/1.2/.MalS6mzDD7G1U4WZxZVQA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2023-02/d336f7b0-b62a-11ed-a3fd-527abdfd96a3" alt="" />
<img className='   transform transition duration-300 hover:scale-105'  style={{paddingBottom:"10px"}} src="https://espnpressroom.com/us/files/2023/02/PaulvsFury-1920x1080.png" alt="" />
<img  className='   transform transition duration-300 hover:scale-105' style={{paddingBottom:"10px"}} src="https://www.insidesport.in/wp-content/uploads/2023/02/16558426346828.jpg" alt="" />
<img  className='   transform transition duration-300 hover:scale-105' src="https://talksport.com/wp-content/uploads/sites/5/2023/05/jj-olajide-olatunji-l-joe-817254019.jpg" alt="" />
<br />
<br />
</div>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600"></hr>
<div className='columns-2'>
<div>
<div className='columns-4 float-left' style={{width:"100%",paddingLeft:"3%",marginBottom:"65px"}}>
  <svg className='transform transition duration-300 hover:scale-105 float-left' style={{width:"50px", paddingLeft:"5px" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
<svg className='transform transition duration-300 hover:scale-105 float-left' style={{width:"50px", paddingLeft:"5px" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4b4b4b"></stop><stop offset=".247" stop-color="#3e3e3e"></stop><stop offset=".686" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#252525"></stop></linearGradient><path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
</svg>
<svg className='transform transition duration-300 hover:scale-105 float-left' style={{width:"50px", paddingLeft:"5px" }}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>

</div>

  



  <p className='float-start' style={{width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px",maxWidth:"60%" }}>© 2023, Anime Alley , Inc. All rights reserved. Anime Alley, Anime AlleyWay , the Anime Alley logo,  are trademarks or registered trademarks of Anime Alley.online, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.   
</p>
<div className='columns-3 top-0 right-0 grid grid-cols-5 gap-4' style={{marginLeft:"3%"}}>
  <p className='float-start' style={{fontSize:"17px",width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px", }}></p>
  <p className='float-start'  style={{fontSize:"17px",width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"3.5%",marginTop:"20px"}}></p>
  <p  className='float-start' style={{fontSize:"17px",width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"1.5%",marginTop:"20px"}}></p>

  </div>
  </div>
  <div >
    <img className='transform transition duration-300 hover:scale-110 float-start' src="https://animealley.online/blog/logo%20svg.png" style={{height:"75px", width:"100px", marginTop:"35px"}} alt="" />
  <p   className='float-right' style={{fontSize:"17px",width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"1.5%",marginTop:"20px"}}>Copyright © AnimeAlley All Rights Reserved</p>
  <p  className='float-right' style={{fontSize:"17px",width:"100%",color:"#707070",fontFamily:'Openr',paddingLeft:"1.5%",marginTop:"8px"}}>Made with ❤ for anime Lovers

</p>
</div>
</div>
<div style={{height:"30px"}}></div>
  <center>
  

  </center>


   </>
  )
}
