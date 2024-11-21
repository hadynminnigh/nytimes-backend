import React from "react";
import { userParams } from "react-router-dom";

const ArticleDetails = ({ articles }) => {
	const { id } = userParams();
	const article = articles.find((a) => a._id === id);

	if (!article) {
		return (
			<div>
				<p>Article not found.</p>
			</div>
		);
	} else {
		return (
			<div>
				<h1>{article.headline.main}</h1>
				<p>Source: {article.source}</p>
				<p>Published Date: {article.pub_date}</p>
				<p>Abstract: {article.snippet}</p>
				<p>Lead Paragraph: {article.print_section}</p>
				<a href={article.web_url} target="_blank">
					Read the full article
				</a>
			</div>
		);
	}
};

export default ArticleDetails;
