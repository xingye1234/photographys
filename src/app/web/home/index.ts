import {GET} from "@/app/utils/request";


export const getBannerImages = () => {
    return GET('/api/home/banner')
}