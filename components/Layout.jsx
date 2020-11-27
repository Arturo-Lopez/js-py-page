import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "dark" : ""}>
      <header>
        <Image src="/logo.png" width="100%" height="100%" />
        <nav>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
          <label htmlFor="check-dark">
            Dark
            <input
              type="checkbox"
              id="check-dark"
              checked={dark}
              onChange={() => setDark((prev) => !prev)}
            />
          </label>
        </nav>
      </header>
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
