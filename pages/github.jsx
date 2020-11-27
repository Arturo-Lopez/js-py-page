import React from "react";
import Layout from "../components/Layout";

const Github = ({ stars, forks, watchers }) => {
  return (
    <Layout>
      <h1>Github Info</h1>

      <p className="info">{stars} ⭐</p>
      <p className="info">{forks} 🍴</p>
      <p className="info">{watchers} 👀</p>

      <p className="center">
        Link al{" "}
        <a href="https://github.com/Arturo-Lopez/js-py-page" target="__blank">
          Github
        </a>{" "}
        del proyecto
      </p>

      <blockquote>
        Esta pagina fue generada de forma estatica utilizando{" "}
        <code>Incemental Static Regeneration</code> de{" "}
        <a href="http://nextjs.org" target="__blank">
          Netxj.js
        </a>
        , al alterar los datos del repositorio esta pagina se volvera a generar
        en el fondo
      </blockquote>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/repos/Arturo-Lopez/js-py-page"
  );

  const repository = await res.json();

  return {
    props: {
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      watchers: repository.watchers_count,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 6 seconds
    revalidate: 6, // In seconds
  };
}

export default Github;
