export function renderMarkdownHeadingLink(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
  const match = text.match(linkRegex);

  if (match) {
    const [fullMatch, linkText, url] = match;
    return (
      <>
        {text.slice(0, match.index)}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold decoration-1 underline-offset-4"
        >
          {linkText}
        </a>
        {text.slice(match.index! + fullMatch.length)}
      </>
    );
  }

  return text;
}
