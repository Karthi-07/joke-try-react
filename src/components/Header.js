import React from 'react'
import '../style/header-style.css'
import Data from './database'
import Joke from './Joke'
const  Header = () => {
  const jokeelements = Data.map((item)=>{
    return <Joke setup={item.setup} punchline={item.punchline} vote={item.vote}/>
  })
  // const color = [<h5>kkol</h5>,<h5>kkol</h5>,<h5>kkol</h5>,<h5>kkol</h5>]
  return (
    <div>
       {/* {color} */}
        {/* <div className='headname'>
           <img src={logo} className='logo'></img>   
           
           <h4>Meme Genertor</h4>
      </div> */}
      {jokeelements}
       {/*
         we can pass any type of value in the props 
          boolean,number,.. non string value
          if we didn't use string as props we use {} for mentioning
          we can also pass a array of objects in props -> eg : in comments that
          need author id,author text..etc
          comments={[{author-id:1,author-name:kkkk,...},{},{},..{}]} 
       */} 
        
       {/* <Joke 
        isbol={true}
        punchline="I can't wait to seeher face light up when she opens it"
        vote={9}/>
        
        <Joke setup="I got my daughter a fridge for her birthday" 
        punchline="I can't wait to seeher face light up when she opens it"
        isbol={true}
        vote={10}/>
        
        <Joke setup="I got my daughter a fridge for her birthday" 
        punchline="I can't wait to seeher face light up when she opens it"
        vote={7}/>
        
        <Joke setup="I got my daughter a fridge for her birthday" 
        punchline="I can't wait to seeher face light up when she opens it"
        vote={12}/>
        
        <Joke setup="I got my daughter a fridge for her birthday" 
        punchline="I can't wait to seeher face light up when she opens it"
        vote={44}/> */}
       
    </div>
  );
}

export default Header;