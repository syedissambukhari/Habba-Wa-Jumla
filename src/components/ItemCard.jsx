import { formatPrice } from "../helpers/utils";

function ItemCard({ description, price, image }) {
  return (
    <div className="flex gap-4 border rounded border-[#0B5D51] p-3 m-1">
      <div className="rounded-xl">
        <img className="w-20 h-20" src={image} />
      </div>
      <div>
        <p className="font-sans mb-2 text-sm">{description}</p>
        <span className="font-bold text-[#0B5D51]">{formatPrice(price)}</span>
      </div>
    </div>
  );
}

export default ItemCard;
