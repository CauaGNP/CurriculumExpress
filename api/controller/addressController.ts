import { createAddressSevice, deleteAdddressByIdService, getAddressbyIdService, getAllAddressService, updateAddressByIdService } from "@/service/addressService";
import type { Request, Response } from "express";

const getAllAddress = async (req: Request, res: Response) => {
    try {
        const address = await getAllAddressService();

        res.status(200).send({
            message: "Request sucessfuly",
            data: address,
        })
    } catch (error) {
       console.error(error);

        res.status(500).send({
        message: "Server error",
        }); 
    }
}

const getAddressById = async (req: Request, res: Response) => {
    try {
        const { addressId } = req.params;

        if(!addressId){
            return res.status(400).send({
            message: "Please provide addressId",
         });
        }

        const address = await getAddressbyIdService(addressId);

        if(!address){
            return res.status(404).send({
                message: "Address not found"
            })
        }

        res.status(200).send({
            message: "Request sucessfully, address found",
            data: address,
        })

    } catch (error) {
        console.error(error);

        res.status(500).send({
        message: "Server error",
        }); 
    }
}

const createAddress = async (req: Request, res: Response) => {
    try {
        const addressData = await createAddressSevice(req.body);

        res.status(201).send({
            message: "Create address",
            data: addressData
        })

    } catch (error) {
        console.error(error);

        res.status(500).send({
        message: "Server error",
        });     
    }
}

const updateAddressById = async (req: Request, res: Response) => {
    try {
        const { addressId } = req.params;
        
        if(!addressId){
            return res.status(400).send({
            message: "Please provide addressId",
         });
        }

        await updateAddressByIdService(addressId, req.body);

        res.status(204).send();
    } catch (error) {
        console.error(error);

        res.status(500).send({
        message: "Server error",
        });  
    }
}

const deleteAddressById = async (req: Request, res: Response) => {
    try {
        const { addressId } = req.params;
        
        if(!addressId){
            return res.status(400).send({
            message: "Please provide addressId",
         });
        }

        await deleteAdddressByIdService(addressId);

        res.status(200).send({
            message : "Delete address sucessfully"
        })
    } catch (error) {
        console.error(error);

        res.status(500).send({
        message: "Server error",
        });  
    }
}

export {getAddressById,getAllAddress,createAddress,updateAddressById,deleteAddressById}