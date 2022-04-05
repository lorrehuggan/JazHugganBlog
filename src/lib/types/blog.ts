export interface PostResponse {
	total: number;
	skip: number;
	limit: number;
	items: Post[];
	includes: Includes;
}

export interface Includes {
	Asset: Asset[];
}

export interface Asset {
	metadata: Metadata;
	sys: AssetSys;
	fields: AssetFields;
}

export interface AssetFields {
	title: string;
	file: File;
}

export interface File {
	url: string;
	details: Details;
	fileName: string;
	contentType: string;
}

export interface Details {
	size: number;
	image: Image;
}

export interface Image {
	width: number;
	height: number;
}

export interface Metadata {
	tags: any[];
}

export interface AssetSys {
	space: ContentType;
	id: string;
	type: string;
	createdAt: Date;
	updatedAt: Date;
	environment: ContentType;
	revision: number;
	locale: string;
	contentType?: ContentType;
}

export interface ContentType {
	sys: ContentTypeSys;
}

export interface ContentTypeSys {
	id: string;
	type: string;
	linkType: string;
}

export interface Post {
	metadata: Metadata;
	sys: AssetSys;
	fields: ItemFields;
}

export interface ItemFields {
	date: string;
	heading: string;
	image: Asset;
	body: Body;
}

export interface Body {
	data: Data;
	content: BodyContent[];
	nodeType: string;
}

export interface BodyContent {
	data: Data;
	content: ContentContent[];
	nodeType: string;
}

export interface ContentContent {
	data: Data;
	value: string;
	nodeType: string;
}

export interface Data {
	name?: string;
}
