export const SHOW_ALL: string = 'SHOW_ALL';
export type SHOW_ALLT = typeof SHOW_ALL;

export const FILTERBY_NAME = 'FILTERBY_NAME';
export type FILTERBY_NAMET = typeof FILTERBY_NAME;

export const FILTERBY_STARS = 'FILTERBY_STARS';
export type FILTERBY_STARST = typeof FILTERBY_STARS;

export type FILTER = SHOW_ALLT | FILTERBY_NAMET | FILTERBY_STARST
