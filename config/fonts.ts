import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const adventSans = localFont({
  src: "./AdventSans-Logo.otf",
  variable: "--font-adventSans",
});

export const lato = localFont({
  src: "./Lato-Regular.ttf",
  variable: "--font-lato",
});

export const openSans = localFont({
  src: "./OpenSans-Regular.ttf",
  variable: "--font-open-sans",
});

export const merriRegular = localFont({
  src: "./Merriweather-Regular.ttf",
  variable: "--font-merri-regular",
});

export const montSerrat = localFont({
  src: "./Montserrat-Regular.ttf",
  variable: "--font-montserrat",
});

export const neonderthaw = localFont({
  src: "./Neonderthaw-Regular.ttf",
  variable: "--font-neonderthaw",
});

export const notoSans = localFont({
  src: "./NotoSans-Regular.ttf",
  variable: "--font-noto-sans",
});

export const poppins = localFont({
  src: "./Poppins-Regular.ttf",
  variable: "--font-poppins",
});

export const ptSans = localFont({
  src: "./PTSans-Regular.ttf",
  variable: "--font-pt-sans",
});

export const ptSerif = localFont({
  src: "./PTSerif-Regular.ttf",
  variable: "--font-pt-serif",
});

export const raleway = localFont({
  src: "./Raleway-Regular.ttf",
  variable: "--font-raleway",
});

export const sacramento = localFont({
  src: "./Sacramento-Regular.ttf",
  variable: "--font-sacramento",
});

export const source4 = localFont({
  src: "./SourceSerif4_36pt-Regular.ttf",
  variable: "--font-source-4",
});

export const sourceSerif4 = localFont({
  src: "./SourceSerif4-Regular.ttf",
  variable: "--font-source-serif-4",
});

export const ubuntu = localFont({
  src: "./Ubuntu-Regular.ttf",
  variable: "--font-ubuntu",
});

export const ubuntuMed = localFont({
  src: "./Ubuntu-Medium.ttf",
  variable: "--font-ubuntu-med",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
