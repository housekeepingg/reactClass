const User = ({ user }) => {
    return(
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    )
}

export const UserList = ({ users }) => {
    return(
        <div>
            {
                users.map(userInfo => (
                    <User user={userInfo} key={userInfo.id} />
                ))
            }
        </div>
    )
}