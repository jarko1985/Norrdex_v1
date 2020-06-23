import React from 'react';

import loadingGIF from '../images/gif/loading-gear.gif';

const Loading = () => {
    return (
        <div className='loading'>
            <h4>Loading tours data</h4>
            <img src={loadingGIF} alt=''/>
        </div>
    )
}

export default Loading;
