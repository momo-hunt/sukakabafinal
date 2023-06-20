const actions = {
  add: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(res, 3e3));
    return data;
  }
};
export {
  actions
};
