import React from "react";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <Image src="/logo.png" width="100%" height="100%" />
        <nav>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </nav>
      </header>
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
