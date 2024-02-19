import { defineConfig } from "vite";

import glsl from "vite-plugin-glsl";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    base: "./",
    build: {
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes("@babylonjs/core")) {
                        return "BabylonCore";
                    } else if (id.includes("ammojs-typed")) {
                        return "AmmoJS";
                    }
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ["@babylonjs/havok"],
    },
    plugins: [
        glsl(),
        {
            name: "fix-recast",
            transform(code, id) {
                if (id.includes("recast-detour.js")) {
                    return code.replace(`this["Recast"]`, 'window["Recast"]');
                }
            },
        },
    ],
});
