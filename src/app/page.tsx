'use client';

import {bitable} from '@lark-base-open/js-sdk';
import {toJson} from "@/services/table";
import {useState} from "react";

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>([])


    async function handleClick() {
        const {tableId, viewId} = await bitable.base.getSelection();
        if (!tableId || !viewId) {
            return;
        }
        setLoading(true)
        const recordIdList = await bitable.ui.selectRecordIdList(tableId, viewId);
        const table = await bitable.base.getActiveTable();

        const values = await toJson(table, recordIdList);

        try {
            for (const value of values) {
                const res = await fetch('https://api.qingcd.com/lark/users/virtual', {
                    method: 'POST',
                    body: JSON.stringify(value),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-lark-token': 'dC1nMTA0MTRoYllTNjY0NTJMSVZHNVJKUExUVUhTQU9ORlJXTlVLSTRR'
                    }
                });

                const json = await res.json();
                try {
                    let field = await table.getFieldByName("同步结果");
                    field && await field.setValue(value.larkId, json.payload ?? json.describe)

                    field = await table.getFieldByName("最后同步时间");
                    field && await field.setValue(value.larkId, new Date().toLocaleString())
                }catch (e){}

            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen">
            <button className="bg-indigo-500" onClick={handleClick} disabled={loading}>
                同步
            </button>
        </main>
    )
}
