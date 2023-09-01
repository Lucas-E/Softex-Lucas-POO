"use client";
import { useState, useEffect } from "react";
import getSocket from "@/utils/services/socket";
import { io } from "socket.io-client";

export interface message {
	isMine: boolean;
	content: string;
}

export default function Home() {
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [messages, setMessages] = useState<Array<message>>([]);
	const [typedMessage, setTypedMessage] = useState<string>();
	const [socket, setSocket] = useState<ReturnType<typeof io>>();

	useEffect(() => {
		const socketRef = getSocket(setIsConnected, setMessages);
		setSocket(socketRef);
		if (socketRef.connected) {
			setIsConnected(true);
		}
	}, []);

	const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		if (socket) {
			socket.emit("sendMessage", typedMessage);
		}
		setTypedMessage("");
	};

	const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTypedMessage(e.target.value);
	};

	return (
		<>
			<div className="text-3xl font-bold underline">
				{messages.map((message) => (
					<p>{message.content}</p>
				))}
			</div>
			<div className="fixed bottom-0 rounded w-screen flex justify-around">
				<input
					type="text"
					className="border p-5 w-full"
					placeholder="digite sua mensagem"
					onChange={handleMessage}
					value={typedMessage}
				/>
				<button
					onClick={handleSendMessage}
					className="border rounded p-5 bg-blue-600 active:bg-blue-800 text-white "
					type="button"
				>
					teste
				</button>
			</div>
		</>
	);
}
