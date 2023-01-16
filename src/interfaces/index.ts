//todo move to interfaces/index.ts
export interface actionProps {
    type: string;
    payload: string
}
export interface UserProps {
    name: string;
    email:string;
    occupation: string;
    bio: string


}
export type InitialProps = {
    users: UserProps[],
    loading: boolean,
    error: string

}