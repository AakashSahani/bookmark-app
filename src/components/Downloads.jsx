import React from 'react';
import Chrome from '../assets/logo-chrome.svg';
import Firefox from '../assets/logo-firefox.svg';
import Opera from '../assets/logo-opera.svg';

function Downloads() {
	return (
		<section className="text-center min-h-screen flex flex-col sm:justify-evenly space-y-10 py-5 px-[10%]">
			<div>
				<h2 className="text-2xl font-bold">Download the extension</h2>
				<p className="text-lg w-full sm:w-1/2 mx-auto mt-2 text-gray-500">
					We've got more browsers in the pipeline. Please do let us know if
					you've got a favourite you'd like us to priotize.
				</p>
			</div>
			<div className="flex flex-col sm:flex-row justify-center my-5">
				<div className="flex text-lg my-5 mx-auto sm:mx-4 sm:my-0 w-[70vw]  sm:w-[275px] h-96 shadow-md rounded-lg flex-col justify-evenly  items-center">
					<img src={Chrome} alt="Chrome" className="w-20" />
					<div className="w-full border-dotted border-b-8 pb-5">
						<h3 className="text-xl font-bold">Add to Chrome</h3>
						<span className=" w-full pb-5 text-gray-400">
							Minimum version 62
						</span>
					</div>
					<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white">
						Add & Install Extension
					</button>
				</div>
				<div className="flex text-lg my-5 mx-auto sm:mx-4 sm:my-10 w-[70vw] sm:w-[275px] h-96 shadow-md rounded-lg flex-col justify-evenly  items-center">
					<img src={Firefox} alt="" className="w-20" />
					<div className="w-full border-dotted border-b-8 pb-5">
						<h3 className="text-xl font-bold">Add to Firefox</h3>
						<span className="w-full pb-5 text-gray-400">
							Minimum version 55
						</span>
					</div>
					<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white">
						Add & Install Extension
					</button>
				</div>
				<div className="flex text-lg my-5 mx-auto sm:mx-4 sm:my-20 w-[70vw] sm:w-[275px] h-96  shadow-md rounded-lg flex-col justify-evenly  items-center">
					<img src={Opera} alt="" className="w-20" />
					<div className="w-full border-dotted border-b-8 pb-5">
						<h3 className="text-xl font-bold">Add to Opera</h3>
						<span className=" w-full pb-5 text-gray-400">
							Minimum version 46
						</span>
					</div>
					<button className="w-fit px-4 h-12 shadow-xl rounded bg-softBlue text-white">
						Add & Install Extension
					</button>
				</div>
			</div>
		</section>
	);
}

export default Downloads;
