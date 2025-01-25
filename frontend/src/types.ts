export interface Bookmark {
    description: string;
    link: string;
    id: string;
    title: string;
    previewImage?: string;
  }
  
  export interface BookmarkFormProps {
    title: string;
    link: string;
    description: string;
    onSubmit: (e: React.FormEvent) => void;
    onTitleChange: (value: string) => void;
    onLinkChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
    isEditing: boolean;
  }
  
  export interface BookmarkCardProps {
    bookmark: Bookmark;
    onEdit: (bookmark: Bookmark) => void;
    onDelete: (id: string) => void;
  }