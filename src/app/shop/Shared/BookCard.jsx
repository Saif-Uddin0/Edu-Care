
import Image from "next/image";
import { Star } from "lucide-react";

export default function BookCard({ book }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">

            {/* Author Badge */}
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {book.author}
            </span>

            {/* Book Image */}
            <div className="flex justify-center py-5">
                <img
                    src={book.image}
                    alt={book.title}
                    width={140}
                    height={180}
                    className="rounded-md object-cover"
                />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                {book.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}

                <span className="text-gray-500 text-xs ml-1">
                    ({book.reviews} Reviews)
                </span>
            </div>

            {/* Prices */}
            <div className="mt-4">
                <p className="text-gray-400 line-through text-sm">${book.oldPrice}</p>
                <p className="text-[#00A95C] text-lg font-bold">${book.newPrice}</p>
            </div>
        </div>
    );
}
