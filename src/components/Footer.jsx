import React from 'react';
import Bookmark from '../assets/logo-bookmark.svg';
import fb from '../assets/icon-facebook.svg';
import tw from '../assets/icon-twitter.svg';

function Footer() {
	return (
		<footer className="min-h-[50vh] md:px-[10%] md:min-h-fit md:flex-row flex flex-col items-center justify-around py-8 bg-veryDarkBlue text-white">
			<img src={Bookmark} alt="Bookmark Logo" className="invert" />
			<ul className="md:flex-row flex flex-col flex-1 justify-evenly sm:justify-start items-center text-lg">
				<li className="sm:ml-8 ">
					<a href="#">FEATURES</a>
				</li>
				<li className="sm:ml-8">
					<a href="#">PRICING</a>
				</li>
				<li className="sm:ml-8">
					<a href="#">CONTACT</a>
				</li>
			</ul>
			<ul className="flex w-24 sm:w-[100px] justify-between items-center">
				<li>
					<a href="#">
						<img src={fb} alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={tw} alt="Twitter" className="" />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
