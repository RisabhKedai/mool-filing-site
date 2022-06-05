import React from 'react';
import {useEffect} from 'react';
import './index.css';



function IconCircle({icon,color}){
	useEffect(()=>{console.log(color)});
	var svg_path = "./Assets/"+icon;
	return (		
		<div className='iconcircle' style={{
			backgroundColor:color,
		}}>
			<img src={svg_path} opacity={1}/>
		</div>
	);
}

export default IconCircle;



