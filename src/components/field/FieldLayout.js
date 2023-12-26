import PropTypes from 'prop-types';
import styles from './Field.module.css';
import { PLAYER, PLAYER_SIGN } from '../../constants';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button key={index} className={styles.cell} onClick={() => handleCellClick(index)}>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])),
	handleCellClick: PropTypes.func,
};
