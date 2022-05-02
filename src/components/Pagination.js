import React from "react";

const Pagination = ({ prev, next, onPrev, onNext }) => {
	const handleNext = () => {
		onNext();
	};

	const handlePrevious = () => {
		onPrev();
	};

	return (
		<nav className="mt-4">
			<ul className="pagination justify-content-center">
				{prev && (
					<li className="page-item">
						<button className="page-link" onClick={handlePrevious}>
							Previous
						</button>
					</li>
				)}
				{next && (
					<li className="page-item">
						<button className="page-link" onClick={handleNext}>
							Next
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
