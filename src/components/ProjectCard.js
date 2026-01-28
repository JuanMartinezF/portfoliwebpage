import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  image,
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
      <div className={`thumb ${variant === "alt" ? "alt" : ""}`}>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="btn ghost">Ver detalles</span>
      </div>
    </article>
  );
}
