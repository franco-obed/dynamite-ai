'use client'
import React from "react"
import UserInput from "@/app/components/search/UserInput"
import AIDialog from "@/app/components/search/AIDialog"
import { Space } from "antd"

export default function Page() {
    return (
        <>  
            <Space direction="vertical">
                <AIDialog/>
                <UserInput/>
            </Space>
        </>
    );
};