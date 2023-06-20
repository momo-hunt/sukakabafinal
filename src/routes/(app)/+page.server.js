export const actions = {
  add: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(res, 3000));

    return data;
  },
};
