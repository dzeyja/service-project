export {
    CommentSchema,
    Comment
} from './module/types/CommentSchema'

export {
    commentReducer,
    commentActions
} from './module/slice/commentSlice'

export {
    getComment
} from './module/services/getComments'

export {
    getCom
} from './module/selectors/getCom/getCom'