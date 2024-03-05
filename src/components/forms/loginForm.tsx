'use client'

import Link from 'next/link'

const handleClick = (e: React.MouseEvent) => {
	e.preventDefault()
	console.log('click')
}
const LoginForm = () => {
	return (
		<form className='space-y-6'>
			<div>
				<label
					htmlFor='email'
					className='block text-sm font-medium text-gray-700'
				>
					Логин
				</label>
				<div className='mt-1'>
					<input
						id='email'
						name='email'
						type='text'
						autoComplete='text'
						required
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					/>
				</div>
			</div>
			<div>
				<label
					htmlFor='password'
					className='block text-sm font-medium text-gray-700'
				>
					Пароль
				</label>
				<div className='mt-1'>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					/>
				</div>
			</div>

			<div>
				<button
					onClick={e => handleClick(e)}
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
					focus:ring-indigo-500
					transition-all'
				>
					Войти
				</button>

				<Link
					href='/signup'
					target='_blank'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
					focus:ring-red-500
					transition-all'
				>
					Зарегистрироваться
				</Link>
				<Link href='https://google.com'>google</Link>
			</div>
		</form>
	)
}

export default LoginForm
