import ImagesList from "../../components/gallery/ImagesList";
import UploadImageSection from "../../components/gallery/UploadImageSection";

export default function Gallery() {
  return (
    <div>
      <UploadImageSection />
      <div className="max-h-full overflow-y-auto">
        <ImagesList />
      </div>
    </div>
  );
}
