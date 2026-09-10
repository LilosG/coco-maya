export type PromotionFeedOrigin = `https://${string}`;

export interface PromotionConfig {
  feedOrigin: PromotionFeedOrigin;
  venueSlug: string;
}

/**
 * Public promotion-feed settings for this venue.
 *
 * Keep the manager origin here so a future domain migration does not require
 * changes to component logic.
 */
export const PROMOTION_CONFIG = {
  feedOrigin: "https://gph-site-manager.vercel.app",
  venueSlug: "coco-maya",
} as const satisfies PromotionConfig;

export function getPromotionFeedUrl(siteSlug: string): string {
  return new URL(
    `/api/public/promotion/${encodeURIComponent(siteSlug)}`,
    PROMOTION_CONFIG.feedOrigin,
  ).href;
}
