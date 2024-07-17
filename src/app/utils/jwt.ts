import jwt from 'jsonwebtoken';

export const createToken = (payload: any) => {
    return jwt.sign(payload, process.env.JWT!);
}