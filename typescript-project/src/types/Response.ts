import News from "./News";

interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: News[];
}

export default Response;
