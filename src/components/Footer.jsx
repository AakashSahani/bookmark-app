import React from 'react';
import Bookmark from '../assets/images/logo-Bookmark.svg';
import fb from '../assets/images/icon-facebook.svg';
import tw from '../assets/images/icon-twitter.svg';

function Footer() {
	return (
		<footer className="min-h-[50vh] flex flex-col items-center">
			<img src={Bookmark} alt="Bookmark Logo" />
			<ul>
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
			<ul>
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
