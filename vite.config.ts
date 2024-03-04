import { defineConfig } from "vite";

import glsl from "vite-plugin-glsl";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
        viteStaticCopy({
            targets: [
                {
                    src: "node_modules/recast-detour/recast.*",
                    dest: "",
                },
            ],
        }),
        {
            name: "fix-recast",
            transform(code, id) {
                if (id.includes("recast-detour")) {
                    return code.replace(
                        `this["Recast"]`,
                        'window.this ||= window; window["Recast"]'
                    );
                }
            },
        },
    ],
});
