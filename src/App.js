import { useState } from 'react';
import styles from './App.module.css';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '+', 'C', '='];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const result = (
		<div className={isResult ? styles.result : styles.white}>
			{operand1} {operator} {operand2}
		</div>
	);

	const onClick = (e) => {
		if (
			operator &&
			!(
				e.target.value === '+' ||
				e.target.value === '-' ||
				e.target.value === '=' ||
				e.target.value === 'C'
			)
		) {
			return setOperand2(operand2 + e.target.value), setIsResult(false);
		} else if (
			(e.target.value === '+' || e.target.value === '-') &&
			operand1 &&
			!operator
		) {
			return setOperator(operator.slice(1) + e.target.value), setIsResult(false);
		} else if (
			!(
				e.target.value === '-' ||
				e.target.value === '+' ||
				e.target.value === 'C' ||
				e.target.value === '='
			) &&
			!operand2
		) {
			return setOperand1(operand1 + e.target.value), setIsResult(false);
		} else if (e.target.value === 'C') {
			return setOperand1(''), setOperator(''), setOperand2(''), setIsResult(false);
		} else if (operand2 && e.target.value === '=') {
			if (operator === '+') {
				return (
					setOperand1(String(Number(operand1) + Number(operand2))),
					setOperator(''),
					setOperand2(''),
					setIsResult(true)
				);
			} else if (operator === '-') {
				return (
					setOperand1(String(Number(operand1) - Number(operand2))),
					setOperator(''),
					setOperand2(''),
					setIsResult(true)
				);
			}
		}
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>Калькулятор</header>
			<div className={styles.calc}>
				<div className={styles.nums}>
					{NUMS.map((value) => (
						<div key={value}>
							<button value={value} className={styles.buttons} onClick={onClick}>
								{value}
							</button>
						</div>
					))}
					<div>{result}</div>
				</div>
			</div>
		</div>
	);
};
