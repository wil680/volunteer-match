import "./filter.css";

export default function Filter() {
  return (
    <div className="filter">
      
      <select className="time-dropdown">
        <option value="">Duration</option>
        <option value="one-time">One-time</option>
        <option value="long-term">Long-term</option>
        <option value="flexible">Flexible</option>
      </select>
    </div>
  );
}
