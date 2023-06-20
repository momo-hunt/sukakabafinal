import { writable } from "svelte/store";

const stored = () => {
  const { subscribe, set, update } = writable({});
  let old = {};
  return {
    subscribe,

    get: async (collection, option, callback) => {
      set({ ...old, [collection]: { loading: true } });

      const params = new URLSearchParams(option);
      const res = await fetch(`/api/${collection}?` + params);
      const respon = await res.json();

      old = { ...old, [collection]: { loading: false, ...respon } };
      set(old);

      if (callback) callback();
    },

    add: (collection, data) => {
      return update((n) => {
        n[collection].data = [data, ...n[collection].data];
        return n;
      });
    },
  };
};

export const list = stored();
