'use client'

import BottomPanel from "@/components/BottomPanel";
import Headline from "@/components/Headline";
import { globalTimeline } from "@/lib/animations/globalTimeline";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    globalTimeline.play();
  }, []);

  return (
    <main>
      <Headline />
      <section>
        <BottomPanel />
      </section>
    </main>
  );
}
