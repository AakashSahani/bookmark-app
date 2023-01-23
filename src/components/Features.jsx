import React, { useState } from 'react';
import FeatureTab1 from '../assets/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/illustration-features-tab-3.svg';

function Features() {
	const [features, setFeature] = useState([false, false, false]);
	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.currentTarget.classList);
	};

	return (
		<section className="px-[10%] h-screen">
			<div className="mx-auto text-center">
				<h1 className="text-3xl font-bold">Features</h1>
				<p className="w-full sm:w-1/3 my-4 mx-auto text-gray-400 text-lg">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="flex flex-col  justify-center items-center ">
				<ul className="flex flex-col sm:flex-row w-full text-center">
					<li className="border-t-2 h-14">
						<button
							className="sm:w-64 border-b-4 h-full border-b-red-400"
							onClick={handleClick}
						>
							Simple Bookmarking
						</button>
					</li>
					<li className="border-y-2 h-14">
						<button className="sm:w-64 h-full">Speedy Searching</button>
					</li>
					<li className="border-b-2 h-14">
						<button className="sm:w-64 h-full">Easy Sharing</button>
					</li>
				</ul>
				<div className="flex flex-col justify-between my-16 h-[50vh]">
					<img
						src={FeatureTab1}
						alt="Simple Bookmarking"
						className="my-0 sm:my-5  mx-auto"
					/>
					<div className="flex flex-col justify-between items-center text-center px-0 sm:px-20">
						<h2 className="font-bold text-2xl my-4">Bookmark in one click</h2>
						<p className="text-md text-gray-500">
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</p>
						{/* <button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white">
							More Info
						</button> */}
					</div>
				</div>
				<div className="hidden justify-center my-16">
					<img
						src={FeatureTab2}
						alt="Simple Bookmarking"
						className="my-5 mx-auto"
					/>
					<div className="px-0 sm:px-10">
						<h2 className="text-lg font-bold">Intelligent search</h2>
						<p className="my-5">
							Our powerful search feature will help you find saved sites in no
							time at all. No need to trawl through all of your bookmarks.
						</p>
					</div>
				</div>
				<div className="hidden justify-center my-16">
					<img
						src={FeatureTab3}
						alt="Simple Bookmarking"
						className="my-5 mx-auto"
					/>
					<div className="px-0 sm:px-10">
						<h2 className="text-lg font-bold">Share your bookmarks</h2>
						<p className="my-5">
							Easily share your bookmarks and collections with others. Create a
							shareable link that you can send at the click of a button.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
