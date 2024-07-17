// import { useQuery } from "@tanstack/react-query";

// export const useFetchQuery = (key: string, url: string, data?: any, options?: object, method: string = "GET") => {
//     let fetchs: any;

//     if (method === "GET") {
//         fetchs = fetch(url, {
//             headers: {
//                 'Authorization': 'Bearer ' + localStorage.getItem('ph-token') || ''
//             }
//         }).then(res => res.json())
//     } else {
//         fetchs = fetch(url, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + localStorage.getItem('ph-token') || ''
//             },
//             body: JSON.stringify(data)
//         }).then(res => res.json())
//     }

//     return useQuery(key, fetchs, {
//         ...options,
//         cacheTime: 10
//     })
// }