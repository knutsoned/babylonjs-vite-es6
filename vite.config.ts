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
                    if (
                        id.includes("@babylonjs/core/Loading") ||
                        id.includes("@babylonjs/loaders")
                    ) {
                        return "BabylonLoaders";
                    } else if (
                        id.includes("@babylonjs/core/scene") ||
                        id.includes("@babylonjs/core/Misc") ||
                        id.includes("@babylonjs/core/Maths")
                    ) {
                        return "BabylonSceneMiscMaths";
                    } else if (id.includes("@babylonjs/core/Engines")) {
                        return "BabylonEngines";
                    } else if (id.includes("@babylonjs/core/Materials")) {
                        return "BabylonMaterials";
                    } else if (id.includes("@babylonjs/core/Meshes")) {
                        return "BabylonMeshes";
                    } else if (id.includes("@babylonjs")) {
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
