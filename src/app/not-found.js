import Link from "next/link";

export default function Notfound() {
  return (
    <div>
      <h1>This page can not be found</h1>
      <Link href={"/"}> Back To HomePage</Link>
    </div>
  );
}
