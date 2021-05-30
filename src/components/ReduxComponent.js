import React, { useEffect, useReducer, useDebugValue } from "react";

const initialState = {
	username: "",
	loading: false,
	users: [],
	error: "",
};
function userReducer(state, action) {
	switch (action.type) {
		case "FETCH_REQUEST":
			return { ...state, loading: true };
		case "FETCH_SUCCESS":
			return { ...state, loading: false, users: action.payload };
		case "FETCH_FAIL":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}
export default function ReduxComponent() {
	const [ state, dispatch ] = useReducer(userReducer, initialState);
	useEffect(() => {
		dispatch({ type: "FETCH_REQUEST" });
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "FETCH_SUCCESS", payload: data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_FAIL", error: "Something went wrong " + error.toString() });
			});
	}, []);
	return <div>{state.users.map((user) => <p>{user.name}</p>)}</div>;
}
