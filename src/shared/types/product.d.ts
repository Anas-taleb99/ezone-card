type TProductDetail = {
  Product: TProduct;
  RelatedProducts: TRelatedProducts[];
};

type TProduct = {
  Caprice: number;
  Code: null;
  CoverImg: string;
  Description: string;
  Id: number;
  IsDiscounted: boolean;
  IsPreOrder: boolean;
  IsVariant: boolean;
  Name: string;
  NoQtySell: string;
  SPrice: number;
  Sku: null;
  StockQuantity: number;
  ProductOptions: TProductOptions[];
  ProductImages: TProductImages[];
};

type TProductImages = {
  Id: number;
  Position: number;
  Src: url;
};

type TProductOptions = {
  CatId: number;
  CatName: string;
  OptId: number;
  Position: number;
  Items: TItem[];
};

type TItem = {
  Id: number;
  BcolorHex: string;
  CatItemId: number;
  FcolorHex: string;
  ItemName: string;
};

type TRelatedProducts = {
  Caprice: string;
  CoverImg: string;
  Id: number;
  IsDiscounted: boolean;
  IsVariant: boolean;
  Name: string;
  NoQtySell: boolean;
  Qty: number;
  Sprice: string;
};
