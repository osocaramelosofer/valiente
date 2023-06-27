
export interface CatalogItem {
  // Class properties
  id?: number | null;
  title?: string | null;
  route?: string | null;
  available?: boolean | null;
  price?: number | null;
}



export class CatalogItem implements CatalogItem  {
  // Class properties
  id?: number | null = 0;
  title?: string | null = null;
  route?: string | null;
}

