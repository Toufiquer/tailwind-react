const Card = ({
    item: { id, name, username, email, phone, website, company, address },
}) => {
    // let {
    //     name = "a",
    //     username = "a",
    //     email = "a",
    //     phone = "a",
    //     website = "a",
    //     company = "a",
    //     address = "a",
    // } = item.data;
    return (
        <div className="border-2 border-while border-solid m-6 text-white text-left p-6">
            <h2 className="text-2xl">Name: {name}</h2>
            <h2 className="text-2xl">ID: {id}</h2>
            <h2 className="text-2xl">UserName: {username}</h2>
            <h2 className="text-2xl">E-mail: {email}</h2>
            <h2 className="text-2xl">Address: {address.city}</h2>
            <h2 className="text-2xl">Phone: {phone}</h2>
            <h2 className="text-2xl">Website: {website}</h2>
            <h2 className="text-2xl">Company: {company.name}</h2>
        </div>
    );
};

export default Card;
