import styles from './RatingComponent.module.scss';

/**
 * Rating and Reviews Component
 *
 * Exibe a avaliação média do produto em estrelas, o valor numérico da avaliação e o número total de avaliações.
 *
 * @props {number} props.rating - A avaliação média do produto (ex: 4.5)
 * @props {number} props.countReviews - O número total de avaliações (ex: 120)
 *
 * Exemplo de uso:
 * ```
 * <StarRatingComponent rating={4.5} countReviews={120} />
 * ```
 */
export default function StarRatingComponent({
  rating,
  countReviews,
}: {
  rating: number;
  countReviews: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.ratingContainer} aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      <div className={styles.starsRow}>
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={`full-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${styles.star} ${styles.starFull}`}
          >
            <path d="M10 15l-5.878 3.09L5.64 12.545.763 9.455l6.09-.885L10 2l2.147 6.57 6.09.885-4.877 3.09 1.518 5.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${styles.star} ${styles.starFull}`}
          >
            <path d="M10 15l-5.878 3.09L5.64 12.545.763 9.455l6.09-.885L10 2v13z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={`empty-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${styles.star} ${styles.starEmpty}`}
          >
            <path d="M10 15l-5.878 3.09L5.64 12.545.763 9.455l6.09-.885L10 2l2.147 6.57 6.09.885-4.877 3.09 1.518 5.545z" />
          </svg>
        ))}
      </div>
      <span className={styles.ratingValue}>{rating}</span>
      <span className={styles.reviewsCount}>({countReviews} avaliações)</span>
    </div>
  );
}
