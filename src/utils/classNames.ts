export const classNames = (...classNames: (string | false | undefined | null)[]) =>
  classNames.filter(Boolean).join(' ');
