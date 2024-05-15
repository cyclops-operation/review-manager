import { Metadata } from "next"

import ChatDesign from "./src/ui/chat-design"

export const metadata: Metadata = {
  title: "Review Manager",
  description: "The helper for upgrade your working process",
}

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-4 py-20">
      <ChatDesign />
    </main>
  )
}
