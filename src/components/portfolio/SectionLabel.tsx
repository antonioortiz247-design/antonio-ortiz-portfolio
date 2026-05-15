export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="font-mono text-primary">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span>{children}</span>
    </div>
  );
}
