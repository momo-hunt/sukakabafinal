export const actions = {
  add: async ({ request }) => {
    const { collection, ...data } = Object.fromEntries(
      await request.formData()
    );
    await new Promise((res) => setTimeout(res, 3000));

    return data;
  },
};
