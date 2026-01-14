import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DataInterface } from "./logic/dataInterface";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin", 'cyrillic'],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin", 'cyrillic'],
});

export const metadata: Metadata = {
	title: "Address Links Creator",
	description: "Generate Online Maps Links",
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/logo.png', // Next.js сгенерирует все размеры автоматически
		apple: '/logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<DataInterface>
					{children}
				</DataInterface>
			</body>
		</html>
	);
}
