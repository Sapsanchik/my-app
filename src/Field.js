import React from 'react';
import styles from './Field.module.css';

const FieldLayout = (props) => {
	const { field, currentPlayer, setCurrentPlayer } = props;

	const clickLabel = () => {
		return setCurrentPlayer('0');
	};

	return (
		<div className={styles.field}>
			{field.map((id) => (
				<div className={styles.fieldLabel} key={id} onClick={clickLabel}>
					{currentPlayer}
				</div>
			))}
		</div>
	);
};

export const Field = (props) => {
	const { field, currentPlayer, setCurrentPlayer } = props;

	return (
		<>
			<FieldLayout
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
			;
		</>
	);
};
