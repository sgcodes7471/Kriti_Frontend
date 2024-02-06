import './App.css';
import {useReducer, useState , useMemo} from 'react';

function Page1(){
  const [status , setStatus]=useState(true);
  const [login , setLogin]=useState(false);

console.log(login);
  function displayLoginPage(){
    setLogin(!login);
  }
  return(
    <>
    <div className='body-1'>
      
    <div className="section" id="left-section">
         <nav>
            <ul>
                <li> <button className='psuedo-btn' onClick={displayLoginPage}> LogIn</button></li>
                <li> <button className='psuedo-btn'> About</button></li>
                <li> <button className='psuedo-btn'> Election Guide</button></li>
            </ul>
         </nav>
         <div className="heading">
            <p>Hostel Management</p>
            <p>Committee Elections</p>
         </div>
         <div className="vote-btn">
        <button id="Btn">Register as Candidate</button> 
        <button id="Btn">Register as Voter</button> 
         </div>
    </div>

    <div className="section" id="right-section">
        <div className="voting-status">
            {status ? ('Voting is'):('Voting begins')} 
            <p id="status">{status ? ('LIVE'):('18th FEB')}</p>
        </div>
        <div className="illustration">
            <img id='Voting-img' src={require('./pics1.jpg')} alt=""/>
        </div>
    </div>
    </div>
    </>
  )
}

function Page10(){
  return(
    <>
     <div className="body-2">
    <div className="agenda-head-wrapper">
        <div id="agenda-img-cantainer">
            <img src={require('./pics2.jpg')} alt=""/>
        </div>
        <div className='agenda-candidate-details' id="agenda-name-img">
                <p className="cand-detail">
                    Candidate Name
                </p>
                <p className="cand-tag">
                    Raj Arya
                </p>
            
        </div>
        <div className='agenda-candidate-details' id="agenda-position-img">
            <p className="cand-detail">
                Contesting for
            </p>
            <p className="cand-tag">
                General Secretary
            </p>
        </div>
        <div id="agenda-cross-btn">
            <button id="cross-btn">X</button>
        </div>
    </div>
    <div className="agenda-body-wrapper">
        <p id="agenda-header">Agenda</p>
        <div className="agenda-list">
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad accusamus voluptatibus tempore, alias vero eos voluptas itaque fugit deserunt temporibus. Maxime voluptatum et iste reprehenderit e.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure facere earum assumenda odio veritatis fuga doloribus cupiditate voluptatum error laborum quam non, in vero saepe dolor quia, delectus pariatur?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto molestias qui, deserunt reiciendis beatae magnam? Itaque nisi, repudiandae accusamus, voluptate ex sequi molestias, consectetur distinctio ad ipsum maiores.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, atque doloribus dolor consectetur at fuga! Soluta, reprehenderit dolorem rerum animi corrupti et ut nostrum, sint facilis voluptatibus, est doloribus eius libero?</li>
            </ul>
        </div>
    </div>
    <div id="agenda-btn-wrapper">
        <button id="agenda-vote-btn">
            Vote
        </button>
    </div>
    </div>
    </>
  )
} 

function Page7(){ 
  const data=[
    {name:'Arya Pandey' , pos:'General Secretary'},{name:'Shyam Goyal' , pos:'Sports Secretary'},
    {name:'Amit Rampuria' , pos:'Welfare Secretary'},{name:'Jairam Bhatt' , pos:'Maintainece Secretary'},
    {name:'Pranay Singh' , pos:'Literary Secretary'}, {name:'Charan Dev' , pos:'Cultural Secretary'},
    {name:'Arun Chandan' , pos:'Services Secretary'},{name:'Hari Shikar' , pos:'Media Head'},
  ]
  return(
    <>
    <div className='body-1'>
    <div className="outer-wrapper">
    <h1 id="page7-heading">Confirm your Votes</h1>
    <div className="candidates-wrapper">
        {
          data.map((i)=>{
            return(
              <>
              <span>
              <span className="img-cantainer"><img className='candidates-img' src={require('./pics2.jpg')}/>
              <span className="img-name">{i.name}</span>
              <span className="img-pos">{i.pos}</span>
              </span>
              </span>
              </>
            )
          }
          )
        }
    </div>
    <div className="btn-wrapper">
        <button id="goback-btn">Go Back</button>
        <button id="submit-btn">Submit</button>
    </div>
    </div>
</div>
    </>
  )
}

export default function MyApp(){
  return(
    <>
    <Page10/>
    </>
  )
}

