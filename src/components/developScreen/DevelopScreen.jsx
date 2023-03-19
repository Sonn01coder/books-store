import React, { useEffect } from 'react';
import './developScreen.css'
import maintenance from '../../asset/img/maintenance.png'

function DevelopScreen(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='developScreen'>
            <img src={maintenance} alt='maintenance'/>
            <p>Ứng dụng này đang phát triển</p>
        </div>
    );
}

export default DevelopScreen;