export default function Friend({friend}){
    const {name, email, username} = friend;
   return (
    <div className="box">
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
        <h4>Username: {username}</h4>
    </div>
   )
}