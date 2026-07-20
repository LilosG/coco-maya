import { getCollection, getEntry } from "astro:content";

export async function getSingleton(collection: string): Promise<any> {
  const entry = await (getEntry as any)(collection, "singleton");
  if (!entry) throw new Error(`Missing singleton content entry: ${collection}`);
  return entry.data as Record<string, any>;
}

export async function getOrderedCollection(collection: string): Promise<any[]> {
  const entries = await (getCollection as any)(collection) as any[];
  return entries
    .sort((a, b) => ((a.data as any).order ?? 0) - ((b.data as any).order ?? 0))
    .map((entry) => entry.data as Record<string, any>);
}

export function resolveSiteTokens<T>(value: T, site: any): T {
  const tokens: Record<string, string> = {
    street: site.address.street,
    email: site.email,
    mapsUrl: site.address.mapsUrl,
    phone: site.phone.display,
    openDaily: site.serviceMessaging.openDaily,
    openDailyLower: site.serviceMessaging.openDailyLower,
    openDailyInline: site.serviceMessaging.openDailyInline,
    brunchDailyUntil3: site.serviceMessaging.brunchDailyUntil3,
    generalHoursFaq: site.serviceMessaging.generalHoursFaq,
    brunchHoursFaq: site.serviceMessaging.brunchHoursFaq,
    dinnerHoursFaq: site.serviceMessaging.dinnerHoursFaq,
  };
  if (typeof value === "string") {
    return Object.entries(tokens).reduce<string>(
      (text, [key, replacement]) => text.replaceAll(`{{${key}}}`, replacement),
      value,
    ) as T;
  }
  if (Array.isArray(value)) return value.map((item) => resolveSiteTokens(item, site)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, resolveSiteTokens(item, site)]),
    ) as T;
  }
  return value;
}
