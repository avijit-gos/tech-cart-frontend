/** @format */

export type BannerStatus = "Active" | "Inactive" | "Pending" | "Delete";

export interface IBanner {
  _id: string;
  image: string;
  link?: string;
  status: BannerStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
