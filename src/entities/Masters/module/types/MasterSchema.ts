export interface Master {
    id: number
    name: string
}

export interface MasterSchema {
    masters: Master[]
    isLoading: boolean
}