"use client"
import { useDataContext } from '@/app/logic/dataInterface';
import React, { CSSProperties, useRef, useState } from 'react'

const inputStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	// alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	gap: '10px',
	borderRadius: '8px',
	padding: '5px',
};

const addressInput: CSSProperties = {
	padding: "4px 6px",
};

const addPadding: CSSProperties = {
	padding: "10px",
};

export const InputBlock = () => {

	const [textValue, setTextValue] = useState('');
	const timeoutRef = useRef<NodeJS.Timeout>(null);
	const { updateData } = useDataContext();

	const handleUpdate = (address: string | string[] | undefined) => {
		updateData({
			addressInfo: address,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

		const newValue = e.target.value;
		setTextValue(newValue);

		// Clear previous timeout
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Set new timeout
		timeoutRef.current = setTimeout(() => {
			handleUpdate(newValue);
		}, 500);
	}

	const handleClick = () => {
		console.log("clicker");
	}

	return (
		<div style={inputStyle} className='custom-input'>
			<div className='flex justify-between'>
				<div className='inline-block'>
					<h1>Получение ссылок на карту по введённым адресам</h1>
					<p>Введите адреса для поиска через точку с запятой (;) или звездочку (*)</p>
				</div>
				<button
					className='bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-90 active:shadow-sm transform transition-all duration-150 ease-out focus:outline-none'
					style={addPadding}
					onClick={handleClick}
				>
					Получить ссылки
				</button>
			</div>
			<textarea
				value={textValue}
				onChange={handleChange}
				// className="overflow-y-auto w-full bg-sky-50 border border-gray-200 rounded-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
				className="overflow-y-auto w-full bg-sky-50 border border-gray-200 rounded-sm focus:bg-white focus:border-blue-500 outline-none transition-all duration-200 resize-none"
				placeholder="Введите адреса для поиска"
				autoFocus
				style={{
					...addressInput,
					minHeight: '20px',
					maxHeight: '400px',
					transition: 'all 0.2s ease',
				}}
			/>

			<style>{`
				.custom-input {
					transition: all 0.3s ease;
					border: 4px double #A2A2A2;
				}
				
				.custom-input:hover {
					border-color: #3b82f6;
					box-shadow: 0 0 0 1px #3b82f6;
					// transform: translateY(-2px);
				}
			`}</style>
		</div>
	)
}
