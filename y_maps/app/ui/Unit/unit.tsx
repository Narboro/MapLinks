import clsx from 'clsx';
import React, { CSSProperties } from 'react'

interface UnitProps {
	children: React.ReactNode;
	size?: string;
	test?: string
}

export const Unit = ({ children, size, test }: UnitProps) => {

	const itemStyle: CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		border: "1px solid #EBEDF2",
		borderRadius: '8px',
		boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
		padding: '10px',
		margin: "10px",
		width: '100%',
		maxWidth: '64rem',
		transition: 'all 0.3s ease',
		minHeight: 0,
		height: `${size}%`,
		...(1 && { backgroundColor: '#FCFDFF' }),
	};

	return (
		<div style={itemStyle}>
			{children}
		</div>
	)
}
