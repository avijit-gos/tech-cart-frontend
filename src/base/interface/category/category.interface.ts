/** @format */

export type CategoryStatus = "Active" | "Inactive" | "Pending" | "Delete";

export interface ICategory {
  _id: string;
  image: string;
  name: string;
  link?: string;
  position: number;
  status: CategoryStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
