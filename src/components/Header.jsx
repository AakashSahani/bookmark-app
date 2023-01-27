import React, { useEffect, useState } from 'react';
import Bookmark from '../assets/logo-bookmark.svg';
import Hamburger from '../assets/icon-hamburger.svg';
import Close from '../assets/icon-close.svg';
import fb from '../assets/icon-facebook.svg';
import tw from '../assets/icon-twitter.svg';

function Header() {
	const [menu, setMenu] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setMenu((menu) => !menu);
	};
	return (
		<header
			className="flex px-[10%] py-10 justify-between"
			onScroll={handleClick}
		>
			<div className="z-10 flex w-fit items-center justify-center">
				<img
					src={Bookmark}
					alt="Bookmark Logo"
					className={menu ? 'invert' : ''}
				/>
			</div>
			<div className="flex-1 hidden lg:block pl-10">
				<ul className="flex w-fit ml-auto justify-between items-center">
					<li className="mx-5">
						<a href="#" className=" hover:text-softRed">
							FEATURES
						</a>
					</li>
					<li className="mx-5">
						<a href="#" className=" hover:text-softRed">
							PRICING
						</a>
					</li>
					<li className="mx-5">
						<a href="#" className=" hover:text-softRed">
							CONTACT
						</a>
					</li>
					<li className="ml-5">
						<button className="h-10 border-2 px-10 rounded bg-softRed border-softRed text-white hover:bg-white hover:text-softRed">
							LOGIN
						</button>
					</li>
				</ul>
			</div>
			<div className="flex-none lg:hidden z-10">
				<button onClick={handleClick}>
					<img src={menu ? Close : Hamburger} alt="Mobile Menu" />
				</button>
			</div>
			<div
				className={`${
					menu ? 'flex' : 'hidden'
				} lg:hidden absolute flex-col items-center justify-around w-screen h-screen top-0 left-0 bg-veryDarkBlue opacity-95`}
			>
				<ul className="flex flex-col  w-full justify-center items-center px-10 text-center text-lg text-white">
					<li className="flex items-center justify-center border-y w-full h-16">
						<a href="#" className="">
							FEATURES
						</a>
					</li>
					<li className="flex items-center justify-center w-full h-16">
						<a href="#" className="">
							PRICING
						</a>
					</li>
					<li className="flex items-center justify-center border-y w-full h-16">
						<a href="#" className="">
							CONTACT
						</a>
					</li>
					<li className="flex items-center justify-center w-full h-16">
						<button className="border-2 w-full text-white text-xl h-12 rounded-md mt-10">
							LOGIN
						</button>
					</li>
				</ul>
				<ul className="flex w-24 sm:w-[100px] justify-between items-center">
					<li>
						<img src={fb} alt="Facebook" />
					</li>
					<li>
						<img src={tw} alt="Twitter" />
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
