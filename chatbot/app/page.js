"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Prompt({
	searchText,
	onSearchTextChange,
	chatHistory,
	setChatHistory,
}) {
	return (
		<div className="fixed inset-x-14 bottom-4 h-16 ...">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert("clicked");
					setChatHistory([
						...chatHistory,
						{ question: searchText, answer: "lkjdsflfdskj" },
					]);
					onSearchTextChange("");
				}}
			>
				<label
					htmlFor="search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<input
						type="search"
						id="search"
						value={searchText}
						onChange={(e) => {
							onSearchTextChange(e.target.value);
						}}
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search"
						required
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

function Chat({ question, answer }) {
	return (
		<div className="m-5">
			<div> Human: {question}</div>
			<div> AI: {answer}</div>
		</div>
	);
}

function DisplayChatHistory({ chatHistory }) {
	return (
		<div className="h-60 w-full">
			{chatHistory.map((element) => {
				<Chat question={element.question} answer={element.answer}></Chat>;
			})}
		</div>
	);
}
export default function Home() {
	const [searchText, setSearchText] = useState("");
	const [chatHistory, setChatHistory] = useState([]);
	return (
		<main className="m-8">
			<Chat question={"What is ABC ?"} answer={"ABC is a tool"}></Chat>
			{/* <Chat question={"What is dkfs"} answer={"asfdlk;"}></Chat> */}
			<DisplayChatHistory chatHistory={chatHistory}></DisplayChatHistory>
			<Prompt
				searchText={searchText}
				onSearchTextChange={setSearchText}
				chatHistory={chatHistory}
				setChatHistory={setChatHistory}
			></Prompt>
		</main>
	);
}
