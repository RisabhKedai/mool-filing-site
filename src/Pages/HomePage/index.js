import {useEffect} from 'react';
import HeadText from '../../Components/HeadingText';
import SubHeadText from '../../Components/SubHeadingText';
import Resources from './Resources';
import IconCircle from '../../Components/IconCircle';
import LearnCard from '../../Components/LearnCard';
import Header from '../../Components/PageHeader';
import './index.css';

function HomePage(){
	return (
		<div>
			<Header/>
			<HeadText 
				main_text="Welcome to mool (IT Return)"
				sub_text="Start filing IT return within some clicks"
			/>

			<img src="./Assets/banner.webp"
				srcSet="./Assets/banner2x.webp 2x, ./Assets/banner3x.webp 3x"
				className="bannerimg"/>

			<Resources/>

			<SubHeadText 
				text="Learn how to use Mool (IT return)"
			/>
			<iframe 
				width="238.4"
				height="154"
				src="https://www.youtube.com/embed/1felZa3fAMg"
				style={{borderRadius:10}}
			>	
			</iframe>

			<LearnCard text="Guides"/>
			<LearnCard text="FAQ"/>
			<LearnCard text="Support"/>
		</div>
	);	
}

export default HomePage;

// <IconCircle icon={[resource_icon1]} color="red"/>

