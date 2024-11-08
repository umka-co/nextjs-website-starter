// Helper to read object's properties as obj['name']
export type ObjectPropByName<T = unknown> = Record<string, T>;

// Props for Pictures, Screenshots, etc.
export interface PictureProps extends Partial<HTMLImageElement> {
  alt?: string;
  src: string;
}
