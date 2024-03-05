type ParamsType = {
	params: {
		id: number
	}
}

//@ts-ignore
const UserComponent = ({ params, searchParams }) => {
	return (
		<>
			<div>{params.id}</div>
			<div>{searchParams.name}</div>
		</>
	)
}

export default UserComponent
