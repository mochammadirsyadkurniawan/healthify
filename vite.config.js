// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: 'resources/js/app.jsx',
//             refresh: true,
//         }),
//         react(),
//     ],
// });

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/swiper-custom.css',
                'resources/css/user/styles.css',
                'resources/css/workout.css',
                'resources/css/app.css',
                'resources/css/chatbot.css',
            ],
            refresh: true,
        }),
        react(),
    ],
});
