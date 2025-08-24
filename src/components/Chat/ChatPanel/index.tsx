'use client'
import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Avatar } from "antd";

const ChatPanel = () => {
    const [messages, setMessages] = useState<{ from: "me" | "bot"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: "me", text: input }]);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: "AI: " + input }]);
        }, 500);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col w-[400px] w-max-[400px] overflow-x-hidden h-screen bg-gray-900 border-r border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="font-bold text-lg text-gray-300">Chat Title</h2>
                <Avatar src="https://i.pravatar.cc/40" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-gray-300">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-2 border-b border-gray-700 py-6"
                    >
                        <Avatar
                            size={36}
                            className={'mr-4!'}
                            src={msg.from === "me" ? "https://i.pravatar.cc/40?img=5" : "https://i.pravatar.cc/40?img=3"}
                        />
                        <div className="flex-1 text-sm break-words">
                            <span className="font-semibold mr-1">
                                {msg.from === "me" ? "Me:" : "AI:"}
                            </span>
                            <p className="text-gray-400" style={{lineBreak:"anywhere"}}>{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex items-end p-4 border-t border-gray-700">
                <Input.TextArea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    onPressEnter={(e) => {
                        if (!e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    className="flex-1 mr-2 h-[45px]! bg-gray-800! text-gray-200! placeholder-gray-400! placeholder-center! border-none! focus:outline-none! focus:ring-0"
                />
                <Button type="primary" onClick={sendMessage} className="flex-shrink-0 h-[40px]">
                    Send
                </Button>
            </div>
        </div>
    );
};

export default ChatPanel;
