"use client"
import { useDataContext } from '@/app/logic/dataInterface';
import { CSSProperties, useMemo } from 'react'

const inputStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start',
	width: '100%',
	height: '100%',
	gap: '10px',
	borderRadius: '8px',
	padding: '5px',
};

const addressInput: CSSProperties = {
	padding: "2px 10px",
};

// семашко, 111; питерская, 8 * заозерная, 8; семашко, 111; питерская, 8 * заозерная, 8; семашко, 111; питерская, 8 * заозерная, 8; семашко, 111; питерская, 8 * заозерная, 8
export const Analizator = () => {

	const { data } = useDataContext();

	const parsedAddress = useMemo(() => {
		// This runs only once when component mounts
		if (data.addressInfo && typeof data.addressInfo === "string") {
			return data?.addressInfo?.split(/[;*\r?\n]/).filter(line => line.trim().length > 0);
		}

		return [];
	}, [data.addressInfo]);

	const getLineColor = (index: number, total: number) => {
		// Generate different HSL colors
		const hue = index * (360 / total);
		return `hsl(${hue}, 65%, 50%)`;
	};

	const getBackgroundColor = (index: number, total: number) => {
		const hue = index * (360 / total);
		console.log("hue2", hue);
		return `hsl(${hue}, 50%, 95%)`;
	};

	return (
		<div style={inputStyle} className='custom-outnput w-full h-full'>
			<h1>Распознанные адреса:</h1>

			{parsedAddress.length > 0 && (
				// <div className="flex flex-wrap text-sm space-y-3">
				<div className="inline-flex flex-wrap flex-col justify-start items-start w-full h-full text-sm">
					{parsedAddress.map((address, index) => (
						<span
							key={index}
							// className="flex items-center text-lg justify-self-start"
							// className="inline-flex"
							style={{
								...addressInput,
								backgroundColor: getBackgroundColor(index, parsedAddress.length),
								color: getLineColor(index, parsedAddress.length),
							}}
						>
							{address}
						</span>
					))}
				</div>
			)
			}

			<style>{`
				.custom-outnput {
					transition: all 0.3s ease;
					border: 4px double #A2A2A2;
				}
				
				.custom-outnput:hover {
					border-color: #3b82f6;
					box-shadow: 0 0 0 1px #3b82f6;
					// transform: translateY(-2px);
				}
			`}</style>
		</div >
	)
}
