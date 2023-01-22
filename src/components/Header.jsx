import React from 'react';
import Bookmark from '../assets/logo-bookmark.svg';

function Header() {
	return (
		<header className="flex px-[10%] py-10">
			<div className="flex-1">
				<a className="normal-case text-xl">
					<img src={Bookmark} alt="Bookmark Logo" />
				</a>
			</div>
			<div className="flex-1 hidden md:block">
				<ul className="flex w-full justify-around items-center">
					<li>
						<a href="#" className=" hover:text-softRed">
							FEATURES
						</a>
					</li>
					<li>
						<a href="#" className=" hover:text-softRed">
							PRICING
						</a>
					</li>
					<li>
						<a href="#" className=" hover:text-softRed">
							CONTACT
						</a>
					</li>
					<li>
						<button className="h-10 border-2 px-10 rounded bg-softRed border-softRed text-white hover:bg-white hover:text-softRed">
							LOGIN
						</button>
					</li>
				</ul>
			</div>
			<div className="flex-none md:hidden">
				<button className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg>
				</button>
			</div>
		</header>
	);
}

export default Header;
