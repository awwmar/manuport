import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  let [loading, setLoading] = useState(false);
  let [divImg,setDivImg] = useState('https://a.storyblok.com/f/240783/424x283/78ab1c3609/we-believe-in-people-compressed-2.png/m/1024x560/filters:quality(95):focal()');

  useEffect(()=> {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  },[])


  return (
    <div className='fullBody'>
    {
      loading ?
      <div className='loadScr'>
      <BounceLoader
      color={"#ffffff"}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>

      :

    <div className="App">
      <div className="header">
        <div className="logo">Manuport 
        <div>Logistics</div></div>
        <div className="menu"> 
            <div className="menuOptions">Home</div>
            <div className="menuOptions">Services</div>
            <div className="menuOptions">Commodities</div>
            <div className="menuOptions">Digital</div>
            <div className="menuOptions">Careers</div>
            <div className="menuOptions">About</div>
            <div className="menuOptions">ESG</div>
            <div className="menuOptions">Contact</div>
        </div>
      </div>

    <div className="bigBox">
      <div className="box1">
        <div className='divOneText'><h1 className='text1'>Freight forwarding. Done</h1><h1 className="text2">different.</h1></div>
        <div className='divOneVideoBox'>
        <video  className="divOneVideo"  autoPlay loop muted>
            <source src="https://a.storyblok.com/f/240783/x/1b03c229b0/peoplev4_compressed.mp4"/>
            </video>
        </div>
      </div>

      <div className="box2">
        <div className='subDiv21'>We're Different Because
          <img className="box2Img" src={divImg} alt="" />
        </div>
        <div className='subDiv22'>
          <div className="subDivText">
            <h1 className="subDiv22Text1">We Believe in People</h1>
            <h2 className="subDiv22Text2">We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential.</h2>
          </div>

          <div className="subDivText" >
            <h1 className="subDiv22Text1">We Solve Each and Any Shipping Problem</h1>
            <h2 className="subDiv22Text2">We work with teams per commodity, each with specific domain expertise, to provide high-quality solutions or knowledge for any product or request. With offices around the world, we have excellent knowledge of local markets, laws, and customs.</h2>
          </div>

          <div className="subDivText">
            <h1 className="subDiv22Text1">Single Point of Contact</h1>
            <h2 className="subDiv22Text2">Our colleagues assist and guide customers from end to end in all logistics processes, including customs clearance and tender and procurement services.</h2>
          </div>
          
          <div className="subDivText">
            <h1 className="subDiv22Text1">Flexible & Fast Decision-Making</h1>
            <h2 className="subDiv22Text2">Our flexibility and desire to help customers in any way possible really sets us apart. Our fast decision-making comes from the open internal communication strategy we follow.</h2>
          </div>
          {/*<div className="box2Img"><img src={divImg} alt="" /></div>*/}
        </div>
      </div>
    </div>

    <div className="locText">OUR LOCATIONS</div>
    
    <div className="bigBox2">
      <p className="bigBox2Text">Around the world, our teams are dedicated to meeting your logistics needs. As part of the Euroports Group, we can leverage group assets to support our solutions and add financial stability and flexibility, which is all to your benefit. Spin the globe and find your location.</p> 
      <button className="locBtn"> All Locations <div className="locFig">  </div></button>
    </div>

    <div className="marqCountry">
      <p className="marqText">Country1 Country2</p>
      <p className="marqText2">Country1 Country2</p>
      <p className="marqText">Country1 Country2</p>
      <p className="marqText2">Country1 Country2</p>
    </div>

{/*     <div className="moveBox"> 
        <div className="moveBoxText">How we Move</div>
        <img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Barging-Business.png&w=768&q=75" className="moveBoxImg" alt="" />
        <div className="moveBoxSubText">Manuport Logistics offers a different approach to shipping, guided by creative thinking. Ship, barge, plane, train, truck, or a combination. For you, we move mountains.</div>
        <button className="disc">Discover Our Services</button>
    </div>

    <div className="moveBox2">
        <div className="moveBox2Text">What we Move</div>
        <div className="moveBox2SubText">Behind every shipment lies a world of possibilities. Whether it's raw materials, chemicals, consumer goods, or anything else. What we ship isn’t just cargo, we carry your dreams.</div>
        <button className='disc'></button>
    </div>

    <div className="trans">
        <div className="transText">A Fully Transparent Logistics Flow at your Fingertips</div>
        <div className="transSubText">We map out your entire logistics flow, so you always know the whereabouts of your cargo. With our user-friendly tool, you have full control and can make quick adjustments when necessary.</div>
        <button className='disc'></button>
        <div className="transImg"></div>
    </div> */}

    <div className="overlapBox1">
    <video  className="OverlapVideo" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted>
          <source src="https://a.storyblok.com/f/240783/x/1ecf1fbe00/people1-video-extracompressed.mp4" type="video/mp4" />
        </video>
        <div className="blueOverlay"></div>
      <div className="overlapBoxText">A Unique Company Culture</div>
    </div>

    <div className="overlapBox2">
      <div className="overlapBox2Text1">With a heart for logistics and great teamwork</div>
      <div className="overlapBox2Text2">The MPL family: a team that consists of more than 700 differentiators, spread across the globe. They all have one thing in common: a passion for logistics! They're highly skilled and hands-on, driven by the goal of making logistics more efficient and reliable, and with a commitment to putting our customers first. We do this by using our creative solutions to gain customers' trust, and deliver satisfaction.</div>
      <button className="joinBtn">Join our Team</button>
    </div>

    <div className="vacancies">
      <div className="vac1">
      <p className="vacText">VACANCIES</p>
      <p className="vacText2">Join Our Team</p>
      <button className="vacBtn">All Vacancies</button>
      </div>
      
      <div className="teamInfoBox">
      <div className="teamInfo">
        <img className="teamImg" src="https://a.storyblok.com/f/240783/4284x5712/da9bdcae14/img_6127.jpeg/m/1720x2167/filters:quality(95):focal(2000x2484:2001x2485)" alt="" />
        <div className="teamText">Pricing & Operations Associate</div>
        <div className="teamSubText">MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.</div>
        <button className="apply"> Apply here</button>
      </div>

      <div className="teamInfo">
      <img className="teamImg" src="https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1720x2167/filters:quality(95):focal()" alt="" />
        <div className="teamText">Pricing & Operations Associate</div>
        <div className="teamSubText">MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.</div>
        <button className="apply"> Apply here</button>
      </div>

      <div className="teamInfo">
      <img className="teamImg" src="https://a.storyblok.com/f/240783/4025x5736/47b17d3443/5-1-171.jpg/m/1720x2167/filters:quality(95):focal()" alt="" />
        <div className="teamText">Pricing & Operations Associate</div>
        <div className="teamSubText">MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.</div>
        <button className="apply"> Apply here</button>
      </div>
      </div>
      
    </div>

    <div className="bgDiv">
      <div className='blogTex'>BLOG</div>
      <div className='blogTex2'>What's New at MPL</div>
    </div>

    <div className="blog">
        <div className="blog1">
          <img className="blogImg" src="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1720x1176/filters:quality(95):focal(1105x470:1106x471)" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>
        <div className="blog1">
          <img className="blogImg" src="https://a.storyblok.com/f/240783/3024x1825/6a55579d92/0ef759c4-d719-4184-b7c7-f278e3b4c596.png/m/1720x1176/filters:quality(95):focal(1574x509:1575x510)" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>
        <div className="blog1">
          <img className="blogImg" src="https://a.storyblok.com/f/240783/4000x3000/5ffbc69a20/20231213_163423.png/m/1720x1176/filters:quality(95):focal(2114x2736:2115x2737)" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>
        <div className="blog1">
          <img className="blogImg" src="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1720x1176/filters:quality(95):focal(1105x470:1106x471)" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>
        <div className="blog1">
          <img className="blogImg"src="https://a.storyblok.com/f/240783/6633x4422/9688d7d8ec/opening_office_casablanca.jpeg/m/1720x1176/filters:quality(95):focal()" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>
        <div className="blog1">
          <img className="blogImg" src="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1720x1176/filters:quality(95):focal(1105x470:1106x471)" alt="" />
          <div className="blogTitle">The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes</div>
          <div className="blogText">Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.</div>
        </div>

    </div>


    <div className="footBox">
    <div className="commo">
      <p className="commoText">COMMODITIES</p>
      <p className="commoText2"> What we Move</p>
      <button className="moveBtn"> Commodities</button>
    </div>

    <div className="serv">
      <p className="servText">OUR SERVICES</p>
      <p className="servText2">How we Move</p>
      <button className="servBtn"> Services</button>
    </div>
    </div>

    <div className="getInTouch">
      <img className="getInTouchImg" src="https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/1720x1332/filters:quality(95):focal()" alt="NO PIC" />
      <h1 className="getInTouchText">Get In Touch</h1>
      <h2 className="getInTouchSubText">Get local advice for your global request. Contact us now</h2>
    </div>


    <div className="footer">
      <h1 className="footLogo">MANUPORT LOGISTICS</h1>
      <li className="menu">
        <ul className="footOptions">SERVICES</ul>
        <ul className="footOptions">COMMODITIES</ul>
        <ul className="footOptions">DIGITAL</ul>
        <ul className="footOptions">CAREERS</ul>
        <ul className="footOptions">BLOG</ul>
        <ul className="footOptions">ABOUT</ul>
        <ul className="footOptions">CONTACT</ul>
      </li>
    </div>


    </div>
}
    </div>
  );
}

export default App;
