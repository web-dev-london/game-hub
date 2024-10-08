import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
})

export default usePlatforms;