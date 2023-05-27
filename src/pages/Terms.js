import React from "react";
import ImageOpxContainer from "../components/ImageOpxContainer";
import InfoContainer from "../components/InfoContainer";
import Layout from "../components/Layout";

export default function Terms() {
	return (
		<Layout>
			<InfoContainer title="Service Terms" description="Update on 02/14/2023">
				<p className="text-justify text-xl leading-6 ">
					Thank you for choosing our open source mobile browser ("the Opx
					Browser"). By using the Opx Browser, you agree to comply with the
					following Terms of Use. These terms outline your rights and
					responsibilities while using the Opx Browser, as well as our
					commitment to protecting your privacy. Please read these terms
					carefully before using the Opx Browser.
				</p>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">1. Acceptance of Terms</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						By using the Opx Browser, you acknowledge that you have read,
						understood, and agree to be bound by these Terms of Use. If you do
						not agree with any part of these terms, please refrain from using
						the Opx Browser.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">
						2. Privacy and Data Collection
					</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						We respect your privacy and are committed to protecting your
						personal information. The Opx Browser does not collect any data from
						your device, except for storing browsing data locally on your device
						for the purpose of enhancing your browsing experience. We do not
						collect or store any personally identifiable information without
						your explicit consent.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">3. Intellectual Property</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						The Opx Browser is an open source software, and it is distributed
						under the license of the{" "}
						<a
							className="text-primary"
							href="https://www.mozilla.org/en-US/MPL/"
						>
							Mozilla v1.1
						</a>
						. All intellectual property rights related to the Opx Browser,
						including but not limited to trademarks, copyrights, and patents,
						are owned by their respective owners.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">4. User Conduct</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						When using the Opx Browser, you agree to:
					</p>
					<p className="text-justify text-xl leading-6 mt-2">
						4.1. Use the Opx Browser in compliance with all applicable laws and
						regulations.
					</p>
					<p className="text-justify text-xl leading-6 mt-2">
						4.2. Respect the intellectual property rights of others.
					</p>
					<p className="text-justify text-xl leading-6 mt-2">
						4.3. Refrain from engaging in any activity that may disrupt,
						interfere with, or harm the functioning of the Opx Browser or its
						associated systems.{" "}
					</p>
					<p className="text-justify text-xl leading-6 mt-2">
						4.4. Not use the Opx Browser for any unlawful, harmful, or malicious
						purposes.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">5. Limitation of Liability</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						To the fullest extent permitted by law, we disclaim any liability
						for any damages or losses arising out of or related to the use or
						inability to use the Opx Browser. This includes but is not limited
						to direct, indirect, incidental, consequential, or punitive damages.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">
						6. Modifications to the Terms of Use
					</h2>
					<p className="text-justify text-xl leading-6 mt-4">
						We reserve the right to modify or update these Terms of Use at any
						time without prior notice. Any changes will be effective immediately
						upon posting the revised terms on our website or within the Opx
						Browser. Your continued use of the Opx Browser after the changes
						will constitute your acceptance of the revised terms.
					</p>
				</section>
				<section className="mt-6">
					<h2 className="font-semibold text-2xl">Contact Us:</h2>
					<p className="text-justify text-xl leading-6 mt-10">
						If you have any questions, concerns, or suggestions regarding our
						Privacy Policy or the practices of the Opx Browser, please contact
						us at <address>contact@opxbrowser.com</address>.
					</p>
				</section>
				<p className="text-justify text-xl leading-6 mt-10">
					By using our Browser, you agree to the terms and conditions outlined
					in this Terms.
				</p>
				<ImageOpxContainer />
			</InfoContainer>
		</Layout>
	);
}
