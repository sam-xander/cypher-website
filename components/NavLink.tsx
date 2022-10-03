import Link from "next/link";

export function NavLink({ href, className = "", children }) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
