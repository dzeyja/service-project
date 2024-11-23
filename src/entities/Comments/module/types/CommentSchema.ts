export interface Comment {
    id: string
    text: string
    masterId: number
}

export interface CommentSchema {
    comments: Comment[]
    isLoading: boolean
    error?: string
}
