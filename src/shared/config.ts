export class Config {
  public static rootUrl: string = process.env.NEXT_PUBLIC_URL ?? "";
  public static imageUrl: string = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";
}
