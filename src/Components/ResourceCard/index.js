import IconCircle from '../IconCircle';
import HeadText from '../HeadingText';
import SubHeadText from '../SubHeadingText';
import './index.less';

function ResourceCard({icon,color, head, subhead, link}){
	// useEffect(()=>{console.log(icon)});
	return (
		<div className='resourcecard'>
			<IconCircle icon={icon} color={color}/>
			<SubHeadText text={head}/>
			<HeadText main_text="" sub_text={subhead}/>
			<div className='knowmore'>
				<a href={link}>Know More ↗</a>
			</div>
		</div>
	);
}

export default ResourceCard;



/*<IconCircle icon={icon} color={color}/>*/