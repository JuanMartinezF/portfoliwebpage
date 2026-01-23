export default function ProjectCard({
  title,
  description,
  variant = "default",
  onSelect,
}) {
  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.()}
      onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect?.();
      }
      }}
    >
      <div className={`thumb ${variant === "alt" ? "alt" : ""}`}></div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="btn ghost">Ver detalles</span>
      </div>
    </article>
  );
}
