import React from "react";
import '../assets/css/Skillbar.css'

const styleSkill = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

const styleOuter = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    padding: '20px'
};

const styleInner = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const styleNumber = {
    fontWeight: '800',
    fontSize: '20px',
    color: '#FFFFFF',
};

const styleSvg = {
    position: 'absolute',
    left: '0',
    top: '0'
};



const Bar = (props) => {
    const porcentagem = props.percent || 0
    
    const pct = (472 - (472 * (porcentagem / 100))) || 0

    const styleCircle = {
        fill: 'none',
        stroke: 'url(#GradientColor)',
        strokeWidth: '20px',
        strokeDasharray: '472',
        strokeDashoffset: pct,
    };


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
                <div style={styleSkill}>
                    <div style={styleOuter}>
                        <div style={styleInner}>
                            <span style={styleNumber}> {`${porcentagem}%`} </span>
                        </div>
                    </div>
                </div>

                <svg style={styleSvg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="var(--gradient-1)" />
                            <stop offset="100%" stopColor="var(--gradient-3)" />
                        </linearGradient>
                    </defs>
                    <circle className="animation__skillbar" style={styleCircle} cx="80" cy="80" r="70" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default Bar