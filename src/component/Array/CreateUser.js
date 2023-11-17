export const CreateUser = ({ username, useremail, onChange, onCreate }) => {
    return(
        <div>
            <input name="username" onChange={onChange} value={username}  placeholder="id" />
            <input name="useremail" onChange={onChange} value={useremail}  placeholder="email" />

            <button onClick={onCreate}>등록</button>
        </div>
    )
}