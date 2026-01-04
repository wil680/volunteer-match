import "./card.css";
import type { OpportunitiesType } from "../../api";
export default function Card({ data }: { data: OpportunitiesType }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="role">{data.title}</h2>
        <div className="info">
          <p>
            {data.organization.name} · {data.duration}
          </p>
        </div>
        <p className="description">{data.description}</p>
      </div>
      <button className="apply">Apply here</button>
    </div>
  );
}
