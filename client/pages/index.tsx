import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Hey! Welcome to my solution!</h1>
        <Link href="/product">Go to the product page</Link>
      </div>
    </main>
  );
}
