import { useEffect, useState } from "react"

export default function UserList() {
    const [users, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const response = fetch("http://127.0.0.1:8000/api/user")
        const data = response.then(res => res.json())
        data.then(users => {
            setUser(users)
            setIsLoading(false)
        }).catch(error => {
            console.error("Error fetching users:", error)
        })
        
    }, [])
    return (
        <div className="flex items-center justify-center w-screen h-screen font-bold font-medium ">
            {isLoading ? (
                <p>Loading....</p>
            ) : (
            <ul>
                {users.map((user, index) => (
                    <li key={index} className="text-lg">
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
    
}