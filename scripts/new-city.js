"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
function toTitleCase(str) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var args, citySlug, cityName, argIndex, baseSourcePath, baseDestPath, pages, _i, pages_1, page, sourceFilePath, destFilePath, destDir, content;
        return __generator(this, function (_a) {
            args = process.argv.slice(2);
            argIndex = 0;
            if (args[0] === '--') { // Handle `npm run new-city -- <city_slug>`
                argIndex = 1;
            }
            if (args[argIndex]) {
                citySlug = args[argIndex];
                if (args[argIndex + 1] && !args[argIndex + 1].startsWith('--')) {
                    cityName = args[argIndex + 1];
                }
            }
            if (!citySlug) {
                console.error('Usage: npm run new-city -- <city_slug> [city_name (optional)]');
                process.exit(1);
            }
            if (!cityName) {
                cityName = toTitleCase(citySlug);
            }
            console.log("Scaffolding new city: ".concat(cityName, " (").concat(citySlug, ")\n"));
            baseSourcePath = 'src/routes/espanja/fuengirola';
            baseDestPath = path_1.default.join('src/routes/espanja', citySlug);
            // Ensure base destination directory exists
            if (!fs_1.default.existsSync(baseDestPath)) {
                fs_1.default.mkdirSync(baseDestPath, { recursive: true });
                console.log("Created directory: ".concat(baseDestPath));
            }
            else {
                console.log("Directory already exists, skipped: ".concat(baseDestPath));
            }
            pages = [
                { src: '+page.svelte', dest: '+page.svelte' },
                { src: 'faq/+page.svelte', dest: 'faq/+page.svelte' },
                { src: 'liikkuminen/+page.svelte', dest: 'liikkuminen/+page.svelte' },
                { src: 'missa-asua/+page.svelte', dest: 'missa-asua/+page.svelte' },
                { src: 'nahtavyydet/+page.svelte', dest: 'nahtavyydet/+page.svelte' },
                { src: 'paivaretket/+page.svelte', dest: 'paivaretket/+page.svelte' },
                { src: 'rannat/+page.svelte', dest: 'rannat/+page.svelte' },
                { src: 'ravintolat/+page.svelte', dest: 'ravintolat/+page.svelte' },
                // Add lomasihteeri pages
                { src: 'lomasihteeri/+page.svelte', dest: 'lomasihteeri/+page.svelte' },
                { src: 'lomasihteeri/onboarding/+page.svelte', dest: 'lomasihteeri/onboarding/+page.svelte' },
            ];
            for (_i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
                page = pages_1[_i];
                sourceFilePath = path_1.default.join(baseSourcePath, page.src);
                destFilePath = path_1.default.join(baseDestPath, page.dest);
                destDir = path_1.default.dirname(destFilePath);
                if (!fs_1.default.existsSync(sourceFilePath)) {
                    console.warn("Warning: Source file not found: ".concat(sourceFilePath, ". Skipping."));
                    continue;
                }
                if (fs_1.default.existsSync(destFilePath)) {
                    console.log("File already exists, skipped: ".concat(destFilePath));
                    continue;
                }
                fs_1.default.mkdirSync(destDir, { recursive: true });
                content = fs_1.default.readFileSync(sourceFilePath, 'utf8');
                // Replace placeholders
                content = content.replace(/Fuengirola/g, cityName);
                content = content.replace(/fuengirola/g, citySlug);
                // Special handling for lomasihteeri pages' hardcoded citySlug
                if (page.src.startsWith('lomasihteeri/')) {
                    content = content.replace(/const citySlug = 'fuengirola';/g, "const citySlug = '".concat(citySlug, "';"));
                    content = content.replace(new RegExp("/espanja/fuengirola/lomasihteeri", "g"), "/espanja/" + citySlug + "/lomasihteeri");
                }
                fs_1.default.writeFileSync(destFilePath, content, 'utf8');
                console.log("Created file: ".concat(destFilePath));
            }
            console.log("\n--- Next Steps ---\n- Luo docs/pdf/".concat(citySlug, "_pdf.md manuaalisesti tai k\u00E4yt\u00E4 'replace' toolia.\n- Lis\u00E4\u00E4 kaupunkikortti src/routes/espanja/+page.svelte tiedostoon manuaalisesti tai k\u00E4yt\u00E4 'replace' toolia.\n- P\u00E4ivit\u00E4 affiliate-linkit oikeiksi tiedostossa src/lib/affiliates/links.ts manuaalisesti tai k\u00E4yt\u00E4 'replace' toolia.\n- T\u00E4yt\u00E4 sivusis\u00E4ll\u00F6t (src/routes/espanja/").concat(citySlug, "/**/*.svelte) PDF:n mukaisesti.\n- Aja docs/QA_CITY_CHECKLIST.md l\u00E4pi.\n- Varmista \"cross-city\" linkitykset (esim. p\u00E4iv\u00E4retket-sivulta muihin kaupunkeihin).\n- Aja 'npm run check && npm run build' varmistaaksesi tyyppiturvallisuuden ja toimivuuden.\n------------------"));
            return [2 /*return*/];
        });
    });
}
