import React from 'react';
import img from './KakaoTalk_20240328_155046073.jpg'
import { useNavigate } from 'react-router-dom';


function Test1() {

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
                onClick={() => navigate('/dhekq1')}
            >1. 으잉 </button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq1')}
            >2. 아</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/test2')}
            >3. 엥 </button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >4. 엑 </button>
        </div>

    );
}

export default Test1;