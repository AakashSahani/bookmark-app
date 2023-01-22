import React from 'react';
import Bookmark from '../assets/logo-bookmark.svg';
import fb from '../assets/icon-facebook.svg';
import tw from '../assets/icon-twitter.svg';

function Footer() {
	return (
		<footer className="min-h-[50vh] md:px-[10%] md:min-h-fit md:flex-row flex flex-col items-center justify-around py-8 bg-zinc-400 text-black">
			<img src={Bookmark} alt="Bookmark Logo" />
			<ul className="md:flex-row flex flex-col justify-evenly flex-1 items-center text-lg">
				<li>
					<a href="#">FEATURES</a>
				</li>
				<li>
					<a href="#">PRICING</a>
				</li>
				<li>
					<a href="#">CONTACT</a>
				</li>
			</ul>
			<ul className="flex w-[100px] justify-between items-center">
				<li>
					<img src={fb} alt="Facebook" />
				</li>
				<li>
					<img src={tw} alt="Twitter" />
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
