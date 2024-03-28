import React from 'react';
import img from './KakaoTalk_20240328_155046073_03.jpg'
import { useNavigate } from 'react-router-dom';


function Test4() {

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
                onClick={() => navigate('/test5')}
            >1. 콜</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq1')}
            >2. 음</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >3. 고민 좀</button>
            <button
                style={{
                    marginTop: '1%',
                    marginLeft: '28%',
                    width: '50%',
                    background: '#C8E6C9'
                }}
                onClick={() => navigate('/dhekq2')}
            >4. ㅋㅋㅋㅋ</button>
        </div>
    );
}

export default Test4;