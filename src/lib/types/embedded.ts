export interface EmbeddedAsset {
  nodeType: string;
  content: any[];
  data: Data;
}

export interface Data {
  target: Target;
}

export interface Target {
  metadata: Metadata;
  sys: TargetSys;
  fields: Fields;
}

export interface Fields {
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

export interface TargetSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}
