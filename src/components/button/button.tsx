type ButtonProps = {
	text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<div className='flex justify-center item-center mt-[25%]'>
			<button className='pl-10 pr-10 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
				{text}
			</button>
		</div>
	)
}

export default Button
