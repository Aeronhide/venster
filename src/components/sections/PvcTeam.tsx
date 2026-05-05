"use client";

import { Team } from "@/components/sections/Team";
import { useT } from "@/components/LanguageProvider";

export function PvcTeam() {
  const t = useT();
  return <Team title={t.pvcRamen.team.title} subtitle={t.pvcRamen.team.subtitle} />;
}
