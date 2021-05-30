import "./App.css";
import Chat from "./components/Chat";
import Messages from "./components/Messages";
import Parent from "./components/Parent";
import ReduxComponent from "./components/ReduxComponent";

function App() {
	return (
		<div className="App">
			{/* #1.useState */}
			{/* <Messages /> */}
			<Chat />

			{/* #2.useEffect */}

			{/* #Custom Hook, #3.useReducer */}
			{/* <ReduxComponent /> */}

			{/* #4.useContext */}

			{/* #5.useMemo */}

			{/* #6.useCallback */}

			{/* #7.useRef */}

			{/* #8.useImperativeHandle */}
			{/* <Parent /> */}

			{/* #9.useLayoutEffect */}

			{/* #10.useDebugValue */}
		</div>
	);
}

export default App;
