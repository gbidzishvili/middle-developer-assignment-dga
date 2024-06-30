export interface Movie {
  id: string;
  image?: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  title: string;
  titleType: string;
  year: number;
  episode?: number;
  season?: number;
}
