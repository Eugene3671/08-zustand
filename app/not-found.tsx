import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page Not Found | NoteHub",
  description: "The page you are looking for does not exist on NoteHub.",
  openGraph: {
    title: "Page Not Found | NoteHub",
    description: "The page you are looking for does not exist on NoteHub.",
    url: "https://08-zustand-gamma-henna.vercel.app/not-found",
    images: [
      {
        url: "https://stories.freepiklabs.com/storage/13391/355-404-Error_Artboard-1.svg",
        width: 1200,
        height: 630,
        alt: "404 Page Not Found",
      },
    ],
  },
};
const NotFound = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};
export default NotFound;
