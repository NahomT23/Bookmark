import React from "react";
import { FiBookmark, FiEdit, FiTrash } from "react-icons/fi";
import { Bookmark } from "../types";

interface BookmarkCardProps {
  bookmark: Bookmark;
  onEdit: (bookmark: Bookmark) => void;
  onDelete: (id: string) => void;
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  bookmark,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
        <FiBookmark className="text-blue-500" />
        {bookmark.title}
      </h3>
      <div>
        {bookmark.previewImage ? (
          <img src={bookmark.previewImage} alt="Bookmark preview" className="w-full h-32 object-cover rounded-lg" />
        ) : (
          <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">
            No preview image
          </div>
        )}
      </div>
      <a className="text-gray-600 mb-2 break-words cursor-pointer">{bookmark.link}</a>
      <p className="text-sm text-gray-500">{bookmark.description}</p>

      <div className="absolute bottom-2 right-2 flex gap-2">
        <FiEdit
          className="text-blue-500 cursor-pointer"
          size={20}
          onClick={() => onEdit(bookmark)}
        />
        <FiTrash
          className="text-red-500 cursor-pointer"
          size={20}
          onClick={() => onDelete(bookmark.id)}
        />
      </div>
    </div>
  );
};


