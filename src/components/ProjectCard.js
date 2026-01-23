export default function ProjectCard({ title, description, variant = "default" }) {
  return (
    <article className="card">
      <div className={`thumb ${variant === "alt" ? "alt" : ""}`}></div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn ghost" href="#">
          Read more
        </a>
      </div>
    </article>
  );
}
