import Link from "next/link";
import { useRouter } from "next/router";
import DLayout from "../components/Layout/Dlayout";
// import Code from "./code";

export default function Dashboard() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;
  return <DLayout>{/* <Code /> */}</DLayout>;
}
