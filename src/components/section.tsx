/* Bölüm başlıkları ve altındaki 2px kural tüm sitede aynı görünür. */
export default function Section({
  title,
  aside,
  children,
}: {
  title: string
  aside?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="mb-16">
      <div className="border-border mb-6 flex items-baseline justify-between gap-4 border-b-2 pb-3">
        <h2 className="font-heading text-xl sm:text-2xl">{title}</h2>
        {aside}
      </div>

      {children}
    </section>
  )
}
