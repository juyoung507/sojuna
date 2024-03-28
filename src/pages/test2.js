import React from 'react';
import img from './KakaoTalk_20240328_155046073_01.jpg'
import { useNavigate } from 'react-router-dom';


function Test2() {

    const navigate = useNavigate();

    return (
        <div className='layout'>
            <div className="Before">

                <img src={img} alt="test1 img" style={{ width: '50rem', height: '30rem', marginLeft: '5%' }} />
            </div>

            <button
                style={{
                    marginTop: '5%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >1. 흐음</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq1')}
            >2. 하아</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >3. 아</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/test3')}
            >4. 덜덜</button>
        </div>
    );
}

export default Test2;