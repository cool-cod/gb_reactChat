import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import './index.css';


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


const text = prompt();

ReactDOM.render(
  <React.StrictMode>
    <Message text={text}/>
  </React.StrictMode>,
  document.getElementById('root')
);


