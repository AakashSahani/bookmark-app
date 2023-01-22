import React from 'react';
import heroImg from '../assets/illustration-hero.svg';

function Hero() {
	return (
		<section className="flex flex-col md:flex-row-reverse items-center px-[10%] min-h-[80vh]">
			<img
				src={heroImg}
				alt="Bookmark Manager"
				className="w-full h-auto m-auto"
			/>
			<div className="flex flex-col justify-center items-start">
				<h1 className="text-5xl font-bold">A Simple Bookmark Manager</h1>
				<p className="py-6">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<div className="flex justify-evenly">
					<button className="h-12 px-8 shadow-xl rounded bg-softBlue text-white">
						Get it on Chrome
					</button>
					<button className="h-12 shadow-xl px-8 ml-4 rounded bg-white">
						Get it on Firefox
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
