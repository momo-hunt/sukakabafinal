import * as server from '../entries/pages/(app)/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/(app)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+page.server.js";
export const imports = ["_app/immutable/nodes/5.28e3b819.js","_app/immutable/chunks/index.40d64450.js","_app/immutable/chunks/Icon.655e772b.js"];
export const stylesheets = ["_app/immutable/assets/5.9f3a0798.css"];
export const fonts = [];
