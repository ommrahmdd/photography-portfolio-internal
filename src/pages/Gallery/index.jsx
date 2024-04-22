import ImagesList from "../../components/gallery/ImagesList";
import UploadImageSection from "../../components/gallery/UploadImageSection";
import { usePermissions } from "../../hooks/usePermissions";

export default function Gallery() {
  const { canCreate } = usePermissions();

  return (
    <div>
      {canCreate && <UploadImageSection />}
      <div className="max-h-full overflow-y-auto">
        <ImagesList />
      </div>
    </div>
  );
}
