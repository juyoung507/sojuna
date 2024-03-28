import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from './sojuna.jpg'

function Home() {
    const navigate = useNavigate();


    const test1 = () => {
        navigate('/test1');
    };

    return (
        <div className='layout'>
            <div className="Before">


                <img src={img} alt="test1 img" style={{ width: '45rem', height: '30rem', marginLeft: '5%' }} />

            </div>

            <button style={{marginTop: '5%', marginLeft: '28%', width: '50%', background: 'greenyellow'}}
            onClick={test1}>소주나줘 테스트 시작하기</button>
        </div>
    );
}

export default Home;