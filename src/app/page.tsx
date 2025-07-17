'use client';

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string | null;
  email: string | null;
  address: string | null;
  createdAt: string | null;
  updateAt: string | null;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUser();
  }, []); 

  return (
    <main className="bg-white p-4">
      <h1 className="text-xl font-bold mb-4">Users Data</h1>
      <code className="whitespace-pre-wrap">{JSON.stringify(users, null, 2)}</code>
    </main>
  );
}
