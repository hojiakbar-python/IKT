import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function ErrorState({
  title,
  description,
  actionLabel = "Qayta urinish",
  onAction
}: ErrorStateProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-10 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Button className="mt-6" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}
