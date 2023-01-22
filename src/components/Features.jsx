import React from 'react';
import FeatureTab1 from '../assets/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/illustration-features-tab-3.svg';

function Features() {
	return (
		<section className="px-[10%] h-screen">
			<div className="mx-auto text-center">
				<h1 className="text-3xl font-bold">Features</h1>
				<p className="w-1/3 my-4 mx-auto text-gray-400 text-lg">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="flex flex-col  justify-center items-center">
				<ul className="flex flex-col sm:flex-row">
					<li className="h-14">
						<button className="w-64 border-b-4 h-full border-red-400">
							Simple Bookmarking
						</button>
					</li>
					<li className="h-14">
						<button className="w-64 border-b-2 h-full">Speedy Searching</button>
					</li>
					<li className="h-14">
						<button className="w-64 border-b-2 h-full">Easy Sharing</button>
					</li>
				</ul>
				<div className="flex justify-center my-16">
					<img
						src={FeatureTab1}
						alt="Simple Bookmarking"
						className="my-5 mx-auto"
					/>
					<div className="flex flex-col justify-evenly px-20">
						<h2 className="font-bold text-3xl">Bookmark in one click</h2>
						<p className="text-lg text-gray-500">
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</p>
						<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white">
							More Info
						</button>
					</div>
				</div>
				<div className="hidden my-5 flex-col sm:flex-row items-center justify-between">
					<img
						src={FeatureTab1}
						alt="Simple Bookmarking"
						className="my-5 mx-auto"
					/>
					<div className="px-0 sm:px-10">
						<h2 className="text-lg font-bold">Bookmark in one click</h2>
						<p className="my-5">
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</p>
					</div>
				</div>
				<div className="hidden my-5 flex-col sm:flex-row items-center justify-between">
					<img
						src={FeatureTab1}
						alt="Simple Bookmarking"
						className="my-5 mx-auto"
					/>
					<div className="px-0 sm:px-10">
						<h2 className="text-lg font-bold">Bookmark in one click</h2>
						<p className="my-5">
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
