import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
	const [characters, setCharacters] = useState([]);
	const [info, setInfo] = useState([]);
	const [pages, setPages] = useState(1);

	const url = "https://rickandmortyapi.com/api/character";

	const callRickandMortyAPI = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		setInfo(data.info);
		setCharacters(data.results);
	};

	const onPrev = () => {
		callRickandMortyAPI(info.prev);
		setPages((prevPage) => prevPage - 1);
	};

	const onNext = () => {
		callRickandMortyAPI(info.next);
		setPages((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		callRickandMortyAPI(url);
	}, []);

	return (
		<div className="">
			<Navbar
				message="#100DaysOfCode: Rick & Morty App"
				pages={pages}
				characters={characters}
			/>
			<div className="container">
				<Pagination
					prev={info.prev}
					next={info.next}
					onPrev={onPrev}
					onNext={onNext}
				/>
				<Characters characters={characters} />
				<Pagination
					prev={info.prev}
					next={info.next}
					onPrev={onPrev}
					onNext={onNext}
				/>
			</div>
		</div>
	);
}

export default App;
