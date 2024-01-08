export function initializeFormData<T extends Record<string, any>, F extends string>(
  data: T,
  keys: ReadonlyArray<F>
) {
  return keys.reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: data[key],
      };
    },
    {} as { [K in (typeof keys)[number]]: (typeof data)[K] }
  );
}
