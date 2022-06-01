import {useEffect} from 'react';
import './index.css'

function HeadText({main_text,sub_text}){
	return (
		<div className="headtext">
			<span className="main-text">{main_text}</span>
			<br/>
			<span className="sub-text">{sub_text}</span>
		</div>
	);	
}

export default HeadText;