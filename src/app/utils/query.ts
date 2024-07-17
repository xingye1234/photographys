import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";

export const useFetchQuery = (key: any, url: string, data?: any, method: string = "GET") => {
    let fetchs: any;

    if (method === "GET") {
        fetchs = fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('ph-token') || ''
            }
        }).then(res => res.json()).then(res => {
            if (res.code === 200) {
                return res.data
            }
        }).catch((err) => {
            console.log(err);
        })
    } else {
        fetchs = fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('ph-token') || ''
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {
            if (res.code === 200) {
                return res.data
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return useQuery(key, fetchs)
}