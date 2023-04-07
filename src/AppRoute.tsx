import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoute = () => {
	const HomeContainer = React.lazy(() => import("./containers/HomeContainer"));
	const DefaultLayout = React.lazy(
		() => import("./views/layout/DefaultLayout"),
	);
	const Login = React.lazy(() => import("./views/page/Login"));

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<DefaultLayout />}>
						<Route index element={<HomeContainer></HomeContainer>} />
					</Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default AppRoute;
