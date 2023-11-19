import React from "react";
import rightcorner from '../../asset/rightcornerlgo.png'
import moptro from '../../asset/moptro logo@2x.png'
import './Screen.css';

const Screen = () => {
    return(
        <div>
            <img src={rightcorner} alt="" className="corner"/>
            <div style={{display:"flex", justifyContent:'center'}}>
                <img src={moptro} alt="" className="mop"/>
                {/* <span style={{fontSize:'18px', borderRadius:'50px', backgroundColor:'grey'}}>4</span> */}
            </div>
            <div style={{width: '328px', height: '465px', backgroundColor:'#5E5E5EB5',opacity: '0.4'}}></div>
            <div style={{width:'360px', height:'63px', background: 'transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box', position:'fixed',bottom: '0' }}></div>
        </div>
    );
};

export default Screen;