import React, { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';

function FAQ() {
	// const [b]
	const [hide, setHide] = useState(true);
	const handleClick = (e) => {
		e.preventDefault();
		setHide((hide) => !hide);
	};
	return (
		<section>
			<div className="flex flex-col justify-evenly min-h-[50vh] sm:w-[55vw] items-center px-[10%] py-[5%] mx-auto text-center">
				<h2 className="text-2xl px-10 font-bold my-5">
					Frequently Asked Questions
				</h2>
				<p className="text-lg my-5">
					Here are some of our FAQs. if you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<ul className="w-full my-5">
					<li className="border-y-2 my-0 h-14 justify-between flex items-center text-left">
						What is Bookmark?
						<button className="mr-2">
							<img src={arrow} alt="Arrow to expand answers" />
						</button>
					</li>
					<li className="border-b-2 py-4 my-0 min-h-14 h-fit justify-between flex flex-col items-center text-left">
						<div className="w-full justify-between flex">
							How can I request a new browser?
							<button className="mr-2" onClick={handleClick}>
								<img src={arrow} alt="Arrow to expand answers" />
							</button>
						</div>
						<p className={hide ? 'hidden' : 'py-4 text-gray-400'}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
							magni ratione cupiditate facere, pariatur accusantium sit ullam id
							nam tempora unde aspernatur sed eos fugit quod nostrum rem odit
							tempore.
						</p>
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
				<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white my-10">
					More Info
				</button>
			</div>
			<div className="min-h-[50vh] bg-softBlue text-white flex justify-evenly flex-col items-center">
				<span className="text-lg">35,000+ ALREADY JOINED</span>
				<h3 className="text-2xl font-bold text-center px-10 sm:text-3xl sm:w-1/3">
					Stay up-to-date with what we're doing
				</h3>
				<form className="flex flex-col sm:flex-row justify-center items-center w-full px-10">
					<label htmlFor="email" hidden>
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email address"
						className="h-12 bg-white text-black mx-4 px-4 w-full sm:w-72 mb-5 sm:mb-0"
					/>
					<button
						className="bg-softRed w-full sm:w-fit px-4 h-12 shadow-xl rounded text-white border-softRed border-2 hover:bg-white hover:text-softRed"
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
