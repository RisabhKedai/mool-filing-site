import {useEffect} from 'react';
import IconCircle from '../IconCircle';
import HeadText from '../HeadingText';
import SubHeadText from '../SubHeadingText';
import * as AntIcon from "@ant-design/icons";
import './index.css';

function ResourceCard({icon,color, head, subhead, link}){
	// useEffect(()=>{console.log(icon)});
	return (
		<div className='resourcecard'>
			<IconCircle icon={icon} color={color}/>
			<SubHeadText text={head}/>
			<HeadText main_text="" sub_text={subhead}/>
			<span className='knowmore'>
				<a href={link}>Know More ↗</a>
			</span>
		</div>
	);
}

export default ResourceCard;



/*<IconCircle icon={icon} color={color}/>*/