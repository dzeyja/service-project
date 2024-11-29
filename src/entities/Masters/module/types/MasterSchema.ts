export interface Master {
    id: number
    name: string
    description: string
    img: string
}

export interface MasterSchema {
    masters: Master[]
    isLoading: boolean
}