import { parseISO, format, isValid } from "date-fns";

export default function PostDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  if (!isValid(date)) {
    return <time dateTime={dateString}>Invalid date</time>;
  }
  return <time dateTime={dateString}>{format(date, "MMMM d, yyyy")}</time>;
}