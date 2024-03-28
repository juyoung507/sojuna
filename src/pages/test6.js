import React from 'react';
import img from './KakaoTalk_20240328_155046073_05.jpg'
import { useNavigate } from 'react-router-dom';


function Test6() {

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
                onClick={() => navigate('/Final')}
            >1. 하아 / 휴</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >2. 하 / 후</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >3. 아 / 휴</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq1')}
            >4. 나 / 야나</button>
        </div>
    );
}

export default Test6;