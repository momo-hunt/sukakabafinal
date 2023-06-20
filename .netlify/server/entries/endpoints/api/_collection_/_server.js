import { j as json } from "../../../../chunks/index.js";
const GET = async ({ url, params }) => {
  Object.fromEntries(url.searchParams);
  await new Promise((res) => setTimeout(res, 3e3));
  let data = [{ keperluan: "Dinas" }, { keperluan: "Rapat" }];
  return json(data);
};
export {
  GET
};
