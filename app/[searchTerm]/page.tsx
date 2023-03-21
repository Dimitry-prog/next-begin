import getWikiResults from "@/lib/getWikiResults";
import Item from "@/app/[searchTerm]/components/Item";

type SearchResultsProps = {
  params: {
    searchTerm: string,
  }

};

export const generateMetadata = async ({params}: SearchResultsProps) => {
  const wikiData: Promise<ISearchResult> = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const displayTerm = params.searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

const SearchResults = async ({params}: SearchResultsProps) => {
  const wikiData: Promise<ISearchResult> = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const results: IResult[] | undefined = data?.query?.pages;

  return (
    <main className="max-w-lg min-h-screen py-1 mx-auto bg-slate-200">
      {
        results
          ? Object.values(results).map((result) => (
            <Item result={result} key={result.pageid}/>
          ))
          : <h2 className="p-2 text-xl">{`${params.searchTerm} Not Found`}</h2>
      }
    </main>
  );
};

export default SearchResults;