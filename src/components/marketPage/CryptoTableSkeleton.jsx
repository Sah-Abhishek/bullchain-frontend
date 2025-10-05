
// CryptoTableSkeleton.js
import React from "react";

export default function CryptoTableSkeleton({ rows = 10 }) {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 text-gray-500">#</th>
            <th className="p-3 text-gray-500">NAME</th>
            <th className="p-3 text-gray-500">PRICE</th>
            <th className="p-3 text-gray-500">24H %</th>
            <th className="p-3 text-gray-500">MARKET CAP</th>
            <th className="p-3 text-gray-500">VOLUME (24H)</th>
            <th className="p-3 text-gray-500">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded w-6" />
              </td>
              <td className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                  <div className="h-4 bg-gray-300 rounded w-24" />
                  <div className="h-3 bg-gray-200 rounded w-10" />
                </div>
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded w-16" />
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded w-12" />
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded w-20" />
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded w-20" />
              </td>
              <td className="p-3">
                <div className="h-6 w-16 bg-gray-300 rounded-lg" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
