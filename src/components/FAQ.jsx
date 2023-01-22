import React from 'react';
// import { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';

function FAQ() {
	// const [arrowCSS, setArrowCSS] = useState(false);
	// const handleClick = () => {
	// 	setArrowCSS((arrowCSS) => !arrowCSS);
	// };
	return (
		<section>
			<div className="flex flex-col justify-evenly min-h-[50vh] items-center w-[35%] mx-auto text-center">
				<h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
				<p className="text-lg">
					Here are some of our FAQs. if you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<ul className="w-full">
					<li className="border-y-2 my-0 h-14 justify-between flex items-center text-left">
						What is Bookmark?
						<button className="mr-2">
							<img src={arrow} alt="Arrow to expand answers" />
						</button>
					</li>
					<li className="border-b-2 my-0 h-14 justify-between flex items-center text-left">
						How can I request a new browser?
						<button className="mr-2">
							<img src={arrow} alt="Arrow to expand answers" />
						</button>
					</li>
					<li className="border-b-2 my-0 h-14 justify-between flex items-center text-left">
						Is there a mobile app?
						<button className="mr-2">
							<img src={arrow} alt="Arrow to expand answers" />
						</button>
					</li>
					<li className="border-b-2 my-0 h-14 justify-between flex items-center text-left">
						What about other Chromium browsers?
						<button className="mr-2">
							<img src={arrow} alt="Arrow to expand answers" />
						</button>
					</li>
				</ul>
				<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white my-4">
					More Info
				</button>
			</div>
			<div className="min-h-[50vh] bg-softBlue text-white flex justify-evenly flex-col items-center">
				<span className="text-lg">35,000+ ALREADY JOINED</span>
				<h3 className="text-3xl font-bold">
					Stay up-to-date with what we're doing
				</h3>
				<form className="">
					<label htmlFor="email" hidden>
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email address"
						className="h-12 bg-white mx-4 px-4 w-72"
					/>
					<button
						className="bg-softRed w-fit px-4 h-12 shadow-xl rounded text-white"
						type="submit"
					>
						Contact Us
					</button>
				</form>
			</div>
		</section>
	);
}

export default FAQ;
