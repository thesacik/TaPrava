const WIKI_THUMB_STEPS = [20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840];

function snapToWikiStep(width: number): number {
  for (const step of WIKI_THUMB_STEPS) {
    if (step >= width) return step;
  }
  return WIKI_THUMB_STEPS[WIKI_THUMB_STEPS.length - 1];
}

export function getPlantImageUrl(
  obrazek: string | undefined,
  override: string | undefined,
  width: number,
): string | undefined {
  return getThumbUrl(override ?? obrazek, width);
}

export function getThumbUrl(url: string | undefined, width: number): string | undefined {
  if (!url) return undefined;

  if (url.includes("thumb.php?")) {
    const w = snapToWikiStep(width);
    return url.replace(/[?&]w=\d+/, `&w=${w}`).replace("?&", "?");
  }

  const filePathMatch = url.match(/Special:FilePath\/(.+)$/i);
  if (filePathMatch) {
    const w = snapToWikiStep(width);
    return `https://commons.wikimedia.org/w/thumb.php?f=${filePathMatch[1]}&w=${w}`;
  }

  if (url.includes("upload.wikimedia.org")) {
    const w = snapToWikiStep(width);
    const thumbMatch = url.match(
      /(upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[a-f0-9]\/[a-f0-9]{2}\/.+?)\/\d+px-/
    );
    if (thumbMatch) {
      const baseName = url.split("/").pop()!.replace(/^\d+px-/, "");
      return `https://${thumbMatch[1]}/${w}px-${baseName}`;
    }

    const fullMatch = url.match(
      /upload\.wikimedia\.org\/wikipedia\/commons\/([a-f0-9]\/[a-f0-9]{2}\/(.+))$/
    );
    if (fullMatch) {
      const [, path, filename] = fullMatch;
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${w}px-${filename}`;
    }
  }

  return url;
}
