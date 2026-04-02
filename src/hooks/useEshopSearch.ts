"use client";

import { useState, useEffect } from "react";
import type { EshopResult } from "@/types/plants";

interface EshopSearchState {
  loading: boolean;
  results: EshopResult[];
  error: string | null;
}

export function useEshopSearch(query: string | undefined): EshopSearchState {
  const [state, setState] = useState<EshopSearchState>({
    loading: false,
    results: [],
    error: null,
  });

  useEffect(() => {
    if (!query) {
      setState({ loading: false, results: [], error: null });
      return;
    }

    let cancelled = false;
    setState({ loading: true, results: [], error: null });

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ loading: false, results: data.results ?? [], error: null });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, results: [], error: err.message });
      });

    return () => { cancelled = true; };
  }, [query]);

  return state;
}
