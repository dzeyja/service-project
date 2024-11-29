export interface Comment {
    id: string
    text: string
    masterId: number
    username?: string
}

export interface CommentSchema {
    comments: Comment[]
    isLoading: boolean
    error?: string
}
