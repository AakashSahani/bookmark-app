import React, { useEffect, useState } from 'react';
import FeatureTab1 from '../assets/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/illustration-features-tab-3.svg';

function Features() {
	const [features, setFeature] = useState([
		{ id: 0, featured: false },
		{ id: 1, featured: false },
		{ id: 2, featured: false },
	]);
	useEffect(() => {
		handleClick(0);
	}, []);
	const handleClick = (id) => {
		let newArr = [];
		features.map((feature) => {
			newArr = [
				...newArr,
				{
					id: feature.id,
					featured: feature.id === id ? !feature.featured : false,
				},
			];
		});
		features[id].featured === true
			? setFeature((features) => features)
			: setFeature([...newArr]);
	};

	return (
		<section className="px-[10%] pt-10 min-h-fit">
			<div className="mx-auto text-center">
				<h1 className="text-3xl font-bold">Features</h1>
				<p className="w-full sm:w-1/3 my-4 mx-auto text-gray-400 text-lg">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="flex flex-col  justify-center items-center ">
				<ul className="flex flex-col sm:flex-row w-full sm:items-center sm:justify-center text-center">
					<li className="border-t-2 sm:border-t-0 sm:border-b-2 h-14">
						<button
							className={`sm:w-64 border-b-4 h-full hover:text-softRed ${
								features[0].featured ? 'border-b-red-400' : 'border-b-0'
							}`}
							onClick={() => handleClick(0)}
						>
							Simple Bookmarking
						</button>
					</li>
					<li className="border-y-2 sm:border-y-0 sm:border-b-2 h-14 ">
						<button
							className={`sm:w-64 border-b-4 h-full hover:text-softRed ${
								features[1].featured ? 'border-b-red-400' : 'border-b-0'
							}`}
							onClick={() => handleClick(1)}
						>
							Speedy Searching
						</button>
					</li>
					<li className="border-b-2 h-14 ">
						<button
							className={`sm:w-64 border-b-4 h-full hover:text-softRed ${
								features[2].featured ? 'border-b-red-400' : 'border-b-0'
							}`}
							onClick={() => handleClick(2)}
						>
							Easy Sharing
						</button>
					</li>
				</ul>
				<div
					className={
						!features[0].featured
							? 'hidden'
							: 'flex flex-col sm:px-[10%] lg:flex-row items-center justify-between my-16 max-h-fit min-h-[50vh]'
					}
				>
					<div className="flex-1">
						<img
							src={FeatureTab1}
							alt="Simple Bookmarking"
							className="w-[100%] h-auto"
						/>
					</div>
					<div className="flex flex-1 flex-col justify-between lg:justify-center items-center lg:items-start text-center lg:text-left lg:pl-20 py-10 lg:py-0">
						<h2 className="font-bold text-2xl lg:text-3xl my-4">
							Bookmark in one click
						</h2>
						<p className="text-md lg:text-lg text-gray-500">
							Organize your bookmarks however you like. Our simple drag-and-drop
							interface gives you complete control over how you manage your
							favourite sites.
						</p>
						<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white my-5">
							More Info
						</button>
					</div>
				</div>
				<div
					className={
						!features[1].featured
							? 'hidden'
							: 'flex flex-col sm:px-[10%] lg:flex-row items-center justify-between my-16 max-h-fit min-h-[50vh]'
					}
				>
					<div className="flex-1">
						<img
							src={FeatureTab2}
							alt="Simple Bookmarking"
							className="w-[100%] h-auto"
						/>
					</div>
					<div className="flex flex-1 flex-col justify-between lg:justify-center items-center lg:items-start text-center lg:text-left lg:pl-20 py-10 lg:py-0">
						<h2 className="font-bold text-2xl lg:text-3xl my-4">
							Intelligent search
						</h2>
						<p className="text-md lg:text-lg text-gray-500">
							Our powerful search feature will help you find saved sites in no
							time at all. No need to trawl through all of your bookmarks.
						</p>
						<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white my-5">
							More Info
						</button>
					</div>
				</div>
				<div
					className={
						!features[2].featured
							? 'hidden'
							: 'flex flex-col sm:px-[10%] lg:flex-row items-center justify-between my-16 max-h-fit min-h-[50vh]'
					}
				>
					<div className="flex-1">
						<img
							src={FeatureTab3}
							alt="Simple Bookmarking"
							className="w-[100%] h-auto"
						/>
					</div>
					<div className="flex flex-1 flex-col justify-between lg:justify-center items-center lg:items-start text-center lg:text-left lg:pl-20 py-10 lg:py-0">
						<h2 className="font-bold text-2xl lg:text-3xl my-4">
							Share your bookmarks
						</h2>
						<p className="text-md lg:text-lg text-gray-500">
							Easily share your bookmarks and collections with others. Create a
							shareable link that you can send at the click of a button.
						</p>
						<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white my-5">
							More Info
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
