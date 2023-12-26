import PropTypes from 'prop-types';
import React from 'react';
import { FieldLayout } from './FieldLayout';
import { PLAYER } from '../../constants';

export const Field = ({ field, handleCellClick }) => {
	return (
		<>
			<FieldLayout field={field} handleCellClick={handleCellClick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])),
	handleCellClick: PropTypes.func,
};
