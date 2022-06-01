import {useEffect} from 'react';
import HeadText from '../../Components/HeadingText';
import SubHeadText from '../../Components/SubHeadingText';
import ResourceCard from '../../Components/ResourceCard';
import IconCircle from '../../Components/IconCircle';
import LearnCard from '../../Components/LearnCard';
import './index.css';

function HomePage(){
	return (
		<div>
			<HeadText 
				main_text="Welcome to mool (IT Return)"
				sub_text="Start filing IT return within some clicks"
			/>

			<img src="./Assets/banner.webp"
				srcset="./Assets/banner2x.webp 2x,
				./Assets/banner3x.webp 3x"
				className="bannerimg"/>


			<SubHeadText 
				text="Resources"
			/>

			<ResourceCard 
				icon="Calculator.svg"
				color='#ffecce'
				head='New vs Old Regime'
				subhead="Two type of regime which to choose is getting your head scratching"
				link='www.google.com'
			/>

			<ResourceCard 
				icon="Coupon Discount.svg"
				color='#ecceff'
				head='Tax Savings'
				subhead="Two type of regime which to choose is getting your head scratching"
				link='www.google.com'
			/>

			<ResourceCard 
				icon="Bank Card Insert.svg"
				color='#c6f5d5'
				head='Advanced Tax'
				subhead="Two type of regime which to choose is getting your head scratching"
				link='www.google.com'
			/>

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

