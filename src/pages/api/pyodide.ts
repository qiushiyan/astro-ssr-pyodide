import type { APIRoute } from "astro";

export const get: APIRoute = async (request) => {
	const { loadPyodide } = await import("pyodide");
	await loadPyodide({
		indexURL: "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/",
	});
	return new Response("hello", { status: 200 });
};
