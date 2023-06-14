export const FriendListItem = ({avatar, name, isOnline, id})=>{
    const statusStyles = {
        backgroundColor: isOnline ? 'green' : 'red',
      };
    // const statusClassName = isOnline ? 'status-online' : 'status-offline';
    return (
        <li className="item" key = {id}>
  <span className="status" style={statusStyles}></span>
  <img className='avatar' src={avatar} alt={name} width="48" />
  <p className='name'>{name}</p>
</li>
    )

}