import React, { useState, useEffect } from "react";

const Characters = ({ characters }) => {
	const [filteredCharacteres, setFilteredCharacteres] = useState(
		characters || []
	);

	useEffect(() => {
		setFilteredCharacteres(characters);
	}, [characters]);

	const handleChange = (e) => {
		const searchResults = characters.filter((character) =>
			character.name.toLowerCase().includes(e.target.value)
		);

		setFilteredCharacteres(searchResults);
	};

	return (
		<div className="row mt-5">
			<form className="form-inline mb-4">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					onChange={handleChange}
				/>
			</form>
			{filteredCharacteres.map((character, index) => (
				<div key={index} className="col mb-4">
					<div
						className="card card-style"
						style={{ minWidth: "200px", maxWidth: "500px" }}
					>
						<img src={character.image} alt={character.name} />
						<div className="card-body">
							<h5 className="card-title">Name: {character.name}</h5>
							<h5 className="card-title">Species: {character.species}</h5>
							<h5 className="card-title">
								Location: {character.location.name}
							</h5>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Characters;
