import React from 'react';
import './App.css';
import data from './members_details.json'
import { useEffect, useState } from 'react';

const ResponsiveSVGText = ({ name }) => {
  const [pathD, setPathD] = useState(getPathD(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setPathD(getPathD(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getPathD(width) {
    if (width < 660) {
      return 'M 0,130 A 350,350 0 0,1 500,130'; // more curve
    } else if (width < 1150) {
      return 'M 0,260 A 200,200 0 0,1 500,260'; // medium curve
    } else {
      return 'M 0,130 A 330,330 0 0,1 500,130'; // default curve
    }
  }

  return (
    <svg className="name" viewBox="0 0 500 100">
      <path id="topcurve" d={pathD} fill="transparent" />
      <text>
        <textPath href="#topcurve" startOffset="50%">
          {name}
        </textPath>
      </text>
    </svg>
  );
};

function App() {
  return (
    <div className="App">
      
      <h1>F!ROSH Orientation Committee</h1>

      {/* - Draw the bottom curve DONE
      - Have the proper text for each person become curved DONE
      - Position them relative to the pictures DONE
      - Change size/position relative to size of screen DONE FOR NAME
      - Find a background that isn't uglyy DONE*/}

      <div className="flex_container">
        {data.map((item, index) => (
             <div className = "flex_item" key={index}>

               <img src={item.picture}></img>

                <ResponsiveSVGText name = {item.name}/>

                <svg className="position" viewBox='0 0 500 100'>
                  <path id="botcurve" d="M 100, -590 A 370, 370 0 1,0 400, -590" fill="transparent"/>
                    <text>
                      <textPath href="#botcurve" startOffset="50%">
                        {item.position}
                      </textPath>
                    </text>
                </svg>

             </div>
           ))}
      </div>

      <footer>
           <p>More information/contact us/copyright here</p>
      </footer>

    </div>
  );
}

export default App;
