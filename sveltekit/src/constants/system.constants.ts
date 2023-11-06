export const DNA_BACKEND_URL = import.meta.env.PROD ? import.meta.env.VITE_DNA_API_URL : 'http://localhost:8055';

export const DNA_FRONT_URL = import.meta.env.PROD ? import.meta.env.VITE_DNA_FRONT_URL : 'http://localhost:5173';

export const NOTIFICATION_DISPLAY_TIME_IN_SECONDS = 4;

export const FORBIDDEN_ACCESS_MODAL_DISPLAY_TIME_IN_SECONDS = 3;
