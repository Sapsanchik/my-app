import React from 'react';
import styles from './Field.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const FieldLayout = (props) => {
	const { field, currentPlayer, setCurrentPlayer, setField, isGameEnded } = props;

	const clickLabel = (index) => {
		const newField = [...field];

		if (currentPlayer === 'X') {
			setCurrentPlayer('O');
		} else if (currentPlayer === 'O') {
			setCurrentPlayer('X');
		}

		if (newField[index] === '' && !isGameEnded) {
			newField[index] = currentPlayer;
			setField(newField);
			console.log(newField);
		}

		checkWinner(newField);
	};

	const checkWinner = (field) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [x, y, z] = WIN_PATTERNS[i];
			if (field[x] && field[x] === field[y] && field[y] === field[z]) {
				return field[x];
			}
		}
	};

	return (
		<div className={styles.field}>
			{field.map((value, index) => (
				<div
					className={styles.fieldLabel}
					value={value}
					key={index}
					onClick={() => clickLabel(index)}
				>
					{value}
				</div>
			))}
		</div>
	);
};

export const Field = (props) => {
	const { field, currentPlayer, setCurrentPlayer, setField, isGameEnded } = props;

	return (
		<>
			<FieldLayout
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
				isGameEnded={isGameEnded}
			/>
			;
		</>
	);
};
