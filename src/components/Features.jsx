import React from 'react';
import FeatureTab1 from '../assets/images/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/images/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/images/illustration-features-tab-3.svg';

function Features() {
	return (
		<section>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center flex-col">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Features</h1>
						<p className="py-6">
							Our aim is to make it quick and easy for you to access your
							favourite websites. Your bookmarks sync between your devices so
							you can access them on the go.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<ul>
							<li className="border-t-2 h-14 w-[320px] flex items-center justify-center">
								<button className="border-b-4 h-full border-red-400">
									Simple Bookmarking
								</button>
							</li>
							<li className="border-y-2 h-14 w-[320px] flex items-center justify-center">
								<button>Speedy Searching</button>
							</li>
							<li className="border-b-2 h-14 w-[320px] flex items-center justify-center">
								<button>Easy Sharing</button>
							</li>
						</ul>
						<div className="my-5 flex flex-col items-center justify-between">
							<img
								src={FeatureTab1}
								alt="Simple Bookmarking"
								className="my-5"
							/>
							<h2 className="text-lg font-bold">Bookmark in one click</h2>
							<p className="sm:w-1/2 my-5 ">
								Organize your bookmarks however you like. Our simple
								drag-and-drop interface gives you complete control over how you
								manage your favourite sites.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
