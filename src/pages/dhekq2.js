import React from 'react';
import img from './dhekq2.jpg'
import { useNavigate } from 'react-router-dom';


function Dhekq() {

    const navigate = useNavigate();

    return (
        <div className='layout'>
            <div className="Before">

                <img src={img} alt="test1 img" style={{ width: '30rem', height: '30rem', marginLeft: '5%' }} />
            </div>
            <button
                style={{
                    marginTop: '5%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/')}
            >미쳤나.. 틀렸어</button>

        </div>
    );
}

export default Dhekq;