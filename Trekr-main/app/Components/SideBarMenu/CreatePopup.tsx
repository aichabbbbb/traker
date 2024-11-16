"use client";
import { useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./SideBarMenu.module.css";
import baseURL from "@/app/utils/baseUrl";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles: File[] = [];
      const previews: string[] = [];

      selectedFiles.forEach((file) => {
        const fileType = file.type;
        const fileSizeMB = file.size / (1024 * 1024);

        // Define allowed image and video types
        const allowedImageTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
        const isImage = allowedImageTypes.includes(fileType);
        const isVideo = fileType === "video/mp4";

        if ((isImage || isVideo) && fileSizeMB <= 1) {
          validFiles.push(file);
          previews.push(URL.createObjectURL(file));
        } else {
          alert(
            "Invalid file type. Only JPG, JPEG, PNG, GIF images and MP4 videos are allowed. 1MB size limit."
          );
        }
      });

      setPreviewFiles((prev) => [...prev, ...previews]);
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleCancelFile = (index: number) => {
    setPreviewFiles((prev) => prev.filter((_, i) => i !== index));
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePublish = async () => {
    if (files.length === 0) return;

    setLoading(true);

    try {
      const accessToken =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

      if (!accessToken) {
        console.log("No access token found.");
        return;
      }

      const formData = new FormData();
      files.forEach((file) => {
        formData.append("mediaFiles", file);
      });
      formData.append("content", "post");

      const response = await axios.post(
        `${baseURL}/api/posts/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Uploaded files:", response.data);
      setFiles([]);
      setPreviewFiles([]);
      onClose();
    } catch (error) {
      console.error("Error uploading files:", error);
      if(error){
        alert(
          "Make sure you add only JPG, JPEG, PNG, GIF images and MP4 videos are allowed. 1MB size limit."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <>
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup_header}>
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
          <h5>Créer une nouvelle publication</h5>
        </div>
        <div className={styles.popup_body}>
          {previewFiles.length > 0 ? (
            <div className={styles.slides_container}>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
              >
                {previewFiles.map((file, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.imageWrapper}>
                      {files[index].type.includes("video") ? (
                        <video
                          src={file}
                          controls
                          className={styles.previewMedia}
                        />
                      ) : (
                        <img
                          src={file}
                          alt={`Upload ${index}`}
                          className={styles.previewMedia}
                        />
                      )}
                      <button
                        className={styles.cancelButton}
                        onClick={() => handleCancelFile(index)}
                      >
                        X
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperSlide>
                  <div className={styles.publishWrapper}>
                    <button
                      className={styles.publishButton}
                      onClick={handlePublish}
                      disabled={loading}
                    >
                      {loading ? "Publication..." : "Publier"}
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className={styles.placeholder}>
              <img
                src="/Assets/fake_image.png"
                alt="preview image"
              />
              <p>Aucune image ou vidéo sélectionnée</p>
            </div>
          )}
          <div className={styles.input_files}>
            <button
              type="button"
              className={styles.customButton}
              onClick={triggerFileInput}
            >
              Sélectionner depuis l&apos;ordinateur
            </button>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif,image/jpg,video/mp4"
              multiple
              onChange={handleFileChange}
              className={styles.fileInput}
              ref={fileInputRef}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreatePopup;
