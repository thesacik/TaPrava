export function getThumbUrl(url: string | undefined, width: number): string | undefined {
  if (!url) return undefined;

  if (url.includes("thumb.php?")) {
    return url.replace(/[?&]w=\d+/, `&w=${width}`).replace("?&", "?");
  }

  const filePathMatch = url.match(/Special:FilePath\/(.+)$/i);
  if (filePathMatch) {
    return `https://commons.wikimedia.org/w/thumb.php?f=${filePathMatch[1]}&w=${width}`;
  }

  if (url.includes("upload.wikimedia.org")) {
    const thumbMatch = url.match(
      /(upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[a-f0-9]\/[a-f0-9]{2}\/.+?)\/\d+px-/
    );
    if (thumbMatch) {
      const baseName = url.split("/").pop()!.replace(/^\d+px-/, "");
      return `https://${thumbMatch[1]}/${width}px-${baseName}`;
    }

    const fullMatch = url.match(
      /upload\.wikimedia\.org\/wikipedia\/commons\/([a-f0-9]\/[a-f0-9]{2}\/(.+))$/
    );
    if (fullMatch) {
      const [, path, filename] = fullMatch;
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${width}px-${filename}`;
    }
  }

  return url;
}
