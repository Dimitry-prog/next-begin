import Link from "next/link";

type ItemProps = {
  result: IResult;

};

const Item = ({result}: ItemProps) => {
  return (
    <article className="max-w-lg m-4">
      {
        result?.thumbnail?.source
          ? (
            <div className="flex flex-row gap-4">
              <img
                src={result.thumbnail?.source}
                alt={result.title}
                loading="lazy"
                className="h-full"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-lg font-bold">
                  <Link
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.title}
                  </Link>
                </h2>
                <p>{result.extract}</p>
              </div>
            </div>
          )
          : (
            <div className="flex flex-col justify-center">
              <h2>
                <Link
                  href={`https://en.wikipedia.org/?curied=${result.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.title}
                </Link>
              </h2>
              <p>{result.extract}</p>
            </div>
          )
      }
    </article>
  );
};

export default Item;