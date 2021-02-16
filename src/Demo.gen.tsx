/* TypeScript file generated from Demo.res by genType. */
/* eslint-disable import/first */


import {lighten as lightenNotChecked} from 'polished';

// In case of type error, check the type of 'lighten' in 'Demo.re' and 'polished'.
export const lightenTypeChecked: (_1:number, _2:string) => string = lightenNotChecked;

// Export 'lighten' early to allow circular import from the '.bs.js' file.
export const lighten: unknown = lightenTypeChecked as (_1:number, _2:string) => string;
