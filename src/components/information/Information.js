import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';

export const Information = ({ status, currentPlayer }) => {
	const PlayerAction = PLAYER_ACTION[status];
	const PlayerName = PLAYER_NAME[currentPlayer];

	const information = status === STATUS.DRAW ? 'Ничья' : `${PlayerAction}: ${PlayerName}`;

	return <InformationLayout information={information} />;
};

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
};
