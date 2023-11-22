import { Response } from "express";


export interface IResult{
    message: string,
    status: number,
    payload: null | object
}

export const success = (result: IResult, response: Response)=>{
    response.status(200 || result.status).json(result)
}

export const error = (result: IResult, response: Response)=>{
    response.status(400 || result.status).json(result)
}

