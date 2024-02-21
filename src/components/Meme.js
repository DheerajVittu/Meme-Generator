// Meme.js
import React from 'react';
import Memedata from '../Memedata';

export default function Meme() {
  const [memeImg, setMemeImg] = React.useState({
    topText:" ",
    bottomText:" ",
    randomImg: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allmemeImg , setallmemeImg] = React.useState(Memedata)

  function getMeme() {
    const memearr = allmemeImg.data.memes;
    const randomNum = Math.floor(Math.random() * memearr.length);
    const url = memearr[randomNum].url;
    setMemeImg(prev =>{
      return {
        ...prev,
        randomImg:url
      }
  })
}

function handleClick(event){
  const {name,value} = event.target
  setMemeImg(prev => ({
    ...prev,
    [name] : value
  }))
}

  return (
    <main>
      <div className="form">
        <div>
          <label className="form--label">Top Text</label>
          <input 
          className="form--input" 
          type="text" 
          placeholder="Enter Top text"
          name = "topText"
          value={memeImg.topText}
          onChange={handleClick}
          />
        </div>
        <div>
          <label className="form--label">Bottom Text</label>
          <input 
          className="form--input" 
          type="text" 
          placeholder="Enter Bottom text"
          name="bottomText"
          value={memeImg.bottomText}
          onChange={handleClick}
          />
        </div>
        <button className="form--button" onClick={getMeme}>
          Get a new Meme image
        </button>
      </div>
      <div className='meme'>
       <img src={memeImg.randomImg} className="meme--image" alt="Meme" />
       <h2 className="meme--text top">{memeImg.topText}</h2>
       <h2 className="meme--text bottom">{memeImg.bottomText}</h2>
      </div>
    </main>
  );
}
