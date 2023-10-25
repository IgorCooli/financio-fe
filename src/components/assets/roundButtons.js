import React from 'react';
import { Button } from 'react-bootstrap';

const RoundButton = ({ text, iconClass }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '25px' }}>
                <Button
                    className="btn-block"
                    style={{
                        backgroundColor: '#E6E6FA',
                        color: '#159469',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        
                    }}
                >
                    <i className={iconClass} style={{ fontSize: '20px' }}></i>
                </Button>
                <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{text}</div>
            </div>
        </div>
    );
};

export default RoundButton;
