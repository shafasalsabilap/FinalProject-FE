import axios from "axios"

export type ResponseUser = {
    display_name: string
    followers: Followers
    href: string
    id: string
    images: Image[]
    type: string
    uri: string
}

export interface Followers {
    href: any
    total: number
}

export interface Image {
    height: any
    url: string
    width: any
}

export const fetchUserAPI = async (accessToken: string): Promise<ResponseUser> => {
    const header = {
        Authorization: `Bearer ${accessToken}`
    }
    const data = await axios
        .get(
            `https://api.spotify.com/v1/me`,
            {
                headers: header
            }
        )
        .catch((error) => error)
        
    return data.data;
}
