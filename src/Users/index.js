import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import './index.css'


const Users = () => {
    const {users, loading, errors} = useGetUsers();
    console.log({users});
    return(
        <div className="Users">
            {loading && <h2>loading users...</h2>}
            {errors.length>0 && <h2>{errors}</h2>}
            {users.length > 0
            ? users.map((user) => (
                <UserCard
                key={user.id}
                image={user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                />
            ) )
        : !loading && <h2>Users not found</h2>}
        </div>
    );
};
export default Users;