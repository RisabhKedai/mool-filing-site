import './index.css'

function HeadText({main_text,sub_text}){
	return (
		<div className="headtext">
			<div className="main-text">{main_text}</div>
			<div className="sub-text">{sub_text}</div>
		</div>
	);	
}

export default HeadText;