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
	const field = ['1', '2', '3', '', '', '', '', '', ''];

	return (
		<>
			<label>
				<GameLayout />
				<label>
					<Information />
					<Field field={field} />
				</label>
			</label>
		</>
	);
};
