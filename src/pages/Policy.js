import React from "react";
import ImageOpxContainer from "../components/ImageOpxContainer";
import InfoContainer from "../components/InfoContainer";
import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Policy() {
	return (
		<Layout>
			<InfoContainer title="Data Policy" description="Update on 05/26/2023">
				<p className="text-justify text-xl leading-6 ">
					Thank you for using our open source mobile browser ("Opx Browser").
					This Privacy Policy outlines how we handle your data and ensure your
					privacy while using our Opx Browser. We are committed to protecting
					your personal information and providing a secure browsing experience.
					Please read this policy carefully to understand our practices.
				</p>
				<Section title="Information We Collect:">
					We do not collect any personal data from you while using the Opx
					Browser. We are dedicated to preserving your privacy and only store
					data related to your browsing activities on your own device. We do not
					track, monitor, or collect any personally identifiable information.
				</Section>
				<Section title="Browsing Data:">
					The Opx Browser may collect and store non-personally identifiable
					information about your browsing activities. This data is solely stored
					locally on your device and is used for providing a seamless browsing
					experience. The browsing data includes, but is not limited to, the
					websites you visit, bookmarks, search queries, and browsing history.
					This information is not transmitted or shared with any third parties.
				</Section>
				<Section title="Use of Cookies:">
					The Opx Browser does not utilize cookies or similar tracking
					technologies to collect data about your browsing behavior. Therefore,
					we do not store any cookies on your device.
				</Section>
				<Section title="Security Measures:">
					We take appropriate security measures to protect your data stored
					within the Opx Browser. These measures include encryption and
					anonymization techniques to ensure the confidentiality and integrity
					of your browsing data. However, please be aware that no security
					measure is completely foolproof, and we cannot guarantee absolute
					security.
				</Section>
				<Section title="Disclosure of Information:">
					As we do not collect any personally identifiable information or
					transmit your data to external servers, we do not share or disclose
					your information with any third parties.
				</Section>
				<Section title="Changes to the Privacy Policy:">
					We may update this Privacy Policy from time to time to reflect changes
					in our practices or legal requirements. Any updates will be posted on
					our official website or within the Opx Browser. It is your
					responsibility to review the Privacy Policy periodically.
				</Section>
				<Section title="Contact Us:">
					If you have any questions, concerns, or suggestions regarding our
					Privacy Policy or the practices of the Opx Browser, please contact us
					at contact@opxbrowser.com.
				</Section>
				<p className="text-justify text-xl leading-6 mt-10">
					By using our Browser, you agree to the terms and conditions outlined
					in this Privacy Policy.
				</p>
				<ImageOpxContainer />
			</InfoContainer>
		</Layout>
	);
}
