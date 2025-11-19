"use client";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Loader from "@/components/Loader";
import { Fullscreen } from "lucide-react";

export default function BooksSection() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);     // <-- loader state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.error("Error loading books:", err);
        setError("Failed to load books.");
      })
      .finally(() => {
        setLoading(false);  // <-- loader stops here
      });
  }, []);

  // 🔄 SHOW LOADER WHILE FETCHING
  if (loading) {
    return (
      <div><Loader size={60} color="#0d9488" fullScreen></Loader></div>
    );
  }

  // ❌ SHOW ERROR IF FAILED
  if (error) {
    return (
      <p className="text-center text-red-500 font-medium py-10">
        {error}
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing 1–12 of {books.length} results
        </p>

        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>Default Sorting</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* 🔽 CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* 🔽 PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">
        <button className="w-10 h-10 border rounded-full">01</button>
        <button className="w-10 h-10 border rounded-full bg-[#00A95C] text-white">
          02
        </button>
        <button className="w-10 h-10 border rounded-full">03</button>
        <button className="w-10 h-10 border rounded-full">→</button>
      </div>

    </div>
  );
}
