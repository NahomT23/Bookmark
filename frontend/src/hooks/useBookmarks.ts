import { useState, useEffect } from "react";
import { Bookmark } from "../types";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchBookmarks = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please sign in.");
      setError("You must sign in to access your bookmarks.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/bookmarks", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        const bookmarksWithImages = await Promise.all(
          data.map(async (bookmark: Bookmark) => {
            try {
              const previewResponse = await fetch(
                `https://api.linkpreview.net?key=99e22b462d5c9656460dfa291dbd6721&q=${bookmark.link}`
              );
              const previewData = await previewResponse.json();
              return { ...bookmark, previewImage: previewData.image };
            } catch (err) {
              console.error("Error fetching preview image for", bookmark.link, err);
              return bookmark;
            }
          })
        );

        setBookmarks(bookmarksWithImages);
        setError(null);
      } else {
        const errorMessage = await response.text();
        console.error("Failed to fetch bookmarks:", errorMessage);
        setError("Failed to fetch bookmarks. Please sign in again.");
      }
    } catch (err) {
      console.error("Error fetching bookmarks:", err);
      setError("An error occurred while fetching bookmarks.");
    }
  };

  const saveBookmark = async (bookmark: Omit<Bookmark, "id" | "previewImage">, id?: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please sign in.");
      setError("You must sign in to save a bookmark.");
      return;
    }

    try {
      const url = id ? `http://localhost:3000/bookmarks/${id}` : "http://localhost:3000/bookmarks";
      const method = id ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookmark),
      });

      if (response.ok) {
        fetchBookmarks();
      } else {
        const errorMessage = await response.text();
        console.error("Failed to save bookmark:", errorMessage);
        setError("Failed to save bookmark. Please try again.");
      }
    } catch (err) {
      console.error("Error saving bookmark:", err);
      setError("An error occurred while saving the bookmark.");
    }
  };

  const deleteBookmark = async (id: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please sign in.");
      setError("You must sign in to delete a bookmark.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/bookmarks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchBookmarks();
      } else {
        const errorMessage = await response.text();
        console.error("Failed to delete bookmark:", errorMessage);
        setError("Failed to delete bookmark. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting bookmark:", err);
      setError("An error occurred while deleting the bookmark.");
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return {
    bookmarks,
    error,
    saveBookmark,
    deleteBookmark,
  };
};