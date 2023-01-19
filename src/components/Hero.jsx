import React from 'react';
// import HeroIllustration from '../assets/images/illustration-hero.svg';
import heroImg from '../assets/images/illustration-hero.svg';

function Hero() {
	return (
		<section>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center flex-col">
					<img src={heroImg} className="" />
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">A Simple Bookmark Manager</h1>
						<p className="py-6">
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</p>
						<div className="flex justify-evenly">
							<button className="btn btn-primary">Get it on Chrome</button>
							<button className="btn btn-accent">Get it on Firefox</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
