declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"events": {
"stupid-hackathon-1.md": {
  id: "stupid-hackathon-1.md",
  slug: "stupid-hackathon-1",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"stupid-hackathon-2.md": {
  id: "stupid-hackathon-2.md",
  slug: "stupid-hackathon-2",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"stupid-hackathon-3.md": {
  id: "stupid-hackathon-3.md",
  slug: "stupid-hackathon-3",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"stupid-hackathon-4.md": {
  id: "stupid-hackathon-4.md",
  slug: "stupid-hackathon-4",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"stupid-hackathon-5.md": {
  id: "stupid-hackathon-5.md",
  slug: "stupid-hackathon-5",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
"stupid-hackathon-6.md": {
  id: "stupid-hackathon-6.md",
  slug: "stupid-hackathon-6",
  body: string,
  collection: "events",
  data: InferEntrySchema<"events">
},
},
"talks": {
"bkk-web-106.md": {
  id: "bkk-web-106.md",
  slug: "bkk-web-106",
  body: string,
  collection: "talks",
  data: InferEntrySchema<"talks">
},
"codemania-111.md": {
  id: "codemania-111.md",
  slug: "codemania-111",
  body: string,
  collection: "talks",
  data: InferEntrySchema<"talks">
},
"react-bangkok-3.md": {
  id: "react-bangkok-3.md",
  slug: "react-bangkok-3",
  body: string,
  collection: "talks",
  data: InferEntrySchema<"talks">
},
"tedx-youth-bangkok.md": {
  id: "tedx-youth-bangkok.md",
  slug: "tedx-youth-bangkok",
  body: string,
  collection: "talks",
  data: InferEntrySchema<"talks">
},
"tencent-thailand-open-house.md": {
  id: "tencent-thailand-open-house.md",
  slug: "tencent-thailand-open-house",
  body: string,
  collection: "talks",
  data: InferEntrySchema<"talks">
},
},

	};

	type ContentConfig = typeof import("./config");
}
