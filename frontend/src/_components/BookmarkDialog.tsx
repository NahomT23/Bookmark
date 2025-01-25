import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { BookmarkForm } from ".././_components/BookMarkFrom";
import { Bookmark } from "../types";

interface BookmarkDialogProps {
  editingBookmark: Bookmark | null;
  onSave: (bookmark: Omit<Bookmark, "id" | "previewImage">, id?: string) => void;
  children: React.ReactNode;
}

export const BookmarkDialog: React.FC<BookmarkDialogProps> = ({
  editingBookmark,
  onSave,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(editingBookmark?.title || "");
  const [link, setLink] = useState(editingBookmark?.link || "");
  const [description, setDescription] = useState(editingBookmark?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, link, description }, editingBookmark?.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-2xl font-semibold">
            {editingBookmark ? "Edit Bookmark" : "Create a Bookmark"}
          </h2>
        </DialogHeader>
        <BookmarkForm
          title={title}
          link={link}
          description={description}
          onSubmit={handleSubmit}
          onTitleChange={setTitle}
          onLinkChange={setLink}
          onDescriptionChange={setDescription}
          isEditing={!!editingBookmark}
        />
      </DialogContent>
    </Dialog>
  );
};