import React from 'react';
import img from './끝.jpg'


function Final() {


    return (
        <div className='layout'>
            <div className="Before">

                <img src={img} alt="test1 img" style={{ width: '30rem', height: '40rem', marginLeft: '5%' }} />
            </div>
            <div
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    fontSize: '80px'
                }}
            >끝낫져요! </div>
        </div>

    );
}

export default Final;