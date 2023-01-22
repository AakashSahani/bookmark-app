import React from 'react';
import FeatureTab1 from '../assets/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/illustration-features-tab-3.svg';

function Features() {
	return (
		<section>
			<div className="mx-auto text-center">
				<h1 className="text-5xl font-bold">Features</h1>
				<p className="w-1/2 my-2 mx-auto">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="flex flex-col  justify-center items-center">
				<ul className="flex flex-col sm:flex-row">
					<li className="border-t-2 sm:border-b-2 sm:border-t-0 h-14 w-[320px] flex items-center justify-center">
						<button className="border-b-4 h-full border-red-400">
							Simple Bookmarking
						</button>
					</li>
					<li className="border-y-2 sm:border-b-2 sm:border-y-0 h-14 w-[320px] flex items-center justify-center">
						<button>Speedy Searching</button>
					</li>
					<li className="border-b-2  h-14 w-[320px] flex items-center justify-center">
						<button>Easy Sharing</button>
					</li>
				</ul>
				<div className="my-5 flex flex-col sm:flex-row items-center justify-between">
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
