
import Link from 'next/link';

  
// Import the videos JSON data
import NotFound from '@/app/not-found'; // Import the not-found page component
import videosdict from '@/data/videosdict.json'; // Import the JSON file
import linksdict from '@/data/linksdict.json'; // Import the JSON file
  // Type assertion here to tell TypeScript the shape of the dictionary
  const videos: VideoDictionary = videosdict;
// Define a type for the dictionary
type VideoDictionary = {
  [key: string]: string; // Allows any string as a key and the value will be a string
};  

  // Type assertion here to tell TypeScript the shape of the dictionary
  const links: LinksDictionary = linksdict;
// Define a type for the dictionary
type LinksDictionary = {
  [key: string]: string; // Allows any string as a key and the value will be a string
}; 
  interface PageProps {
    params: {
      slug: string;
    };
  }
  
  export default function Page({ params }: PageProps) {
    const { slug } = params;
  
    // Check if the slug exists in the videos dictionary
    const content = videos[slug];
    const content2 = links[slug];
  
    // If content exists for the slug, display it; otherwise, show the NotFound component
    if (content) {
      return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Responsive Iframe */}
        <div className="flex-1 rounded-2xl bg-muted/50">
              <iframe
    src={content}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full h-full rounded-2xl aspect-video"
  ></iframe>
        </div>
        </div>
      );
    } else if (content2) {
      return <Link href={content2} target="_blank" rel="noopener noreferrer">{content2}</Link>;
    } else {
      return <NotFound />;
    }
  }
  