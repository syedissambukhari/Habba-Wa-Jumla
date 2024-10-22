import React, { useState } from "react";

const OrderReviewPage = () => {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
  };

  return (
    <div className="flex flex-col h-full"> 
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 p-2">
        Leave a Review
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
        <div className="mb-4 w-full mx-auto flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value={5}>⭐️⭐️⭐️⭐️⭐️ 5 Star Rating</option>
            <option value={4}>⭐️⭐️⭐️⭐️ 4 Star Rating</option>
            <option value={3}>⭐️⭐️⭐️ 3 Star Rating</option>
            <option value={2}>⭐️⭐️ 2 Star Rating</option>
            <option value={1}>⭐️ 1 Star Rating</option>
          </select>
        </div>

        <div className="mb-4 w-full mx-auto">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write down your feedback about our product & services"
            className="w-full p-2 border rounded-md h-[152px]"
          />
        </div>

        <button className="mt-auto w-full h-[56px] bg-[#0B5D51] text-white rounded-md text-lg font-bold">
          Publish Review
        </button>
      </form>
    </div>
  );
};

export default OrderReviewPage;
