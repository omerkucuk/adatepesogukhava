import {
  Apple,
  Beef,
  BellRing,
  Container,
  DoorOpen,
  FileCheck2,
  Fish,
  Milk,
  Pill,
  Ship,
  Snowflake,
  Sprout,
  ThermometerSnowflake,
  Truck,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import type { IconMap } from "@/types/content";

/** İçerik dosyalarındaki string ikon anahtarlarını Lucide bileşenlerine eşler. */
export const ICONS: IconMap = {
  snowflake: Snowflake,
  truck: Truck,
  container: Container,
  zap: Zap,
  fish: Fish,
  apple: Apple,
  milk: Milk,
  beef: Beef,
  pill: Pill,
  utensils: UtensilsCrossed,
  ship: Ship,
  sprout: Sprout,
  thermometer: ThermometerSnowflake,
  door: DoorOpen,
  bell: BellRing,
  "file-check": FileCheck2,
};
