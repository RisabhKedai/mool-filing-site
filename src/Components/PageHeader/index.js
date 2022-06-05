import FinanceYearPicker from '../../Components/FinanceYearPicker'; 
import {UserOutlined, QuestionCircleOutlined,CalendarOutlined } from '@ant-design/icons';
import './index.less';

function Header(){
	return(
		<header>
			<div className="header-container">
				<div className="image-container">
					<img src="./Assets/Mool.png">
					</img>
				</div>
				<div className="button-container">
					<div className="year-container">
						<div className="year-container-icon">
							<CalendarOutlined />
						</div>
						<div className="year-container-text">
							Financial Year
						</div>
						<div className="year-container-selector">
							 <FinanceYearPicker/>
						</div>
					</div>
					<div className="help-container">
						<QuestionCircleOutlined />
					</div>
					<div className="login-container">
						<UserOutlined />
					</div>
					
				</div>
			</div>
		</header>
	);
}


export default Header;