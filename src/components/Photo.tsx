import type { Service } from '../config/services'

/** Responsive appliance photo: phones download the 480px file, larger screens the 900px one. */
export function Photo({
  s,
  className = '',
  sizes,
  eager = false,
}: {
  s: Service
  className?: string
  sizes: string
  eager?: boolean
}) {
  const small = s.photo.replace('.jpg', '-480.jpg')
  return (
    <img
      src={s.photo}
      srcSet={`${small} 480w, ${s.photo} 900w`}
      sizes={sizes}
      alt={s.alt}
      width={900}
      height={675}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      className={className}
    />
  )
}
