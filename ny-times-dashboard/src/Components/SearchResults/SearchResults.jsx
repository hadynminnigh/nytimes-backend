import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ articles }) => {
	return (
		<div>
			{articles.map((article) => (
				<div key={article.id}>
					<Link to={`/article/${article._id}`}>{article.headline.main}</Link>
				</div>
			))}
		</div>
	);
};

export default SearchResults;
