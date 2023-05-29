import React from "react";
import ImageOpxContainer from "../components/ImageOpxContainer";
import InfoContainer from "../components/InfoContainer";
import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Why() {
	return (
		<Layout>
			<InfoContainer title="Why Opx">
				<p className="text-justify text-xl leading-6 ">
					In the ever-expanding digital landscape, web browsers have become
					essential tools for accessing online content. Among the plethora of
					options available, Opx Browser stands out as a unique choice. As an
					open-source application, Opx Browser offers users a secure and
					privacy-focused web browsing experience by ensuring that no user data
					is stored externally. Additionally, its open-source nature fosters
					transparency and collaboration among developers, making it an
					excellent choice for those seeking a reliable and customizable
					browser.
				</p>
				<Section title="Local Data Storage:">
					One of the standout features of Opx Browser is its commitment to
					protecting user data. Unlike many other browsers that store data on
					external servers, Opx Browser employs a local data storage approach.
					This means that all user data, such as browsing history, cookies, and
					cache, is saved only on the user's device. By eliminating external
					storage, Opx Browser minimizes the risk of data breaches, unauthorized
					access, and privacy violations, providing users with peace of mind.
				</Section>
				<Section title="Privacy-Centric Approach">
					Opx Browser places a strong emphasis on privacy. By storing data
					exclusively on the user's device, it significantly reduces the
					exposure of personal information to external entities. This approach
					prevents the collection and tracking of user data by third-party
					entities, enhancing privacy and reducing the risk of targeted
					advertising and intrusive tracking. With Opx Browser, users can enjoy
					a browsing experience free from invasive data harvesting practices.
				</Section>
				<Section title="Open-Source Excellence">
					Opx Browser's open-source nature is a testament to its commitment to
					transparency and community collaboration. Being an open-source
					application means that the browser's source code is available for
					anyone to inspect, modify, and contribute to. This collaborative
					environment fosters innovation, security improvements, and feature
					enhancements driven by a global community of developers. Users benefit
					from frequent updates, bug fixes, and the collective expertise of the
					community, ensuring a secure and reliable browsing experience.
				</Section>
				<Section title="Customizability and Flexibility">
					Opx Browser offers a high level of customization to suit individual
					preferences. Users have the freedom to tailor the browser's
					appearance, functionality, and behavior according to their specific
					needs. With access to the source code, developers can create
					extensions and plugins, expanding the browser's capabilities beyond
					its default feature set. This customization empowers users to
					personalize their browsing experience, making it more efficient and
					enjoyable.
				</Section>
				<Section title="User-Friendly Interface">
					Despite its focus on privacy and security, Opx Browser maintains a
					user-friendly interface. Its intuitive design ensures that even users
					with limited technical expertise can navigate the browser
					effortlessly. The familiar layout and easily accessible settings make
					it an accessible choice for both casual and advanced users, providing
					a seamless browsing experience.
				</Section>
				<ImageOpxContainer />
			</InfoContainer>
		</Layout>
	);
}
