import { json } from "@sveltejs/kit";
export const GET = async ({ url, params }) => {
  const { collection } = params;
  const option = Object.fromEntries(url.searchParams);

  await new Promise((res) => setTimeout(res, 3000));
  let data = [{ keperluan: "Dinas" }, { keperluan: "Rapat" }];
  return json(data);
};
