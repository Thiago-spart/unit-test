"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: { queries: { staleTime: 100 * 60 * 60 * 4 } },
		}) // 4 hours
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
			<ToastContainer />
		</QueryClientProvider>
	);
}

export default Providers;
