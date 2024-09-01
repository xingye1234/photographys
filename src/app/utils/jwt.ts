import jwt from 'jsonwebtoken';

export const createToken = (payload: any) => {
    return jwt.sign(payload, process.env.JWT!);
}

export const checkToken = (payload: any) => {
    return jwt.verify(payload, process.env.JWT!);
}