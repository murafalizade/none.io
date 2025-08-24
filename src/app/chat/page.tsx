'use client'
import { Input, Avatar, Button } from 'antd';
import { useState } from 'react';
import { AudioOutlined  } from '@ant-design/icons';
import {ChatHistory} from "@/components/Chat/ChatHistory";

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState<string[]>([]);

    const handleSend = () => {
        if (!message.trim()) return;
        setChats([...chats, message]);
        setMessage('');
    };

    return (
        <div className="flex h-screen bg-gray-900">
            <ChatHistory />

            {/* Right Main Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <div className="font-bold text-lg text-white">None AI</div>
                    <Avatar src="https://i.pravatar.cc/40" />
                </div>

                {/* Main Body */}
                <div className="flex-1 flex flex-col justify-center items-center bg-dark p-4">
                    <div className="w-full max-w-lg flex flex-col">
                        <h1 className="text-3xl font-semibold text-gray-200 text-center mb-8">
                            Start Your Chat
                        </h1>
                        <div className="w-full max-w-3xl bg-[#121212] border border-white rounded-lg p-3 flex flex-col">
                            {/* Textarea */}
                            <Input.TextArea
                                placeholder="Describe your sound track"
                                autoSize={{ minRows: 7, maxRows: 12 }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-transparent! text-gray-200! border-none! placeholder-gray-500! focus:shadow-none focus:outline-none!"
                            />

                            {/* Actions row */}
                            <div className="flex justify-end items-center">

                                {/* Right buttons */}
                                <div className="flex gap-2 items-center">
                                    <Button
                                        type="text"
                                        icon={<AudioOutlined className="text-gray-300!" />}
                                        className="bg-gray-800! rounded-md"
                                    />
                                    <Button
                                        onClick={handleSend}
                                        className="rounded-full px-4 "
                                    >
                                        Generate sound
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
