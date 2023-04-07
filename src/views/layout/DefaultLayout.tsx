import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<body>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</body>
	);
};

export default DefaultLayout;
