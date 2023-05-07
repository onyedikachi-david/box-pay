import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ButtonPrimary = ({ link, children, addClass, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }

    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
      onClick={handleClick}
    >
      {link ? (
        <Link href={link}>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonPrimary;
