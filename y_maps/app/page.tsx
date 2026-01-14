"use client"
import { CSSProperties, useState } from "react";
import Spinner from "./ui/Spinner/spinner";
import { Unit } from "./ui/Unit/unit";
import { InputBlock } from "./ui/Сontent/inputBlock";
import { useDataContext } from "./logic/dataInterface";
import { Analizator } from "./ui/Сontent/analizator";

const containerStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100dvh',
	width: "100%",
	backgroundColor: '#F7F8FC',
	padding: "0 20px"
};

// interface addressValue {
// 	newValue?: string | string[] | undefined;
// }

export default function Home() {

	// const { data } = useDataContext();

	return (
		< div style={containerStyle}>
			{/* {true && <Spinner />} */}
			{false && <Spinner />}
			<Unit size="25">
				<InputBlock />
			</Unit>
			<Unit size="50">
				<Analizator />
			</Unit>
			<Unit size="25">
				3333
			</Unit>
		</div >
	);
}
