export interface BlogsResponse {
  metadata: Metadata;
  sys: ImageSys;
  fields: Blog;
}

export interface Blog {
  date: string;
  heading: string;
  image: FieldsImage;
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
  marks: Mark[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface Mark {
  type: string;
}

export interface FieldsImage {
  metadata: Metadata;
  sys: ImageSys;
  fields: ImageFields;
}

export interface ImageFields {
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
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface ImageSys {
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
