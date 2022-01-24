import style from './Message.module.css';



const Message = ({author, text}) => {

	return (
		<div className={style.messageWrapper}>
			<h3>
				{author}
			</h3>
			<p>{text}</p>
		</div>
	)
}

export default Message;