export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9q7fnT0sXgAmKceN73vTZP6phDrIlkd9E02EqditMCByZsVkdXofsZs0Sg&s";

export const API_Option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const PREFERED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const VIDEO_CDN_URL = "https://www.youtube.com/embed/";

export const GEMINI_URL = process.env.REACT_APP_GEMINI_KEY;
