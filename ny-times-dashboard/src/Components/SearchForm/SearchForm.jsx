import React, { useState } from "react";

const SearchForm = ({ setArticles }) => {
	const [query, setQuery] = useState("");

	const handleSearch = async (e) => {
		const response = await fetch(``);
		const data = await response.json();
		setArticles(data.response.docs);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default SearchForm;
