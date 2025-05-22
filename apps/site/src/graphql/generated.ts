import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type AddSubscriptionInput = {
  subscription: Scalars['String']['input'];
};

export type AudioResponse = {
  __typename?: 'AudioResponse';
  about: Scalars['String']['output'];
  audioUrl: Scalars['String']['output'];
  coverUrl: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  publicationId: Scalars['String']['output'];
  publicationName: Scalars['String']['output'];
  tegs: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type ChangeAudioInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  audio?: InputMaybe<Scalars['Upload']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  publicationId: Scalars['String']['input'];
  publicationName?: InputMaybe<Scalars['String']['input']>;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ChangeLoginInput = {
  newLogin: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type ChangePhotoInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['Upload']['input']>;
  publicationId: Scalars['String']['input'];
  publicationName?: InputMaybe<Scalars['String']['input']>;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ChangeVideoInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  publicationId: Scalars['String']['input'];
  publicationName?: InputMaybe<Scalars['String']['input']>;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
  video?: InputMaybe<Scalars['Upload']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  publicationId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateCommentInput = {
  comment: Scalars['String']['input'];
  publicationId: Scalars['String']['input'];
};

export type DeleteContentInput = {
  publicationId: Scalars['String']['input'];
};

export type GetAvatarResponse = {
  __typename?: 'GetAvatarResponse';
  avatarUrl: Scalars['String']['output'];
};

export type GetLikedPublicationsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  postsRequest: PostsRequestDto;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetLikesRequestDto = {
  publicationId: Scalars['String']['input'];
};

export type GetLikesResponseDto = {
  __typename?: 'GetLikesResponseDto';
  total: Scalars['Float']['output'];
};

export type GetLoginInput = {
  userId: Scalars['String']['input'];
};

export type GetLoginResponse = {
  __typename?: 'GetLoginResponse';
  login: Scalars['String']['output'];
};

export type GetProfileResponse = {
  __typename?: 'GetProfileResponse';
  about: Scalars['String']['output'];
  avatarUrl: Scalars['String']['output'];
  subscribersCount: Scalars['Float']['output'];
  subscriptions?: Maybe<Array<Scalars['String']['output']>>;
};

export type GetPublicationCommentsInput = {
  publicationId: Scalars['String']['input'];
};

export type GetRandomPublicationsInput = {
  audioCount?: InputMaybe<Scalars['Int']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  photoCount?: InputMaybe<Scalars['Int']['input']>;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
  videoCount?: InputMaybe<Scalars['Int']['input']>;
};

export type GetRecentTopPostsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  postsRequest: PostsRequestDto;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetSubscriptionsPublicationsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  postsRequest: PostsRequestDto;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetUserPublicationsInput = {
  postsRequest: PostsRequestDto;
  tegs?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};

export type LikeRequestDto = {
  publicationId: Scalars['String']['input'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLike: Scalars['Boolean']['output'];
  addSubscription: Scalars['Boolean']['output'];
  changeAudio: Scalars['Boolean']['output'];
  changeLogin: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changePhoto: Scalars['Boolean']['output'];
  changeVideo: Scalars['Boolean']['output'];
  createComment: Scalars['Boolean']['output'];
  deleteAccount: Scalars['Boolean']['output'];
  deleteAudio: Scalars['Boolean']['output'];
  deletePhoto: Scalars['Boolean']['output'];
  deleteVideo: Scalars['Boolean']['output'];
  login: LoginResponse;
  register: RegisterResponse;
  removeLike: Scalars['Boolean']['output'];
  removeSubscription: Scalars['Boolean']['output'];
  updateAbout: Scalars['Boolean']['output'];
  updateAvatar: Scalars['Boolean']['output'];
  uploadAudio: Scalars['Boolean']['output'];
  uploadPhoto: Scalars['Boolean']['output'];
  uploadVideo: Scalars['Boolean']['output'];
};


export type MutationAddLikeArgs = {
  data: LikeRequestDto;
};


export type MutationAddSubscriptionArgs = {
  data: AddSubscriptionInput;
};


export type MutationChangeAudioArgs = {
  changeAudioInput: ChangeAudioInput;
};


export type MutationChangeLoginArgs = {
  data: ChangeLoginInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangePhotoArgs = {
  changePhotoInput: ChangePhotoInput;
};


export type MutationChangeVideoArgs = {
  changeVideoInput: ChangeVideoInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationDeleteAudioArgs = {
  data: DeleteContentInput;
};


export type MutationDeletePhotoArgs = {
  data: DeleteContentInput;
};


export type MutationDeleteVideoArgs = {
  data: DeleteContentInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRemoveLikeArgs = {
  data: LikeRequestDto;
};


export type MutationRemoveSubscriptionArgs = {
  data: RemoveSubscriptionInput;
};


export type MutationUpdateAboutArgs = {
  data: UpdateAboutInput;
};


export type MutationUpdateAvatarArgs = {
  data: UpdateAvatarInput;
};


export type MutationUploadAudioArgs = {
  uploadAudioInput: UploadAudioInput;
};


export type MutationUploadPhotoArgs = {
  uploadPhotoInput: UploadPhotoInput;
};


export type MutationUploadVideoArgs = {
  uploadVideoInput: UploadVideoInput;
};

export type PhotoResponse = {
  __typename?: 'PhotoResponse';
  about: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  publicationId: Scalars['String']['output'];
  publicationName: Scalars['String']['output'];
  tegs: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type PostsRequestDto = {
  end: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

export type PublicationDto = {
  __typename?: 'PublicationDto';
  avatarUrl: Scalars['String']['output'];
  coverUrl: Scalars['String']['output'];
  login: Scalars['String']['output'];
  publicationId: Scalars['String']['output'];
  publicationName: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type PublicationsResponseDto = {
  __typename?: 'PublicationsResponseDto';
  publications: Array<PublicationDto>;
};

export type Query = {
  __typename?: 'Query';
  GetLikedPublications: PublicationsResponseDto;
  GetRandomPublications: PublicationsResponseDto;
  GetRecentTopPosts: PublicationsResponseDto;
  GetSubscriptionsPublications: PublicationsResponseDto;
  GetUserPublications: PublicationsResponseDto;
  getAudio: AudioResponse;
  getAvatar: GetAvatarResponse;
  getLogin: GetLoginResponse;
  getPhoto: PhotoResponse;
  getProfile: GetProfileResponse;
  getTotalLikes: GetLikesResponseDto;
  getVideo: VideoResponse;
};


export type QueryGetLikedPublicationsArgs = {
  input: GetLikedPublicationsInput;
};


export type QueryGetRandomPublicationsArgs = {
  input: GetRandomPublicationsInput;
};


export type QueryGetRecentTopPostsArgs = {
  input: GetRecentTopPostsInput;
};


export type QueryGetSubscriptionsPublicationsArgs = {
  input: GetSubscriptionsPublicationsInput;
};


export type QueryGetUserPublicationsArgs = {
  input: GetUserPublicationsInput;
};


export type QueryGetAudioArgs = {
  getContentByIdInput: Scalars['String']['input'];
};


export type QueryGetAvatarArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetLoginArgs = {
  data: GetLoginInput;
};


export type QueryGetPhotoArgs = {
  getContentByIdInput: Scalars['String']['input'];
};


export type QueryGetProfileArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetTotalLikesArgs = {
  data: GetLikesRequestDto;
};


export type QueryGetVideoArgs = {
  getContentByIdInput: Scalars['String']['input'];
};

export type RegisterInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  createdAt: Scalars['String']['output'];
  login: Scalars['String']['output'];
};

export type RemoveSubscriptionInput = {
  subscriptionToRemove: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToPublicationComments: Comment;
};


export type SubscriptionSubscribeToPublicationCommentsArgs = {
  data: GetPublicationCommentsInput;
};

export type UpdateAboutInput = {
  about: Scalars['String']['input'];
};

export type UpdateAvatarInput = {
  file: Scalars['Upload']['input'];
};

export type UploadAudioInput = {
  about: Scalars['String']['input'];
  audio: Scalars['Upload']['input'];
  cover: Scalars['Upload']['input'];
  publicationName: Scalars['String']['input'];
  tegs: Array<Scalars['String']['input']>;
};

export type UploadPhotoInput = {
  about: Scalars['String']['input'];
  photo: Scalars['Upload']['input'];
  publicationName: Scalars['String']['input'];
  tegs: Array<Scalars['String']['input']>;
};

export type UploadVideoInput = {
  about: Scalars['String']['input'];
  cover: Scalars['Upload']['input'];
  publicationName: Scalars['String']['input'];
  tegs: Array<Scalars['String']['input']>;
  video: Scalars['Upload']['input'];
};

export type VideoResponse = {
  __typename?: 'VideoResponse';
  about: Scalars['String']['output'];
  coverUrl: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  publicationId: Scalars['String']['output'];
  publicationName: Scalars['String']['output'];
  tegs: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  videoUrl: Scalars['String']['output'];
};

export type ChangeLoginMutationVariables = Exact<{
  data: ChangeLoginInput;
}>;


export type ChangeLoginMutation = { __typename?: 'Mutation', changeLogin: boolean };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: boolean };

export type CreateCommentMutationVariables = Exact<{
  data: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: boolean };

export type SubscribeToPublicationCommentsSubscriptionVariables = Exact<{
  data: GetPublicationCommentsInput;
}>;


export type SubscribeToPublicationCommentsSubscription = { __typename?: 'Subscription', subscribeToPublicationComments: { __typename?: 'Comment', id: string, userId: string, comment: string } };

export type GetFullProfileQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetFullProfileQuery = { __typename?: 'Query', getLogin: { __typename?: 'GetLoginResponse', login: string }, getProfile: { __typename?: 'GetProfileResponse', about: string, avatarUrl: string, subscriptions?: Array<string> | null, subscribersCount: number } };

export type AddLikeMutationVariables = Exact<{
  data: LikeRequestDto;
}>;


export type AddLikeMutation = { __typename?: 'Mutation', addLike: boolean };

export type RemoveLikeMutationVariables = Exact<{
  data: LikeRequestDto;
}>;


export type RemoveLikeMutation = { __typename?: 'Mutation', removeLike: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, userId: string } };

export type UpdateAboutMutationVariables = Exact<{
  data: UpdateAboutInput;
}>;


export type UpdateAboutMutation = { __typename?: 'Mutation', updateAbout: boolean };

export type UpdateAvatarMutationVariables = Exact<{
  data: UpdateAvatarInput;
}>;


export type UpdateAvatarMutation = { __typename?: 'Mutation', updateAvatar: boolean };

export type GetUserPublicationsQueryVariables = Exact<{
  input: GetUserPublicationsInput;
}>;


export type GetUserPublicationsQuery = { __typename?: 'Query', GetUserPublications: { __typename?: 'PublicationsResponseDto', publications: Array<{ __typename?: 'PublicationDto', publicationId: string, userId: string, login: string, avatarUrl: string, publicationName: string, coverUrl: string, type: string }> } };

export type GetRecentTopPostsQueryVariables = Exact<{
  input: GetRecentTopPostsInput;
}>;


export type GetRecentTopPostsQuery = { __typename?: 'Query', GetRecentTopPosts: { __typename?: 'PublicationsResponseDto', publications: Array<{ __typename?: 'PublicationDto', publicationId: string, userId: string, login: string, avatarUrl: string, publicationName: string, coverUrl: string, type: string }> } };

export type GetLikedPublicationsQueryVariables = Exact<{
  input: GetLikedPublicationsInput;
}>;


export type GetLikedPublicationsQuery = { __typename?: 'Query', GetLikedPublications: { __typename?: 'PublicationsResponseDto', publications: Array<{ __typename?: 'PublicationDto', publicationId: string, userId: string, login: string, avatarUrl: string, publicationName: string, coverUrl: string, type: string }> } };

export type GetRandomPublicationsQueryVariables = Exact<{
  input: GetRandomPublicationsInput;
}>;


export type GetRandomPublicationsQuery = { __typename?: 'Query', GetRandomPublications: { __typename?: 'PublicationsResponseDto', publications: Array<{ __typename?: 'PublicationDto', publicationId: string, userId: string, login: string, avatarUrl: string, publicationName: string, coverUrl: string, type: string }> } };

export type GetSubscriptionsPublicationsQueryVariables = Exact<{
  input: GetSubscriptionsPublicationsInput;
}>;


export type GetSubscriptionsPublicationsQuery = { __typename?: 'Query', GetSubscriptionsPublications: { __typename?: 'PublicationsResponseDto', publications: Array<{ __typename?: 'PublicationDto', publicationId: string, userId: string, login: string, avatarUrl: string, publicationName: string, coverUrl: string, type: string }> } };

export type UploadVideoMutationVariables = Exact<{
  uploadVideoInput: UploadVideoInput;
}>;


export type UploadVideoMutation = { __typename?: 'Mutation', uploadVideo: boolean };

export type UploadAudioMutationVariables = Exact<{
  uploadAudioInput: UploadAudioInput;
}>;


export type UploadAudioMutation = { __typename?: 'Mutation', uploadAudio: boolean };

export type UploadPhotoMutationVariables = Exact<{
  uploadPhotoInput: UploadPhotoInput;
}>;


export type UploadPhotoMutation = { __typename?: 'Mutation', uploadPhoto: boolean };

export type ChangeVideoMutationVariables = Exact<{
  changeVideoInput: ChangeVideoInput;
}>;


export type ChangeVideoMutation = { __typename?: 'Mutation', changeVideo: boolean };

export type ChangeAudioMutationVariables = Exact<{
  changeAudioInput: ChangeAudioInput;
}>;


export type ChangeAudioMutation = { __typename?: 'Mutation', changeAudio: boolean };

export type ChangePhotoMutationVariables = Exact<{
  changePhotoInput: ChangePhotoInput;
}>;


export type ChangePhotoMutation = { __typename?: 'Mutation', changePhoto: boolean };

export type DeleteVideoMutationVariables = Exact<{
  data: DeleteContentInput;
}>;


export type DeleteVideoMutation = { __typename?: 'Mutation', deleteVideo: boolean };

export type DeleteAudioMutationVariables = Exact<{
  data: DeleteContentInput;
}>;


export type DeleteAudioMutation = { __typename?: 'Mutation', deleteAudio: boolean };

export type DeletePhotoMutationVariables = Exact<{
  data: DeleteContentInput;
}>;


export type DeletePhotoMutation = { __typename?: 'Mutation', deletePhoto: boolean };

export type GetVideoQueryVariables = Exact<{
  getContentByIdInput: Scalars['String']['input'];
}>;


export type GetVideoQuery = { __typename?: 'Query', getVideo: { __typename?: 'VideoResponse', publicationId: string, userId: string, publicationName: string, about: string, tegs: Array<string>, videoUrl: string, coverUrl: string, createdAt: string } };

export type GetAudioQueryVariables = Exact<{
  getContentByIdInput: Scalars['String']['input'];
}>;


export type GetAudioQuery = { __typename?: 'Query', getAudio: { __typename?: 'AudioResponse', publicationId: string, userId: string, publicationName: string, about: string, tegs: Array<string>, audioUrl: string, coverUrl: string, createdAt: string } };

export type GetPhotoQueryVariables = Exact<{
  getContentByIdInput: Scalars['String']['input'];
}>;


export type GetPhotoQuery = { __typename?: 'Query', getPhoto: { __typename?: 'PhotoResponse', publicationId: string, userId: string, publicationName: string, about: string, tegs: Array<string>, photoUrl: string, createdAt: string } };

export type GetTotalLikesQueryVariables = Exact<{
  data: GetLikesRequestDto;
}>;


export type GetTotalLikesQuery = { __typename?: 'Query', getTotalLikes: { __typename?: 'GetLikesResponseDto', total: number } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', login: string, createdAt: string } };

export type GetShortProfileQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetShortProfileQuery = { __typename?: 'Query', getLogin: { __typename?: 'GetLoginResponse', login: string }, getAvatar: { __typename?: 'GetAvatarResponse', avatarUrl: string } };

export type AddSubscriptionMutationVariables = Exact<{
  data: AddSubscriptionInput;
}>;


export type AddSubscriptionMutation = { __typename?: 'Mutation', addSubscription: boolean };

export type RemoveSubscriptionMutationVariables = Exact<{
  data: RemoveSubscriptionInput;
}>;


export type RemoveSubscriptionMutation = { __typename?: 'Mutation', removeSubscription: boolean };


export const ChangeLoginDocument = gql`
    mutation ChangeLogin($data: ChangeLoginInput!) {
  changeLogin(data: $data)
}
    `;
export type ChangeLoginMutationFn = Apollo.MutationFunction<ChangeLoginMutation, ChangeLoginMutationVariables>;

/**
 * __useChangeLoginMutation__
 *
 * To run a mutation, you first call `useChangeLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLoginMutation, { data, loading, error }] = useChangeLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeLoginMutation(baseOptions?: Apollo.MutationHookOptions<ChangeLoginMutation, ChangeLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeLoginMutation, ChangeLoginMutationVariables>(ChangeLoginDocument, options);
      }
export type ChangeLoginMutationHookResult = ReturnType<typeof useChangeLoginMutation>;
export type ChangeLoginMutationResult = Apollo.MutationResult<ChangeLoginMutation>;
export type ChangeLoginMutationOptions = Apollo.BaseMutationOptions<ChangeLoginMutation, ChangeLoginMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation DeleteAccount {
  deleteAccount
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CreateCommentInput!) {
  createComment(data: $data)
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const SubscribeToPublicationCommentsDocument = gql`
    subscription SubscribeToPublicationComments($data: GetPublicationCommentsInput!) {
  subscribeToPublicationComments(data: $data) {
    id
    userId
    comment
  }
}
    `;

/**
 * __useSubscribeToPublicationCommentsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToPublicationCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToPublicationCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToPublicationCommentsSubscription({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSubscribeToPublicationCommentsSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeToPublicationCommentsSubscription, SubscribeToPublicationCommentsSubscriptionVariables> & ({ variables: SubscribeToPublicationCommentsSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToPublicationCommentsSubscription, SubscribeToPublicationCommentsSubscriptionVariables>(SubscribeToPublicationCommentsDocument, options);
      }
export type SubscribeToPublicationCommentsSubscriptionHookResult = ReturnType<typeof useSubscribeToPublicationCommentsSubscription>;
export type SubscribeToPublicationCommentsSubscriptionResult = Apollo.SubscriptionResult<SubscribeToPublicationCommentsSubscription>;
export const GetFullProfileDocument = gql`
    query GetFullProfile($userId: String!) {
  getLogin(data: {userId: $userId}) {
    login
  }
  getProfile(userId: $userId) {
    about
    avatarUrl
    subscriptions
    subscribersCount
  }
}
    `;

/**
 * __useGetFullProfileQuery__
 *
 * To run a query within a React component, call `useGetFullProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFullProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFullProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetFullProfileQuery(baseOptions: Apollo.QueryHookOptions<GetFullProfileQuery, GetFullProfileQueryVariables> & ({ variables: GetFullProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFullProfileQuery, GetFullProfileQueryVariables>(GetFullProfileDocument, options);
      }
export function useGetFullProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFullProfileQuery, GetFullProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFullProfileQuery, GetFullProfileQueryVariables>(GetFullProfileDocument, options);
        }
export function useGetFullProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFullProfileQuery, GetFullProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFullProfileQuery, GetFullProfileQueryVariables>(GetFullProfileDocument, options);
        }
export type GetFullProfileQueryHookResult = ReturnType<typeof useGetFullProfileQuery>;
export type GetFullProfileLazyQueryHookResult = ReturnType<typeof useGetFullProfileLazyQuery>;
export type GetFullProfileSuspenseQueryHookResult = ReturnType<typeof useGetFullProfileSuspenseQuery>;
export type GetFullProfileQueryResult = Apollo.QueryResult<GetFullProfileQuery, GetFullProfileQueryVariables>;
export const AddLikeDocument = gql`
    mutation AddLike($data: LikeRequestDto!) {
  addLike(data: $data)
}
    `;
export type AddLikeMutationFn = Apollo.MutationFunction<AddLikeMutation, AddLikeMutationVariables>;

/**
 * __useAddLikeMutation__
 *
 * To run a mutation, you first call `useAddLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLikeMutation, { data, loading, error }] = useAddLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddLikeMutation(baseOptions?: Apollo.MutationHookOptions<AddLikeMutation, AddLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLikeMutation, AddLikeMutationVariables>(AddLikeDocument, options);
      }
export type AddLikeMutationHookResult = ReturnType<typeof useAddLikeMutation>;
export type AddLikeMutationResult = Apollo.MutationResult<AddLikeMutation>;
export type AddLikeMutationOptions = Apollo.BaseMutationOptions<AddLikeMutation, AddLikeMutationVariables>;
export const RemoveLikeDocument = gql`
    mutation RemoveLike($data: LikeRequestDto!) {
  removeLike(data: $data)
}
    `;
export type RemoveLikeMutationFn = Apollo.MutationFunction<RemoveLikeMutation, RemoveLikeMutationVariables>;

/**
 * __useRemoveLikeMutation__
 *
 * To run a mutation, you first call `useRemoveLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLikeMutation, { data, loading, error }] = useRemoveLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveLikeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveLikeMutation, RemoveLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveLikeMutation, RemoveLikeMutationVariables>(RemoveLikeDocument, options);
      }
export type RemoveLikeMutationHookResult = ReturnType<typeof useRemoveLikeMutation>;
export type RemoveLikeMutationResult = Apollo.MutationResult<RemoveLikeMutation>;
export type RemoveLikeMutationOptions = Apollo.BaseMutationOptions<RemoveLikeMutation, RemoveLikeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
    userId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateAboutDocument = gql`
    mutation UpdateAbout($data: UpdateAboutInput!) {
  updateAbout(data: $data)
}
    `;
export type UpdateAboutMutationFn = Apollo.MutationFunction<UpdateAboutMutation, UpdateAboutMutationVariables>;

/**
 * __useUpdateAboutMutation__
 *
 * To run a mutation, you first call `useUpdateAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAboutMutation, { data, loading, error }] = useUpdateAboutMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAboutMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAboutMutation, UpdateAboutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAboutMutation, UpdateAboutMutationVariables>(UpdateAboutDocument, options);
      }
export type UpdateAboutMutationHookResult = ReturnType<typeof useUpdateAboutMutation>;
export type UpdateAboutMutationResult = Apollo.MutationResult<UpdateAboutMutation>;
export type UpdateAboutMutationOptions = Apollo.BaseMutationOptions<UpdateAboutMutation, UpdateAboutMutationVariables>;
export const UpdateAvatarDocument = gql`
    mutation UpdateAvatar($data: UpdateAvatarInput!) {
  updateAvatar(data: $data)
}
    `;
export type UpdateAvatarMutationFn = Apollo.MutationFunction<UpdateAvatarMutation, UpdateAvatarMutationVariables>;

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvatarMutation, UpdateAvatarMutationVariables>(UpdateAvatarDocument, options);
      }
export type UpdateAvatarMutationHookResult = ReturnType<typeof useUpdateAvatarMutation>;
export type UpdateAvatarMutationResult = Apollo.MutationResult<UpdateAvatarMutation>;
export type UpdateAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const GetUserPublicationsDocument = gql`
    query GetUserPublications($input: GetUserPublicationsInput!) {
  GetUserPublications(input: $input) {
    publications {
      publicationId
      userId
      login
      avatarUrl
      publicationName
      coverUrl
      type
    }
  }
}
    `;

/**
 * __useGetUserPublicationsQuery__
 *
 * To run a query within a React component, call `useGetUserPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPublicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserPublicationsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPublicationsQuery, GetUserPublicationsQueryVariables> & ({ variables: GetUserPublicationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>(GetUserPublicationsDocument, options);
      }
export function useGetUserPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>(GetUserPublicationsDocument, options);
        }
export function useGetUserPublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>(GetUserPublicationsDocument, options);
        }
export type GetUserPublicationsQueryHookResult = ReturnType<typeof useGetUserPublicationsQuery>;
export type GetUserPublicationsLazyQueryHookResult = ReturnType<typeof useGetUserPublicationsLazyQuery>;
export type GetUserPublicationsSuspenseQueryHookResult = ReturnType<typeof useGetUserPublicationsSuspenseQuery>;
export type GetUserPublicationsQueryResult = Apollo.QueryResult<GetUserPublicationsQuery, GetUserPublicationsQueryVariables>;
export const GetRecentTopPostsDocument = gql`
    query GetRecentTopPosts($input: GetRecentTopPostsInput!) {
  GetRecentTopPosts(input: $input) {
    publications {
      publicationId
      userId
      login
      avatarUrl
      publicationName
      coverUrl
      type
    }
  }
}
    `;

/**
 * __useGetRecentTopPostsQuery__
 *
 * To run a query within a React component, call `useGetRecentTopPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentTopPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentTopPostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetRecentTopPostsQuery(baseOptions: Apollo.QueryHookOptions<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables> & ({ variables: GetRecentTopPostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>(GetRecentTopPostsDocument, options);
      }
export function useGetRecentTopPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>(GetRecentTopPostsDocument, options);
        }
export function useGetRecentTopPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>(GetRecentTopPostsDocument, options);
        }
export type GetRecentTopPostsQueryHookResult = ReturnType<typeof useGetRecentTopPostsQuery>;
export type GetRecentTopPostsLazyQueryHookResult = ReturnType<typeof useGetRecentTopPostsLazyQuery>;
export type GetRecentTopPostsSuspenseQueryHookResult = ReturnType<typeof useGetRecentTopPostsSuspenseQuery>;
export type GetRecentTopPostsQueryResult = Apollo.QueryResult<GetRecentTopPostsQuery, GetRecentTopPostsQueryVariables>;
export const GetLikedPublicationsDocument = gql`
    query GetLikedPublications($input: GetLikedPublicationsInput!) {
  GetLikedPublications(input: $input) {
    publications {
      publicationId
      userId
      login
      avatarUrl
      publicationName
      coverUrl
      type
    }
  }
}
    `;

/**
 * __useGetLikedPublicationsQuery__
 *
 * To run a query within a React component, call `useGetLikedPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLikedPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLikedPublicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetLikedPublicationsQuery(baseOptions: Apollo.QueryHookOptions<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables> & ({ variables: GetLikedPublicationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>(GetLikedPublicationsDocument, options);
      }
export function useGetLikedPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>(GetLikedPublicationsDocument, options);
        }
export function useGetLikedPublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>(GetLikedPublicationsDocument, options);
        }
export type GetLikedPublicationsQueryHookResult = ReturnType<typeof useGetLikedPublicationsQuery>;
export type GetLikedPublicationsLazyQueryHookResult = ReturnType<typeof useGetLikedPublicationsLazyQuery>;
export type GetLikedPublicationsSuspenseQueryHookResult = ReturnType<typeof useGetLikedPublicationsSuspenseQuery>;
export type GetLikedPublicationsQueryResult = Apollo.QueryResult<GetLikedPublicationsQuery, GetLikedPublicationsQueryVariables>;
export const GetRandomPublicationsDocument = gql`
    query GetRandomPublications($input: GetRandomPublicationsInput!) {
  GetRandomPublications(input: $input) {
    publications {
      publicationId
      userId
      login
      avatarUrl
      publicationName
      coverUrl
      type
    }
  }
}
    `;

/**
 * __useGetRandomPublicationsQuery__
 *
 * To run a query within a React component, call `useGetRandomPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomPublicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetRandomPublicationsQuery(baseOptions: Apollo.QueryHookOptions<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables> & ({ variables: GetRandomPublicationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>(GetRandomPublicationsDocument, options);
      }
export function useGetRandomPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>(GetRandomPublicationsDocument, options);
        }
export function useGetRandomPublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>(GetRandomPublicationsDocument, options);
        }
export type GetRandomPublicationsQueryHookResult = ReturnType<typeof useGetRandomPublicationsQuery>;
export type GetRandomPublicationsLazyQueryHookResult = ReturnType<typeof useGetRandomPublicationsLazyQuery>;
export type GetRandomPublicationsSuspenseQueryHookResult = ReturnType<typeof useGetRandomPublicationsSuspenseQuery>;
export type GetRandomPublicationsQueryResult = Apollo.QueryResult<GetRandomPublicationsQuery, GetRandomPublicationsQueryVariables>;
export const GetSubscriptionsPublicationsDocument = gql`
    query GetSubscriptionsPublications($input: GetSubscriptionsPublicationsInput!) {
  GetSubscriptionsPublications(input: $input) {
    publications {
      publicationId
      userId
      login
      avatarUrl
      publicationName
      coverUrl
      type
    }
  }
}
    `;

/**
 * __useGetSubscriptionsPublicationsQuery__
 *
 * To run a query within a React component, call `useGetSubscriptionsPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscriptionsPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscriptionsPublicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSubscriptionsPublicationsQuery(baseOptions: Apollo.QueryHookOptions<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables> & ({ variables: GetSubscriptionsPublicationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>(GetSubscriptionsPublicationsDocument, options);
      }
export function useGetSubscriptionsPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>(GetSubscriptionsPublicationsDocument, options);
        }
export function useGetSubscriptionsPublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>(GetSubscriptionsPublicationsDocument, options);
        }
export type GetSubscriptionsPublicationsQueryHookResult = ReturnType<typeof useGetSubscriptionsPublicationsQuery>;
export type GetSubscriptionsPublicationsLazyQueryHookResult = ReturnType<typeof useGetSubscriptionsPublicationsLazyQuery>;
export type GetSubscriptionsPublicationsSuspenseQueryHookResult = ReturnType<typeof useGetSubscriptionsPublicationsSuspenseQuery>;
export type GetSubscriptionsPublicationsQueryResult = Apollo.QueryResult<GetSubscriptionsPublicationsQuery, GetSubscriptionsPublicationsQueryVariables>;
export const UploadVideoDocument = gql`
    mutation UploadVideo($uploadVideoInput: UploadVideoInput!) {
  uploadVideo(uploadVideoInput: $uploadVideoInput)
}
    `;
export type UploadVideoMutationFn = Apollo.MutationFunction<UploadVideoMutation, UploadVideoMutationVariables>;

/**
 * __useUploadVideoMutation__
 *
 * To run a mutation, you first call `useUploadVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadVideoMutation, { data, loading, error }] = useUploadVideoMutation({
 *   variables: {
 *      uploadVideoInput: // value for 'uploadVideoInput'
 *   },
 * });
 */
export function useUploadVideoMutation(baseOptions?: Apollo.MutationHookOptions<UploadVideoMutation, UploadVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadVideoMutation, UploadVideoMutationVariables>(UploadVideoDocument, options);
      }
export type UploadVideoMutationHookResult = ReturnType<typeof useUploadVideoMutation>;
export type UploadVideoMutationResult = Apollo.MutationResult<UploadVideoMutation>;
export type UploadVideoMutationOptions = Apollo.BaseMutationOptions<UploadVideoMutation, UploadVideoMutationVariables>;
export const UploadAudioDocument = gql`
    mutation UploadAudio($uploadAudioInput: UploadAudioInput!) {
  uploadAudio(uploadAudioInput: $uploadAudioInput)
}
    `;
export type UploadAudioMutationFn = Apollo.MutationFunction<UploadAudioMutation, UploadAudioMutationVariables>;

/**
 * __useUploadAudioMutation__
 *
 * To run a mutation, you first call `useUploadAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAudioMutation, { data, loading, error }] = useUploadAudioMutation({
 *   variables: {
 *      uploadAudioInput: // value for 'uploadAudioInput'
 *   },
 * });
 */
export function useUploadAudioMutation(baseOptions?: Apollo.MutationHookOptions<UploadAudioMutation, UploadAudioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadAudioMutation, UploadAudioMutationVariables>(UploadAudioDocument, options);
      }
export type UploadAudioMutationHookResult = ReturnType<typeof useUploadAudioMutation>;
export type UploadAudioMutationResult = Apollo.MutationResult<UploadAudioMutation>;
export type UploadAudioMutationOptions = Apollo.BaseMutationOptions<UploadAudioMutation, UploadAudioMutationVariables>;
export const UploadPhotoDocument = gql`
    mutation UploadPhoto($uploadPhotoInput: UploadPhotoInput!) {
  uploadPhoto(uploadPhotoInput: $uploadPhotoInput)
}
    `;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      uploadPhotoInput: // value for 'uploadPhotoInput'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, options);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const ChangeVideoDocument = gql`
    mutation ChangeVideo($changeVideoInput: ChangeVideoInput!) {
  changeVideo(changeVideoInput: $changeVideoInput)
}
    `;
export type ChangeVideoMutationFn = Apollo.MutationFunction<ChangeVideoMutation, ChangeVideoMutationVariables>;

/**
 * __useChangeVideoMutation__
 *
 * To run a mutation, you first call `useChangeVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeVideoMutation, { data, loading, error }] = useChangeVideoMutation({
 *   variables: {
 *      changeVideoInput: // value for 'changeVideoInput'
 *   },
 * });
 */
export function useChangeVideoMutation(baseOptions?: Apollo.MutationHookOptions<ChangeVideoMutation, ChangeVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeVideoMutation, ChangeVideoMutationVariables>(ChangeVideoDocument, options);
      }
export type ChangeVideoMutationHookResult = ReturnType<typeof useChangeVideoMutation>;
export type ChangeVideoMutationResult = Apollo.MutationResult<ChangeVideoMutation>;
export type ChangeVideoMutationOptions = Apollo.BaseMutationOptions<ChangeVideoMutation, ChangeVideoMutationVariables>;
export const ChangeAudioDocument = gql`
    mutation ChangeAudio($changeAudioInput: ChangeAudioInput!) {
  changeAudio(changeAudioInput: $changeAudioInput)
}
    `;
export type ChangeAudioMutationFn = Apollo.MutationFunction<ChangeAudioMutation, ChangeAudioMutationVariables>;

/**
 * __useChangeAudioMutation__
 *
 * To run a mutation, you first call `useChangeAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeAudioMutation, { data, loading, error }] = useChangeAudioMutation({
 *   variables: {
 *      changeAudioInput: // value for 'changeAudioInput'
 *   },
 * });
 */
export function useChangeAudioMutation(baseOptions?: Apollo.MutationHookOptions<ChangeAudioMutation, ChangeAudioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeAudioMutation, ChangeAudioMutationVariables>(ChangeAudioDocument, options);
      }
export type ChangeAudioMutationHookResult = ReturnType<typeof useChangeAudioMutation>;
export type ChangeAudioMutationResult = Apollo.MutationResult<ChangeAudioMutation>;
export type ChangeAudioMutationOptions = Apollo.BaseMutationOptions<ChangeAudioMutation, ChangeAudioMutationVariables>;
export const ChangePhotoDocument = gql`
    mutation ChangePhoto($changePhotoInput: ChangePhotoInput!) {
  changePhoto(changePhotoInput: $changePhotoInput)
}
    `;
export type ChangePhotoMutationFn = Apollo.MutationFunction<ChangePhotoMutation, ChangePhotoMutationVariables>;

/**
 * __useChangePhotoMutation__
 *
 * To run a mutation, you first call `useChangePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePhotoMutation, { data, loading, error }] = useChangePhotoMutation({
 *   variables: {
 *      changePhotoInput: // value for 'changePhotoInput'
 *   },
 * });
 */
export function useChangePhotoMutation(baseOptions?: Apollo.MutationHookOptions<ChangePhotoMutation, ChangePhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePhotoMutation, ChangePhotoMutationVariables>(ChangePhotoDocument, options);
      }
export type ChangePhotoMutationHookResult = ReturnType<typeof useChangePhotoMutation>;
export type ChangePhotoMutationResult = Apollo.MutationResult<ChangePhotoMutation>;
export type ChangePhotoMutationOptions = Apollo.BaseMutationOptions<ChangePhotoMutation, ChangePhotoMutationVariables>;
export const DeleteVideoDocument = gql`
    mutation DeleteVideo($data: DeleteContentInput!) {
  deleteVideo(data: $data)
}
    `;
export type DeleteVideoMutationFn = Apollo.MutationFunction<DeleteVideoMutation, DeleteVideoMutationVariables>;

/**
 * __useDeleteVideoMutation__
 *
 * To run a mutation, you first call `useDeleteVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVideoMutation, { data, loading, error }] = useDeleteVideoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteVideoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVideoMutation, DeleteVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVideoMutation, DeleteVideoMutationVariables>(DeleteVideoDocument, options);
      }
export type DeleteVideoMutationHookResult = ReturnType<typeof useDeleteVideoMutation>;
export type DeleteVideoMutationResult = Apollo.MutationResult<DeleteVideoMutation>;
export type DeleteVideoMutationOptions = Apollo.BaseMutationOptions<DeleteVideoMutation, DeleteVideoMutationVariables>;
export const DeleteAudioDocument = gql`
    mutation DeleteAudio($data: DeleteContentInput!) {
  deleteAudio(data: $data)
}
    `;
export type DeleteAudioMutationFn = Apollo.MutationFunction<DeleteAudioMutation, DeleteAudioMutationVariables>;

/**
 * __useDeleteAudioMutation__
 *
 * To run a mutation, you first call `useDeleteAudioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAudioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAudioMutation, { data, loading, error }] = useDeleteAudioMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteAudioMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAudioMutation, DeleteAudioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAudioMutation, DeleteAudioMutationVariables>(DeleteAudioDocument, options);
      }
export type DeleteAudioMutationHookResult = ReturnType<typeof useDeleteAudioMutation>;
export type DeleteAudioMutationResult = Apollo.MutationResult<DeleteAudioMutation>;
export type DeleteAudioMutationOptions = Apollo.BaseMutationOptions<DeleteAudioMutation, DeleteAudioMutationVariables>;
export const DeletePhotoDocument = gql`
    mutation DeletePhoto($data: DeleteContentInput!) {
  deletePhoto(data: $data)
}
    `;
export type DeletePhotoMutationFn = Apollo.MutationFunction<DeletePhotoMutation, DeletePhotoMutationVariables>;

/**
 * __useDeletePhotoMutation__
 *
 * To run a mutation, you first call `useDeletePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhotoMutation, { data, loading, error }] = useDeletePhotoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeletePhotoMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhotoMutation, DeletePhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePhotoMutation, DeletePhotoMutationVariables>(DeletePhotoDocument, options);
      }
export type DeletePhotoMutationHookResult = ReturnType<typeof useDeletePhotoMutation>;
export type DeletePhotoMutationResult = Apollo.MutationResult<DeletePhotoMutation>;
export type DeletePhotoMutationOptions = Apollo.BaseMutationOptions<DeletePhotoMutation, DeletePhotoMutationVariables>;
export const GetVideoDocument = gql`
    query GetVideo($getContentByIdInput: String!) {
  getVideo(getContentByIdInput: $getContentByIdInput) {
    publicationId
    userId
    publicationName
    about
    tegs
    videoUrl
    coverUrl
    createdAt
  }
}
    `;

/**
 * __useGetVideoQuery__
 *
 * To run a query within a React component, call `useGetVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoQuery({
 *   variables: {
 *      getContentByIdInput: // value for 'getContentByIdInput'
 *   },
 * });
 */
export function useGetVideoQuery(baseOptions: Apollo.QueryHookOptions<GetVideoQuery, GetVideoQueryVariables> & ({ variables: GetVideoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoQuery, GetVideoQueryVariables>(GetVideoDocument, options);
      }
export function useGetVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoQuery, GetVideoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoQuery, GetVideoQueryVariables>(GetVideoDocument, options);
        }
export function useGetVideoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVideoQuery, GetVideoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVideoQuery, GetVideoQueryVariables>(GetVideoDocument, options);
        }
export type GetVideoQueryHookResult = ReturnType<typeof useGetVideoQuery>;
export type GetVideoLazyQueryHookResult = ReturnType<typeof useGetVideoLazyQuery>;
export type GetVideoSuspenseQueryHookResult = ReturnType<typeof useGetVideoSuspenseQuery>;
export type GetVideoQueryResult = Apollo.QueryResult<GetVideoQuery, GetVideoQueryVariables>;
export const GetAudioDocument = gql`
    query GetAudio($getContentByIdInput: String!) {
  getAudio(getContentByIdInput: $getContentByIdInput) {
    publicationId
    userId
    publicationName
    about
    tegs
    audioUrl
    coverUrl
    createdAt
  }
}
    `;

/**
 * __useGetAudioQuery__
 *
 * To run a query within a React component, call `useGetAudioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAudioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAudioQuery({
 *   variables: {
 *      getContentByIdInput: // value for 'getContentByIdInput'
 *   },
 * });
 */
export function useGetAudioQuery(baseOptions: Apollo.QueryHookOptions<GetAudioQuery, GetAudioQueryVariables> & ({ variables: GetAudioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAudioQuery, GetAudioQueryVariables>(GetAudioDocument, options);
      }
export function useGetAudioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAudioQuery, GetAudioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAudioQuery, GetAudioQueryVariables>(GetAudioDocument, options);
        }
export function useGetAudioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAudioQuery, GetAudioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAudioQuery, GetAudioQueryVariables>(GetAudioDocument, options);
        }
export type GetAudioQueryHookResult = ReturnType<typeof useGetAudioQuery>;
export type GetAudioLazyQueryHookResult = ReturnType<typeof useGetAudioLazyQuery>;
export type GetAudioSuspenseQueryHookResult = ReturnType<typeof useGetAudioSuspenseQuery>;
export type GetAudioQueryResult = Apollo.QueryResult<GetAudioQuery, GetAudioQueryVariables>;
export const GetPhotoDocument = gql`
    query GetPhoto($getContentByIdInput: String!) {
  getPhoto(getContentByIdInput: $getContentByIdInput) {
    publicationId
    userId
    publicationName
    about
    tegs
    photoUrl
    createdAt
  }
}
    `;

/**
 * __useGetPhotoQuery__
 *
 * To run a query within a React component, call `useGetPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotoQuery({
 *   variables: {
 *      getContentByIdInput: // value for 'getContentByIdInput'
 *   },
 * });
 */
export function useGetPhotoQuery(baseOptions: Apollo.QueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables> & ({ variables: GetPhotoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, options);
      }
export function useGetPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, options);
        }
export function useGetPhotoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, options);
        }
export type GetPhotoQueryHookResult = ReturnType<typeof useGetPhotoQuery>;
export type GetPhotoLazyQueryHookResult = ReturnType<typeof useGetPhotoLazyQuery>;
export type GetPhotoSuspenseQueryHookResult = ReturnType<typeof useGetPhotoSuspenseQuery>;
export type GetPhotoQueryResult = Apollo.QueryResult<GetPhotoQuery, GetPhotoQueryVariables>;
export const GetTotalLikesDocument = gql`
    query GetTotalLikes($data: GetLikesRequestDto!) {
  getTotalLikes(data: $data) {
    total
  }
}
    `;

/**
 * __useGetTotalLikesQuery__
 *
 * To run a query within a React component, call `useGetTotalLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalLikesQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTotalLikesQuery(baseOptions: Apollo.QueryHookOptions<GetTotalLikesQuery, GetTotalLikesQueryVariables> & ({ variables: GetTotalLikesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalLikesQuery, GetTotalLikesQueryVariables>(GetTotalLikesDocument, options);
      }
export function useGetTotalLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalLikesQuery, GetTotalLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalLikesQuery, GetTotalLikesQueryVariables>(GetTotalLikesDocument, options);
        }
export function useGetTotalLikesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTotalLikesQuery, GetTotalLikesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalLikesQuery, GetTotalLikesQueryVariables>(GetTotalLikesDocument, options);
        }
export type GetTotalLikesQueryHookResult = ReturnType<typeof useGetTotalLikesQuery>;
export type GetTotalLikesLazyQueryHookResult = ReturnType<typeof useGetTotalLikesLazyQuery>;
export type GetTotalLikesSuspenseQueryHookResult = ReturnType<typeof useGetTotalLikesSuspenseQuery>;
export type GetTotalLikesQueryResult = Apollo.QueryResult<GetTotalLikesQuery, GetTotalLikesQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    login
    createdAt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetShortProfileDocument = gql`
    query GetShortProfile($userId: String!) {
  getLogin(data: {userId: $userId}) {
    login
  }
  getAvatar(userId: $userId) {
    avatarUrl
  }
}
    `;

/**
 * __useGetShortProfileQuery__
 *
 * To run a query within a React component, call `useGetShortProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShortProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShortProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetShortProfileQuery(baseOptions: Apollo.QueryHookOptions<GetShortProfileQuery, GetShortProfileQueryVariables> & ({ variables: GetShortProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShortProfileQuery, GetShortProfileQueryVariables>(GetShortProfileDocument, options);
      }
export function useGetShortProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShortProfileQuery, GetShortProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShortProfileQuery, GetShortProfileQueryVariables>(GetShortProfileDocument, options);
        }
export function useGetShortProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetShortProfileQuery, GetShortProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShortProfileQuery, GetShortProfileQueryVariables>(GetShortProfileDocument, options);
        }
export type GetShortProfileQueryHookResult = ReturnType<typeof useGetShortProfileQuery>;
export type GetShortProfileLazyQueryHookResult = ReturnType<typeof useGetShortProfileLazyQuery>;
export type GetShortProfileSuspenseQueryHookResult = ReturnType<typeof useGetShortProfileSuspenseQuery>;
export type GetShortProfileQueryResult = Apollo.QueryResult<GetShortProfileQuery, GetShortProfileQueryVariables>;
export const AddSubscriptionDocument = gql`
    mutation AddSubscription($data: AddSubscriptionInput!) {
  addSubscription(data: $data)
}
    `;
export type AddSubscriptionMutationFn = Apollo.MutationFunction<AddSubscriptionMutation, AddSubscriptionMutationVariables>;

/**
 * __useAddSubscriptionMutation__
 *
 * To run a mutation, you first call `useAddSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSubscriptionMutation, { data, loading, error }] = useAddSubscriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<AddSubscriptionMutation, AddSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSubscriptionMutation, AddSubscriptionMutationVariables>(AddSubscriptionDocument, options);
      }
export type AddSubscriptionMutationHookResult = ReturnType<typeof useAddSubscriptionMutation>;
export type AddSubscriptionMutationResult = Apollo.MutationResult<AddSubscriptionMutation>;
export type AddSubscriptionMutationOptions = Apollo.BaseMutationOptions<AddSubscriptionMutation, AddSubscriptionMutationVariables>;
export const RemoveSubscriptionDocument = gql`
    mutation RemoveSubscription($data: RemoveSubscriptionInput!) {
  removeSubscription(data: $data)
}
    `;
export type RemoveSubscriptionMutationFn = Apollo.MutationFunction<RemoveSubscriptionMutation, RemoveSubscriptionMutationVariables>;

/**
 * __useRemoveSubscriptionMutation__
 *
 * To run a mutation, you first call `useRemoveSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSubscriptionMutation, { data, loading, error }] = useRemoveSubscriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSubscriptionMutation, RemoveSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSubscriptionMutation, RemoveSubscriptionMutationVariables>(RemoveSubscriptionDocument, options);
      }
export type RemoveSubscriptionMutationHookResult = ReturnType<typeof useRemoveSubscriptionMutation>;
export type RemoveSubscriptionMutationResult = Apollo.MutationResult<RemoveSubscriptionMutation>;
export type RemoveSubscriptionMutationOptions = Apollo.BaseMutationOptions<RemoveSubscriptionMutation, RemoveSubscriptionMutationVariables>;