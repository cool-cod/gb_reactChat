import { useState } from 'react';
import style from './lesson1.module.css';



const Message = ({text}) => {
	const [innerText, setInnerText] = useState (text);

	return (
		<div className={style.messageWrapper}>
			<p>
				{innerText}
			</p>
			<button className={style.editBtn} onClick={() => setInnerText(prompt())}>Edit</button>
		</div>
	)
}

export default Message;