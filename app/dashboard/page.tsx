export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Responsive Iframe */}
      <div className="flex-1 rounded-2xl bg-muted/50">
  <iframe
    src="https://www.youtube.com/embed/videoseries?si=lt0jPseqlIHuTujY&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full h-full rounded-2xl aspect-video"
  ></iframe>
</div>

    </div>
  );
}
