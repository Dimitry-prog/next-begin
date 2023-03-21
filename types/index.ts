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

type SearchResult = {
  query?: {
    pages?: IResult[];
  }
}