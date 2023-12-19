import React from 'react';

const InformationLayout = (props) => {
	const { isDraw, isGameEnded, currentPlayer } = props;

	const informationStatus = () => {
		if (isDraw) {
			return 'Ничья';
		} else if (!isDraw && isGameEnded) {
			return `Победа: ${currentPlayer}`;
		}
		return `Ходит: ${currentPlayer}`;
	};

	return <div>{informationStatus()}</div>;
};

export const Information = (props) => {
	const { isDraw, isGameEnded, currentPlayer } = props;

	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
};
