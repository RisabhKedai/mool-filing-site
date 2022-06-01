import React from 'react';
import {UserOutlined} from '@ant-design/icons';
import './index.css';

function LearnIcon(){
	return (
		<span className="learnicon">
			<div className="outrect">
				<div className="inrect">
					<UserOutlined/>
				</div>
			</div>
		</span>
	);
}

export default LearnIcon;