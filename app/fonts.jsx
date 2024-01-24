import { Roboto, Tangerine, Italianno } from "next/font/google";


export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});
export const italianno = Italianno({
    subsets: ["latin"],
    weight: "400"
});
export const tangerine = Tangerine({
    subsets: ["latin"],
    weight: ["400", "700"]
});