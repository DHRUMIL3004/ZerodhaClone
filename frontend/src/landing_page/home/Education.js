import React from 'react';

function Eduction() {
    return ( 
      <div className='container mt-5'>
          <div className='row '>
            <div className='col '>
                <img src='media/images/education.svg' alt='eductionImages' style={{width:"70%"}}/>
            </div>
             <div className='col'>
                <h1 className=' fs-2'>Free and open market education</h1>
                <p className='mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a className='mt-2 ' style={{textDecoration:"none"}} href=''>Varsity</a>
                <p className='mt-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className='mt-2 '  style={{textDecoration:"none"}} href=''>TradingQ&A</a>
             </div>
        </div>
      </div>
     );
}

export default Eduction;