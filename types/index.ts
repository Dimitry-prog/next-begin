type IResult = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: ThumbnailResult;
}

type ThumbnailResult = {
  source: string;
  width: number;
  height: number;
}

type ISearchResult = {
  query?: {
    pages?: IResult[];
  }
}