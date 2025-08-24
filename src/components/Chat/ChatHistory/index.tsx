import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const ChatHistory = () => {
    return (
        <div className="w-[260px] bg-gray-900 border-r border-gray-800 flex flex-col p-4">
            <Input
                placeholder="Search chats"
                prefix={<SearchOutlined className="text-gray-400!" />}
                classNames={{input: 'bg-gray-dark! text-gray-200! border-none! placeholder-gray-300! focus:shadow-none focus:outline-none'}}
                className="mb-8! h-[40px] bg-gray-dark! text-gray-200! border-none! placeholder-white! focus:shadow-none focus:outline-none"
            />

            <h3 className="font-semibold mb-2 text-gray-300">Chats</h3>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {[
                    'How to build a chatbot',
                    'Explain quantum computing',
                    'Best React practices',
                    'Translate this sentence',
                    'Generate a workout plan',
                ].map((chat, idx) => (
                    <div
                        key={idx}
                        className="p-2 mb-2 text-gray-400 rounded-md cursor-pointer transition-colors
                       hover:bg-dark hover:text-gray-200"
                    >
                        {chat}
                    </div>
                ))}
            </div>
        </div>
    );
};
