// Blog utilities are intentionally disabled for this project.
// This repo is a single-purpose marketing landing page (logic.exe).
// Keeping this module prevents import breakage from upstream components,
// while ensuring `astro check` passes without content collections.

export type Post = {
  slug?: string;
  title?: string;
  excerpt?: string;
  publishDate?: Date;
  updateDate?: Date;
  draft?: boolean;
  tags?: string[];
  category?: string;
  author?: string;
};

export const getAllPosts = async (): Promise<Post[]> => [];
export const getLatestPosts = async (_limit = 0): Promise<Post[]> => [];
export const getRelatedPosts = async (_slug: string, _limit = 0): Promise<Post[]> => [];
