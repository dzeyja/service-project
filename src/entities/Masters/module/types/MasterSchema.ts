export interface Master {
    id: number
    name: string
    description: string
}

export interface MasterSchema {
    masters: Master[]
    isLoading: boolean
}