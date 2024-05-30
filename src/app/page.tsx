import React from 'react'
import { User, columns } from './users/columns'
import { DataTable } from '@/components/DataTable';

async function getUsers(): Promise<User[]> {
    const response = await fetch('https://6658ba8a5c3617052649a53f.mockapi.io/user');
    const data = await response.json();
    return data;
}

export default async function Page() {

  const data = await getUsers();

  return (
    <div className='py-24'>
        <div className="container">
            <h1>Users</h1>
            <DataTable data={data} columns={columns} />
        </div>
    </div>
  )
}
