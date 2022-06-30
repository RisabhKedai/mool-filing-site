/*
* @Author: lenovo
* @Date:   2022-06-09 15:17:04
* @Last Modified by:   lenovo
* @Last Modified time: 2022-06-11 01:29:55
*/
import ResourceCard from '../../../Components/ResourceCard';
import SubHeadText from '../../../Components/SubHeadingText';
import './index.less';
import {Col,Row} from 'antd';

function Resources(){
	return(
		<div>
			<Col>
				<SubHeadText 
					text="Resources"
				/>
				<Row>
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
				</Row>
			</Col>
		</div>
	);
}

export default Resources;
