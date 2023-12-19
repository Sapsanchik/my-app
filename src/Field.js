import React from 'react';
import styles from './Field.module.css';

const FieldLayout = ({ field }) => {
	return <div className={styles.field}>Field{field}</div>;
};

export const Field = () => {
	return <FieldLayout />;
};
