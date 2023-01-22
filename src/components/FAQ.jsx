import React from 'react';

function FAQ() {
	return (
		<section>
			<div>
				<h2>Frequently Asked Questions</h2>
				<p>
					Here are some of our FAQs. if you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<ul>
					<li>What is Bookmark?</li>
					<li>How can I request a new browser?</li>
					<li>Is there a mobile app?</li>
					<li>What about other Chromium browsers?</li>
				</ul>
				<button>More Info</button>
			</div>
			<div>
				<span>35,000 ALREADY JOINED</span>
				<h3>Stay up-to-date with what we're doing</h3>
				<form>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email address"
					/>
					<button type="submit">Contact Us</button>
				</form>
			</div>
		</section>
	);
}

export default FAQ;
