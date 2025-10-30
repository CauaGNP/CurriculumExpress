import { eq } from "drizzle-orm";
import { v4 as uuidV4 } from "uuid";
import { database } from "../db/index.js";
import { addressTable } from "../db/schema/index.js";
import type { AddressDTO } from "../DTO/addressDTO.js";

const getAllAddressService = async () => {
  return await database.query.addressTable.findMany();
};

const getAddressbyIdService = async (addressId: string) => {
  return await database.query.addressTable.findFirst({
    where: eq(addressTable.id, addressId),
  });
};

const createAddressSevice = async (data: AddressDTO) => {
  const addressData = {
    id: uuidV4(),
    state: data.state,
    city: data.city,
    user_id: data.user_id,
  };

  return await database.insert(addressTable).values(addressData).returning();
};

const updateAddressByIdService = async (
  addressId: string,
  data: Partial<AddressDTO>
) => {
  await database
    .update(addressTable)
    .set(data)
    .where(eq(addressTable.id, addressId));
  return;
};

const deleteAdddressByIdService = async (addressId: string) => {
  return await database
    .delete(addressTable)
    .where(eq(addressTable.id, addressId));
};

export {
  createAddressSevice,
  deleteAdddressByIdService,
  getAddressbyIdService,
  getAllAddressService,
  updateAddressByIdService,
};
