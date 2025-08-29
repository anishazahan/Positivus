export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const getCurrentYear = () => new Date().getFullYear();

