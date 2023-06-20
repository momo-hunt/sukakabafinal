import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.3f5ed571.js","app":"_app/immutable/entry/app.cb07ecca.js","imports":["_app/immutable/entry/start.3f5ed571.js","_app/immutable/chunks/index.40d64450.js","_app/immutable/chunks/singletons.7101c8a0.js","_app/immutable/chunks/index.dcdc29f3.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.cb07ecca.js","_app/immutable/chunks/index.40d64450.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/[collection]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"collection","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/_collection_/_server.js')
			},
			{
				id: "/(app)/(public)/pemakaian",
				pattern: /^\/pemakaian\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/(public)/pemakaian/tambah",
				pattern: /^\/pemakaian\/tambah\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/(public)/pemakaian/tambah/pilih-spj",
				pattern: /^\/pemakaian\/tambah\/pilih-spj\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/(public)/pemakaian/[id]",
				pattern: /^\/pemakaian\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/(admin)/spj",
				pattern: /^\/spj\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
