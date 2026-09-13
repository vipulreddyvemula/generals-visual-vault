import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "GENERALS" }, { name: "description", content: "Enter the world of GENERALS." }, { property: "og:title", content: "GENERALS" }, { property: "og:description", content: "Enter the world of GENERALS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => {
    throw redirect({ to: "/home", replace: true });
  },
});
