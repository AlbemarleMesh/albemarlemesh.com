// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Albemarle Mesh';
export const SITE_DESCRIPTION =
    'A community project to setup a Meshtastic mesh in Albemarle County, VA';
export const MY_NAME = 'Luke Bouch';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
