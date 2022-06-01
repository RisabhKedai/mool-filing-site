import React from 'react';
import HeadText from '../../Components/HeadingText';
import LearnIcon from '../../Components/LearnIcon';
import './index.css';

function LearnCard({text}){
	return (
		<div className="learncard">
			<LearnIcon/> 
			<div className = "textdiv">
				<HeadText main_text={text} sub_text=""/>
			</div>
		</div>
	);
}

export default LearnCard; 