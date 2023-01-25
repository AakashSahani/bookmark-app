import React from 'react';
import heroImg from '../assets/illustration-hero.svg';

function Hero() {
	return (
		<section className="flex flex-col lg:flex-row-reverse items-center pl-[10%] pr-[10%] sm:pr-[5%] min-h-[80vh]">
			<img
				src={heroImg}
				alt="Bookmark Manager"
				className="w-full h-auto m-auto sm:flex-1 pt-10 sm:pt-0"
			/>
			<div className="flex flex-col justify-center flex-1 items-center text-center sm:text-left sm:items-start">
				<h1 className="text-4xl font-bold">A Simple Bookmark Manager</h1>
				<p className="py-6">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<div className="flex justify-evenly">
					<button className="h-12 px-4 shadow-xl min-w-fit rounded bg-softBlue text-white">
						Get it on Chrome
					</button>
					<button className="h-12 shadow-xl px-4 min-w-fit ml-4 rounded bg-white">
						Get it on Firefox
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
