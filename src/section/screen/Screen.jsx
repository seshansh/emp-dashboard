import React from "react";
import rightcorner from '../../asset/rightcornerlgo.png'
import moptro from '../../asset/moptro logo@2x.png'
import { HiHome } from "react-icons/hi2"
import { FaUser } from "react-icons/fa6";
import './Screen.css';

const Screen = () => {
    return(
        <div>
            <img src={rightcorner} alt="" className="corner"/>
            <div style={{display:"flex", justifyContent:'center'}}>
                <img src={moptro} alt="" className="mop"/>
                <div style={{fontSize:'18px',width:'30px',height:"30px", borderRadius:'50px', background:'#212020', opacity:'0.4', boxShadow:'inset 0px 4px 0px #00000040',border:'1px solid #FFFEFE00'}}>
                    <span style={{color:"rgb(8 255 44)", background:'transparent', fontWeight:'bold'}}>4</span>
                </div>
            </div>
            <div style={{width: '328px', height: '465px', backgroundColor:'#5E5E5EB5',opacity: '0.4'}}></div>
            <div style={{display: 'flex',justifyContent:'space-around',alignItems:'center',width:'100%', height:'63px', background: 'transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box', position:'fixed',bottom: '0' }}>
                <HiHome size={30} color="#36A546CC" style={{background:'transparent'}}/>
                <FaUser size={25} color="#36A546CC" style={{background:'transparent'}}/>
            </div>
        </div>
    );
};

export default Screen;