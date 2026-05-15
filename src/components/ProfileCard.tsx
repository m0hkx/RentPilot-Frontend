import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function ProfileCard({avatar, name, email}: {avatar: string, name: string, email: string}) {
    return (
        <div className='flex items-center space-x-4 p-2 bg-white rounded-full'>
            <img className='w-10 h-10 rounded-full' src={avatar} alt={name} />

            <div>
                <h2 className='text-sm font-regular'>{name}</h2>
                <p className='text-xs font-light text-gray-500'>{email}</p>
            </div>

            <ChevronDownIcon className="w-5 h-5 mr-2 text-gray-500" />
        </div>
    );
}