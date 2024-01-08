export function typedObjectKeys<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

export function typedObjectEntries<T extends Record<string, any>>(obj: T) {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
