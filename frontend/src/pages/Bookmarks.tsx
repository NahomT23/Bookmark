import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { BookmarkCard } from ".././_components/BookmarkCard";
import { BookmarkDialog } from ".././_components/BookmarkDialog";
import { useBookmarks } from "../hooks/useBookmarks"
import { Bookmark } from "@/types";

const Bookmarks: React.FC = () => {
  const { bookmarks, error, saveBookmark, deleteBookmark } = useBookmarks();
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2 justify-center mt-4">
        <FiBookmark className="text-blue-500" size={24} />
        Your Bookmarks
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!error && bookmarks.length === 0 && <p>No bookmarks available.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.id}
            bookmark={bookmark}
            onEdit={setEditingBookmark}
            onDelete={deleteBookmark}
          />
        ))}
      </div>

      <BookmarkDialog
        editingBookmark={editingBookmark}
        onSave={saveBookmark}
      >
        <Button variant="outline" className="mt-4">
          {editingBookmark ? "Edit Bookmark" : "Create a Bookmark"}
        </Button>
      </BookmarkDialog>
    </div>
  );
};

export default Bookmarks;



