import { useState } from 'react';
import styles from './MyComponent.module.css';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'rty', name: 'Утюг' },
];

export const MyComponent = () => {
	// const [value, setValue] = useState(0);
	const [showText, setShowText] = useState(true);
	const [showRedText, setshowRedText] = useState(false);

	// const onClick = (event) => {
	// 	setValue(value + 1);
	// 	setValue((updatedValue) => updatedValue + 1);
	// 	console.log(event);
	// };
	// const onClick = () => {
	// 	setShowText(!showText);
	// };
	const onClick = () => {
		setshowRedText(!showRedText);
	};

	const [currentDate, setCurrentDate] = useState(new Date());

	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

	// setObj({ a: 20, b: 20, c: 30 });
	if (obj.a === 10) {
		setObj({ ...obj, a: 20 });
	}

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

	return (
		<>
			<div>{getTimeFromDate(currentDate)}</div>
			<div>{obj.a}</div>
			<ul>
				{products.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
			{/* {showText && text} */} {text}
			{/* <button onClick={onClick}>{showText ? 'Скрыть' : 'Показать'} текст</button> */}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
