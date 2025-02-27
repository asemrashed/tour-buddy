export default function RatingBar({ label, value }) {
  return (
    <div className="flex w-full gap-1 text-[14px]">
      <span className="w-32 text-gray-700">{label}</span>
      <div className="flex-1 bg-gray-300 w-full rounded-full h-1 relative overflow-hidden">
        <div
          className={`bg-[#FFDA32] h-full rounded-full absolute left-0 top-0`}
          style={{ width: `${(value / 5) * 100}%` }}
        ></div>
      </div>
      <span className="text-gray-700 w-6 text-right">{value}</span>
    </div>
  );
}
