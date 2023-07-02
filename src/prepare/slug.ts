export const slugify = (title: string, meta: Record<string, any>) =>
  (meta.slug || meta.Slug || title)
    .replace(/ /g, '-')
    .replace(/_/g, '-')
    .toLowerCase()
