import { Badge } from "@/components/ui/badge";

type PriceBadgeProps = {
  price: number;
  originalPrice?: number;
};

export default function PriceBadge({ price, originalPrice }: PriceBadgeProps) {
  return (
    <div className="text-right">
      <p className="text-lg font-semibold text-foreground">
        {price.toLocaleString("uz-UZ")} so'm
      </p>
      {originalPrice ? (
        <Badge variant="outline" className="mt-1 text-xs">
          {originalPrice.toLocaleString("uz-UZ")} so'm
        </Badge>
      ) : null}
    </div>
  );
}
