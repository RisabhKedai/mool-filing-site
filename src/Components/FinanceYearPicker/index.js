import React from 'react';
import {DatePicker} from 'antd';
import 'antd/dist/antd.min.css';
import {DownOutlined} from "@ant-design/icons";
import moment from 'moment';

const onChange = (date, dateString) => {
	console.log(date, dateString);
	console.log(moment('YYYY'));
};

const yearFormat = "YYYY";
// const customYearStartEndFormat = (value) => `${moment(value).startOf('year').format(yearFormat)} ~ ${moment(value).endOf('year').format(yearFormat)}`;
const customYearStartEndFormat = (value) => `${moment(value).format(yearFormat)} ~ ${moment(value).add(1,'Y').format(yearFormat)}`;

function FinanceYearPicker(){
	return (
		<DatePicker
			onChange={onChange}
			allowClear={false}
			picker="year"
			bordered={true}
			defaultValue={moment()}
			format={customYearStartEndFormat}
			suffixIcon={<DownOutlined style={{color:"#2f4bc5"}}/>}
			style={
				{
					backgroundColor:'#e5ecff',
					borderStyle: "None",
					bordeRadius:2.5,
					width:120,
				}
			}
		/>
	);
}


export default FinanceYearPicker;
 

// import React from 'react';
// import { DatePicker, Space } from 'antd';
// import moment from 'moment';
// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
// const weekFormat = 'MM/DD';
// const monthFormat = 'YYYY/MM';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;



// const App = () => (
//   <Space direction="vertical" size={12}>
//     <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
//     <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
//     <DatePicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} picker="month" />
//     <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" />
//     <RangePicker
//       defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
//       format={dateFormat}
//     />
//     <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat} />
//   </Space>
// );

// export default App;
