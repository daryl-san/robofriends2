import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid cyan', height: '90rem' }}>
            {
                props.children
            }
        </div>
    );
};

export default Scroll;