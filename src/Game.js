import styles from './Game.module.css';
import { Field } from './Field';
import { Information } from './Information';
import { useState } from 'react';

const GameLayout = () => {
	return <div className={styles.game}>Game</div>;
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<>
			<label>
				<GameLayout />
				<label>
					<Information
						isDraw={isDraw}
						isGameEnded={isGameEnded}
						currentPlayer={currentPlayer}
					/>
					<Field
						field={field}
						currentPlayer={currentPlayer}
						setCurrentPlayer={setCurrentPlayer}
					/>
				</label>
			</label>
		</>
	);
};
