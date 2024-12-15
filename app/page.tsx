import Link from "next/link";
import { getRecipes } from "./services/recipes";

export default async function Home({ searchParams: { page } }: {
  searchParams: {
    page?: string
  }
}) {

  const { recipes, total, limit } = await getRecipes(page)
  return (
    <main>
      <ul>

        {recipes.map((recpie) =>
          <li key={recpie.id}>{recpie.name}</li>
        )}
      </ul>

      {total !== limit && <Link href={`/?page=${page ? +page + 1 : 2}`} scroll={false}>Show More</Link>}
    </main>
  );
}
