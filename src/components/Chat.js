import React, { createContext, useContext, useState } from "react";
import Messages from "./Messages";

export const MessagesContext = createContext();
export function useDetails() {
	return useContext(MessagesContext);
}
export default function Chat() {
	const [ username, setUsername ] = useState("Venkatesh");
	return (
		<div>
			<MessagesContext.Provider value={{ username, setUsername }}>
				<Messages />
			</MessagesContext.Provider>
		</div>
	);
}
