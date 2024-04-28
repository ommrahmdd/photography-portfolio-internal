import ImagesList from "../../components/gallery/ImagesList";
import UploadImageSection from "../../components/gallery/UploadImageSection";
import { usePermissions } from "../../hooks/usePermissions";

export default function Gallery() {
  const { canCreate } = usePermissions();

  return (
    <div>
      {canCreate && <UploadImageSection />}
      <div className="max-h-[1000px] overflow-y-auto">
        <ImagesList />
      </div>
    </div>
  );
}
