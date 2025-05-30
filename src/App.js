import React from 'react';
import './App.css';
import data from './members_details.json'
import { useEffect, useState } from 'react';

const CreateName = ({ name }) => {
  const [Top, setTop] = useState(getTop(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setTop(getTop(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getTop(width) {
    if (width < 660) {
      return 'M 0,130 A 350,350 0 0,1 500,130';
    } else if (width < 1150) {
      return 'M 0,260 A 200,200 0 0,1 500,260';
    } else {
      return 'M 0,130 A 330,330 0 0,1 500,130';
    }
  }

  return (
    <svg className="name" viewBox="0 0 500 100">
      <path id="topcurve" d={Top} fill="transparent" />
      <text>
        <textPath href="#topcurve" startOffset="50%">
          {name}
        </textPath>
      </text>
    </svg>
  );
};

const CreatePos = ({ position }) => {
  const [Bot, setBot] = useState(getBot(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBot(getBot(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getBot(width) {
    if (width < 660) {
      return  "M 100,-600 A 370, 370 0 1,0 400,-600";
    }else if (width < 1150){
      return  "M 100,-410 A 280, 280 0 1,0 400,-410";
    } else if (width < 1260) {
      return  "M 100,-510 A 320, 320 0 1,0 400,-510";
    } else {
      return "M 100,-590 A 370, 370 0 1,0 400,-590";
    }
  }
  return (
    <svg className="position" viewBox='0 0 500 100'>
      <path id="botcurve" d={Bot} fill="transparent"/>
        <text>
          <textPath href="#botcurve" startOffset="50%">
            {position}
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
      - Find a background that isn't uglyy DONE

      - make position's curve and postion also responsive*/}

      <div className="flex_container">
        {data.map((item, index) => (
            <div className = "flex_item" key={index}>

              <img src={item.picture}></img>

              <CreateName name = {item.name}/>

              <CreatePos position = {item.position}/>

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
