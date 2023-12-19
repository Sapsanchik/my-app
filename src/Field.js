import React from 'react';
import styles from './Field.module.css';

const FieldLayout = (field) => {
	return (
		<div className={styles.field}>
			{field<li className={styles.fieldBlock}></li>}
		</div>
	);
};

export const Field = () => {
	return <FieldLayout />;
};
