import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { BookmarkFormProps } from "../types";

export const BookmarkForm: React.FC<BookmarkFormProps> = ({
  title,
  link,
  description,
  onSubmit,
  onTitleChange,
  onLinkChange,
  onDescriptionChange,
  isEditing,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <div>
          <DialogTitle>Title</DialogTitle>
          <Input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="mt-2"
          />
        </div>
        <div>
          <label className="block font-medium">Link</label>
          <Input
            type="text"
            value={link}
            onChange={(e) => onLinkChange(e.target.value)}
            className="mt-2"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <Textarea
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="mt-2"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" variant="outline" className="mt-4">
          {isEditing ? "Save Changes" : "Create"}
        </Button>
        <DialogClose asChild>
          <Button variant="secondary" className="mt-4">
            Cancel
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
};